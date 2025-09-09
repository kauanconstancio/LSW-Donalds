// Tipos basicos

let age: number = 5;
const firstName: string = "Kauan";
const isValid: boolean = true;
const idk: any = 5;

const ids: number[] = [];

// Tupla
const person: [number, string] = [1, "teste"];

// Lista de Tuplas
const people: [number, string][] = [
  [1, "Kauan"],
  [2, "Tiago"],
];

// Intersections (podemos referenciar como string ou número)
const productId: string | number = "1";

//Enum
enum Direction {
  Up = 1,
  down = 2,
}

const direction = Direction.Up;

// Type Assertions (pode realizar a mudança de propriedade da variavel)
const productName: any = "boné";

// let itemId = produtcName as string;
let itemId = <string>productName;
console.log(direction);

// teste
