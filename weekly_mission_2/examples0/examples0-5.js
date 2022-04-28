// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa", //este es el nombre de la mascota que saluda
    sayHelloToMyPet: function(yourPet){ //se declara una función y tiene una variable como parámetro
        console.log(`${this.name} le dice hola a ${yourPet}`) //se envía a consola el saludo
    }
}
console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Tulio") // de aquí la variable en la funcion obtiene el string para completar el saludo