//Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará TRUE, de lo contrario será false

//Lista de elementos
const bools = [ true,true,false,true]
//uso de Some para ver si al menos uno de los elementos es FALSE
const areSomeTrue = bools.some((b) => b === false)
console.log("Ejemplo 14: alguno de los elementos en el array es false: "+ areSomeTrue) //true
