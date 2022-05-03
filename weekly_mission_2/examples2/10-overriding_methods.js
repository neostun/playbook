//Ejemplo 10: Sobreescribiendo Métodos
 class Explorer{
   constructor(name, username, mission){
     this.name = name
     this.username = username
     this.mission = mission
   }
   getNameAndUsername(){
     return`Explorer ${this.name}, username: ${this.username}`
   }
 }
 class Viajero extends Explorer{
   constructor(name,username,mission,cycle){
     super(name,username,mission) //SUPER nos ayudará a llamar el constructor
     this.cycle = cycle //agregamos este atributo de la clase viajero, es exclusiva de esta clase y no de la clase padre
   }
   getGeneralInfo(){
     let nameAndUsername = this.getNameAndUsername() //llamamos el método de la clase padre
     //nameAndUsername es una variable de esta función, no necesitas usar this para referenciarla
     return `${nameAndUsername}, Ciclo ${this.cycle}`
   }
 }
 const viajero1 = new Viajero("Ricardo","LaunchX", "Node JS", "Abril 2022")
 console.log("Ejemplo 10: Overriding methods")
 console.log(viajero1)
 console.log(viajero1.getNameAndUsername()) //Método de la clase padre
 console.log(viajero1.getGeneralInfo()) //Método de la clase hija.
