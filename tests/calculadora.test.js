/*test("Tudo certo?", () => {
  console.log("ainda to aqui!");
});

test("Mais uma vez tudo certo?", () => {
  console.log("sim ainda aqui...");
});

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
*/
const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});
test("somar 5 + 100 = 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});
test("somar 'banana' + 100 = 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
