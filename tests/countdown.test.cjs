const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

const timestamp = html.match(/<meta name="exam-timestamp" content="([^"]+)"/)[1];
const exam = new Date(timestamp);
const warning = new Date(exam.getTime() - 3 * 60 * 60 * 1000);
const source = app.slice(app.indexOf("function countdownState"), app.indexOf("function showFinalScreen"));
const context = vm.createContext({ EXAM_DATE: exam, WARNING_DATE: warning, Date });
vm.runInContext(source, context);
const countdownState = vm.runInContext("countdownState", context);
const at = (iso) => countdownState(new Date(iso).getTime());

test("la fecha del examen usa el timestamp absoluto de Perú", () => {
  assert.equal(timestamp, "2026-11-22T08:00:00-05:00");
  assert.equal(exam.toISOString(), "2026-11-22T13:00:00.000Z");
  assert.equal(warning.toISOString(), "2026-11-22T10:00:00.000Z");
});

test("la advertencia aparece a las 05:00 y sigue activa a las 07:00", () => {
  assert.equal(at("2026-11-22T09:59:59Z").warning, false);
  assert.equal(at("2026-11-22T10:00:00Z").warning, true);
  assert.equal(at("2026-11-22T12:00:00Z").warning, true);
  assert.equal(at("2026-11-22T12:00:00Z").done, false);
});

test("la despedida sustituye al contador exactamente a las 08:00", () => {
  const before = at("2026-11-22T12:59:59Z");
  const exact = at("2026-11-22T13:00:00Z");
  const after = at("2026-11-22T13:00:01Z");
  assert.equal(before.done, false);
  assert.equal(before.warning, true);
  assert.equal(exact.done, true);
  assert.equal(exact.warning, false);
  assert.equal(JSON.stringify(exact.values), JSON.stringify({ days: 0, hours: 0, minutes: 0, seconds: 0 }));
  assert.equal(after.done, true);
});

test("el marcado incluye ambos avisos, la tarjeta y la pantalla final", () => {
  assert.equal((html.match(/class="exam-warning"/g) || []).length, 2);
  assert.match(html, /YA DEBERÍAS ESTAR CAMINO AL EXAMEN/);
  assert.match(html, /Ingreso permitido hasta las 8:30 a\. m\., según el prospecto UNSCH 2027-I/);
  assert.match(html, /Estás más cerca de lo que crees/);
  assert.match(html, /Antes de salir de casa/i);
  assert.match(html, /id="exam-farewell"[^>]*hidden/);
  assert.match(html, /Sé que lo diste todo\./);
  assert.match(html, /Pase lo que pase, gracias por haber llegado hasta aquí/);
});
