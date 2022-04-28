// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0; //la variable sum inicia en 0
const numbers2 = [1,2,3,4,5]; //la constante tiene una lista de 5 numeros
numbers2.forEach(num => sum += num) //aplica la operación de suma usando la lista numbers2 y lo agrega a la variable sum
console.log("Ejemplo 2: Cálculo de la suma de los elementos de una lista")
console.log(sum)