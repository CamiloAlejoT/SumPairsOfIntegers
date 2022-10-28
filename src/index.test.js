const solveProblem = require("./index");

test("Prueba el vector default", () => {
  const newArr = [1, 9, 5, 0, 20, -4, 12, 16, 7];
  const sum = 12;
  const min = -4;
  const max = 20;

  expect(solveProblem.getPairs(newArr, sum, min, max)).toBe(true);
});

test("prueba de carga 70 millones de registros y rango entre -20000 y 20000", () => {
  const count = 70000000;
  const min = -20000;
  const max = 20000;
  let newArr = [];

  for (let i = 0; i <= count; i++)
    newArr.push(Math.floor(Math.random() * (max - min) + min));
  const sum = Math.floor(Math.random() * (max - min) + min);

  expect(solveProblem.getPairs(newArr, sum, min, max)).toBe(true);
});

test("Solo números negativos", () => {
  const count = 1000000;
  const min = -20000;
  const max = 0;
  let newArr = [];

  for (let i = 0; i <= count; i++)
    newArr.push(Math.floor(Math.random() * (max - min) + min));
  const sum = Math.floor(Math.random() * (max - min) + min);

  expect(solveProblem.getPairs(newArr, sum, min, max)).toBe(true);
});

test("Solo números positivos", () => {
  const count = 1000000;
  const min = 0;
  const max = 20000;
  let newArr = [];

  for (let i = 0; i <= count; i++)
    newArr.push(Math.floor(Math.random() * (max - min) + min));
  const sum = Math.floor(Math.random() * (max - min) + min);

  expect(solveProblem.getPairs(newArr, sum, min, max)).toBe(true);
});

test("Números continuos con sumatoria cerca al limite", () => {
  const count = 10;
  let newArr = [];
  for (let i = (count * -1); i <= count; i++) newArr.push(i);
  expect(solveProblem.getPairs(newArr, count - 1, 0, 10)).toBe(true);
});
