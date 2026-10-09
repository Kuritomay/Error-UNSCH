// El recuerdo autoevaluado tiene su propio progreso: no altera intentos ni niveles K.
let activeMentalQuestion = null;
let mentalSessionCount = 0;
let mentalRecentQuestions = [];
let practiceReturnFocus = null;
const practiceDialog = document.querySelector("#practice-dialog");
const mentalSessionMisses = new Map();
const mentalQuestionsByCourse = new Map(studyCourses.map(({ course }) => [course, mentalQuestionBank.filter((question) => question.course === course)]));
const mentalCatalogTopics = new Map(catalog.map((topic) => [`${topic.course}|${topic.name}`, topic]));
const MENTAL_REVIEW_DAYS = [1, 3, 7, 14, 30];
const mentalCourseThemes = {
  math: ["RLM", "Aritmética", "Álgebra", "Geometría", "Trigonometría"],
  science: ["Física", "Química", "Biología", "Anatomía"],
  words: ["Razonamiento verbal", "Lenguaje", "Literatura"]
};

function setMentalStep(step) {
  document.querySelector("#mental-practice").dataset.step = step;
  document.querySelectorAll(".mental-steps li").forEach((item) => {
    if (item.dataset.step === step) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
  });
}

function mentalStats() { return state.mentalProgress || {}; }
function mentalTopic(question) { return mentalCatalogTopics.get(`${question.course}|${question.topic}`); }
function mentalQuestionWeight(question) {
  const priority = mentalTopic(question)?.priority;
  return question.foundation || priority === "S" ? 4 : priority === "A" ? 2 : 1;
}
function pickMentalQuestion(course, now = Date.now()) {
  const all = mentalQuestionsByCourse.get(course) || [];
  const last = activeMentalQuestion?.question.id || state.mentalLastQuestion;
  const withoutLast = all.filter((question) => question.id !== last);
  let pool = withoutLast.length ? withoutLast : all;
  const spaced = pool.filter((question) => !mentalRecentQuestions.slice(-3).includes(question.id));
  if (spaced.length) pool = spaced;
  const progress = mentalStats();
  const reviews = pool.filter((question) => {
    const missedAt = mentalSessionMisses.get(question.id);
    return (progress[question.id] && progress[question.id].dueAt <= now) || (missedAt !== undefined && mentalSessionCount - missedAt >= 3);
  });
  const unseen = pool.filter((question) => !progress[question.id]);
  if (reviews.length) pool = reviews;
  else if (unseen.length) pool = unseen;
  if (!pool.length) return null;
  const candidates = pool.map((question) => ({ question, weight: mentalQuestionWeight(question) / (1 + (progress[question.id]?.stage || 0)) }));
  return weightedCourse(candidates).question;
}

function renderMentalProgress() {
  const progress = mentalStats();
  const seen = mentalQuestionBank.filter((question) => progress[question.id]);
  const due = seen.filter((question) => progress[question.id].dueAt <= Date.now());
  const percentage = Math.round(seen.length / mentalQuestionBank.length * 100);
  document.querySelector("#memory-total").textContent = mentalQuestionBank.length;
  document.querySelector("#memory-seen").textContent = seen.length;
  document.querySelector("#memory-due").textContent = due.length;
  document.querySelector("#memory-percent").textContent = `${percentage}%`;
  document.querySelector("#memory-ring").style.setProperty("--memory-progress", `${percentage}%`);
  document.querySelector("#mental-progress").textContent = "Preguntas exploradas con recuerdo autoevaluado. Una base a la vez.";
  document.querySelector("#practice-session-summary").textContent = mentalSessionCount ? `${mentalSessionCount} ${mentalSessionCount === 1 ? "respuesta valorada" : "respuestas valoradas"} en esta sesión. Cada idea cuenta.` : "Una pregunta puede desbloquear muchos problemas.";
}

function startMentalPractice(course) {
  if (document.querySelector("#roll-dice").disabled) return;
  const question = pickMentalQuestion(course);
  if (!question) return;
  activeMentalQuestion = { question, startedAt: performance.now(), revealed: false, rated: false };
  mentalRecentQuestions.push(question.id);
  mentalRecentQuestions = mentalRecentQuestions.slice(-12);
  state.mentalLastQuestion = question.id;
  saveState();
  renderMentalProgress();
  const item = studyCourses.find((item) => item.course === course);
  const topic = mentalTopic(question);
  const theme = Object.keys(mentalCourseThemes).find((theme) => mentalCourseThemes[theme].includes(course)) || "humanities";
  document.querySelector("#mental-practice").dataset.theme = theme;
  document.querySelector("#mental-course-icon").setAttribute("href", `#practice-${theme}`);
  document.querySelector("#mental-course").textContent = item.label || course;
  document.querySelector("#mental-topic").textContent = question.topic;
  setMentalStep("think");
  document.querySelector("#mental-kind").textContent = question.foundation ? "Herramienta base" : topic?.treatment === "deep" ? "Base de tema profundo" : "Base reutilizable";
  document.querySelector("#mental-question").textContent = question.prompt;
  document.querySelector("#mental-solution").hidden = true;
  document.querySelector("#mental-next").hidden = true;
  document.querySelector("#reveal-answer").hidden = false;
  document.querySelector("#mental-feedback").textContent = "";
  // Vacía la solución anterior también para tecnologías de asistencia.
  ["#mental-answer", "#mental-explanation", "#mental-use"].forEach((id) => { document.querySelector(id).textContent = ""; });
  document.querySelectorAll("[data-recall]").forEach((button) => { button.disabled = false; button.classList.remove("selected"); button.removeAttribute("aria-pressed"); });
  document.querySelector("#mental-practice").hidden = false;
  if (!practiceDialog.open) {
    practiceReturnFocus = document.activeElement;
    practiceDialog.showModal();
    document.documentElement.classList.add("practice-open");
  }
  practiceDialog.scrollTop = 0;
  const heading = document.querySelector("#mental-question");
  heading.focus({ preventScroll: true });
  heading.scrollIntoView({ block: "nearest", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}

function revealMentalAnswer() {
  if (!activeMentalQuestion || activeMentalQuestion.revealed) return;
  activeMentalQuestion.revealed = true;
  setMentalStep("learn");
  activeMentalQuestion.seconds = Math.max(1, Math.round((performance.now() - activeMentalQuestion.startedAt) / 1000));
  const question = activeMentalQuestion.question;
  document.querySelector("#mental-answer").textContent = question.answer;
  document.querySelector("#mental-explanation").textContent = question.explanation;
  document.querySelector("#mental-use").textContent = question.use;
  document.querySelector("#reveal-answer").hidden = true;
  document.querySelector("#mental-solution").hidden = false;
  const answer = document.querySelector("#mental-answer");
  answer.focus({ preventScroll: true });
  answer.scrollIntoView({ block: "nearest", behavior: "instant" });
}

function rateMentalRecall(rating) {
  if (!activeMentalQuestion?.revealed || activeMentalQuestion.rated || !["again", "slow", "easy"].includes(rating)) return;
  activeMentalQuestion.rated = true;
  setMentalStep("review");
  const { question, seconds } = activeMentalQuestion;
  state.mentalProgress = state.mentalProgress || {};
  const previous = state.mentalProgress[question.id] || { seen: 0, stage: 0, misses: 0 };
  const stage = rating === "easy" ? Math.min(previous.stage + 1, MENTAL_REVIEW_DAYS.length) : rating === "slow" ? Math.max(0, previous.stage - 1) : 0;
  const delay = rating === "again" ? 2 * 60000 : rating === "slow" ? 10 * 60000 : MENTAL_REVIEW_DAYS[stage - 1] * 86400000;
  state.mentalProgress[question.id] = { seen: previous.seen + 1, stage, misses: previous.misses + (rating === "again" ? 1 : 0), rating, seconds, lastSeen: Date.now(), dueAt: Date.now() + delay };
  mentalSessionCount++;
  if (rating === "again") mentalSessionMisses.set(question.id, mentalSessionCount);
  else mentalSessionMisses.delete(question.id);
  saveState();
  renderMentalProgress();
  const message = rating === "again" ? "La repasaremos tras otras preguntas o en unos 2 minutos. Quédate con la idea clave." : rating === "slow" ? "Ya la entiendes. La repasaremos en unos 10 minutos para ganar velocidad." : `Bien. Próximo repaso en ${MENTAL_REVIEW_DAYS[stage - 1]} ${stage === 1 ? "día" : "días"}.`;
  document.querySelector("#mental-feedback").textContent = `${message} Tiempo hasta ver la respuesta: ${seconds} s.`;
  document.querySelectorAll("[data-recall]").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("selected", button.dataset.recall === rating);
    button.setAttribute("aria-pressed", String(button.dataset.recall === rating));
  });
  document.querySelector("#mental-next").hidden = false;
  document.querySelector("#next-question").focus({ preventScroll: true });
  document.querySelector("#next-question").scrollIntoView({ block: "nearest", behavior: "instant" });
}

document.addEventListener("study-course-selected", (event) => startMentalPractice(event.detail));
document.querySelector("#start-practice").addEventListener("click", () => {
  const course = state.diceLastCourse;
  if (availableStudyCourses().some((item) => item.course === course)) startMentalPractice(course);
  else rollStudyDice();
});
document.querySelector("#reveal-answer").addEventListener("click", revealMentalAnswer);
document.querySelectorAll("[data-recall]").forEach((button) => button.addEventListener("click", () => rateMentalRecall(button.dataset.recall)));
document.querySelector("#next-question").addEventListener("click", () => { if (activeMentalQuestion?.rated) startMentalPractice(activeMentalQuestion.question.course); });
document.querySelector("#finish-practice").addEventListener("click", () => practiceDialog.close());
practiceDialog.addEventListener("close", () => {
  if (practiceDialog.open) return;
  document.documentElement.classList.remove("practice-open");
  document.querySelector("#mental-practice").hidden = true;
  renderMentalProgress();
  if (mentalSessionCount) document.querySelector("#mental-progress").textContent = `Práctica terminada: ${mentalSessionCount} ${mentalSessionCount === 1 ? "respuesta valorada" : "respuestas valoradas"}. Puedes volver cuando quieras.`;
  mentalSessionCount = 0;
  mentalSessionMisses.clear();
  activeMentalQuestion = null;
  const focusTarget = practiceReturnFocus?.isConnected && practiceReturnFocus !== document.body ? practiceReturnFocus : document.querySelector("#start-practice");
  focusTarget.focus({ preventScroll: true });
  practiceReturnFocus = null;
});
document.querySelector("#practice-shuffle").addEventListener("click", () => {
  const available = availableStudyCourses();
  const others = available.filter((item) => item.course !== activeMentalQuestion?.question.course);
  const courses = others.length ? others : available;
  const chosen = weightedCourse(courses);
  if (!chosen) return;
  state.diceLastCourse = chosen.course;
  state.diceLastProbability = studyProbability(chosen, courses);
  saveState();
  renderDiceResult();
  startMentalPractice(chosen.course);
});
window.addEventListener("hashchange", () => { if (practiceDialog.open) practiceDialog.close(); });
renderMentalProgress();
