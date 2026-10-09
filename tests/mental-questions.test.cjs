const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const context = vm.createContext({});
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
vm.runInContext(fs.readFileSync(path.join(root, "mental-questions.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "mental-questions-extra.js"), "utf8"), context);
// Carga solo el catálogo y las definiciones; el arranque de la UI no es necesario.
vm.runInContext(app.slice(0, app.indexOf("function loadState()")), context);
const bank = vm.runInContext("mentalQuestionBank", context);
const catalog = vm.runInContext("catalog", context);
const courses = vm.runInContext("studyCourses", context);

test("el banco cubre todos los cursos y enlaza con microtemas reales", () => {
  assert.ok(bank.length >= 600);
  assert.equal(new Set(bank.map((question) => question.id)).size, bank.length);
  for (const item of courses) assert.ok(bank.filter((question) => question.course === item.course).length >= 16, item.course);
  for (const question of bank) {
    assert.ok(courses.some((item) => item.course === question.course), question.id);
    assert.ok(catalog.some((topic) => topic.course === question.course && topic.name === question.topic), question.id);
    for (const key of ["prompt", "answer", "explanation", "use"]) assert.ok(typeof question[key] === "string" && question[key].trim(), `${question.id}: ${key}`);
  }
});

test("cada microtema profundo y cada bloque de RV tienen preguntas de práctica", () => {
  for (const topic of catalog.filter((topic) => topic.treatment === "deep")) {
    assert.ok(bank.filter((question) => question.course === topic.course && question.topic === topic.name).length >= 3, `${topic.course}: ${topic.name}`);
  }
  const rvTopics = catalog.filter((topic) => topic.course === "Razonamiento verbal");
  assert.ok(bank.filter((question) => question.course === "Razonamiento verbal").length >= 100);
  for (const topic of rvTopics) assert.ok(bank.filter((question) => question.course === topic.course && question.topic === topic.name).length >= 2, topic.name);
});

test("Historia pregunta hechos y relaciones, no fechas de memoria", () => {
  for (const question of bank.filter((question) => question.course.startsWith("Historia"))) {
    assert.doesNotMatch(question.prompt, /(?:en qué|qué)\s+(?:año|fecha|día|mes)|cuándo\s+(?:comenzó|ocurrió|se libró)/i);
    assert.doesNotMatch(question.answer.trim(), /^\d{4}$/);
  }
});

test("las variantes numéricas dan resultados correctos", () => {
  let checked = 0;
  for (const question of bank) {
    let match;
    if ((match = question.prompt.match(/^¿Cuánto es (\d+) × (\d+)\?$/))) {
      assert.equal(Number(question.answer), Number(match[1]) * Number(match[2]));
      checked++;
    } else if ((match = question.prompt.match(/^¿Cuánto es el (\d+)% de (\d+)\?$/))) {
      assert.equal(Number(question.answer) / Number(match[2]), Number(match[1]) / 100);
      checked++;
    } else if ((match = question.prompt.match(/^Si (\d+)x \+ (\d+) = (\d+), ¿cuánto vale x\?$/))) {
      assert.equal(Number(match[1]) * Number(question.answer) + Number(match[2]), Number(match[3]));
      checked++;
    } else if ((match = question.prompt.match(/^Una masa de (\d+) kg acelera a (\d+) m\/s²\./))) {
      assert.equal(parseFloat(question.answer) / Number(match[1]), Number(match[2]));
      assert.ok(question.answer.endsWith(" N"));
      checked++;
    }
  }
  assert.ok(checked >= 65);
});

test("las tablas solicitadas están completas y los ángulos aproximados están señalados", () => {
  for (const a of [6, 7, 8, 9]) {
    for (let b = 2; b <= 9; b++) assert.ok(bank.some((question) => question.prompt === `¿Cuánto es ${a} × ${b}?`));
  }
  for (const question of bank.filter((question) => /37°|53°/.test(question.prompt))) {
    assert.match(question.prompt, /aproximación/);
    assert.match(question.answer, /Aproximadamente/);
  }
});
