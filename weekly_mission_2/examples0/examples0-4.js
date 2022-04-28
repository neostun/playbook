// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    //Esta  es una función que se guarda como una propiedad
    sayHello: function(){
        //this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español!`)
    }
}
console.log("Ejemplo 4: objeto con métodos")
pet.sayHello()

console.log("y su definición")
console.log(pet)
