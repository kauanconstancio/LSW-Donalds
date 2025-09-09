"use strict";
// Tipos basicos
Object.defineProperty(exports, "__esModule", { value: true });
let age = 5;
const firstName = "Kauan";
const isValid = true;
const idk = 5;
const ids = [];
// Tupla
const person = [1, "teste"];
// Lista de Tuplas
const people = [
    [1, "Kauan"],
    [2, "Tiago"],
];
// Intersections (podemos referenciar como string ou número)
const productId = "1";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions (pode realizar a mudança de propriedade da variavel)
const productName = "boné";
// let itemId = produtcName as string;
let itemId = productName;
console.log(direction);
// teste
//# sourceMappingURL=index.js.map