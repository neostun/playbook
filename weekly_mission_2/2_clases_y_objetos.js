/*
Ejemplos a desarrollar:
Crear clase vacía
Instanciar objetos de una clase
Instanciar Objeto con atributos
Métodos en los objetos
Atributos con valores por default
Getters
Setters
Métodos static
Herencia
Overriding methods
*/
class Person {
  
}
console.log("Ejemplo 1: Crear clase vacía")
console.log(Person) // [class Person]

// Ejemplo 2: Crear un objeto a partir de una clase
class Pet {
}
 const myPet1 = new Pet() // Puedo crear muchos objetos de la clase Pet
 console.log(myPet1) // un objeto de la clase Pet
 //Ejemplo 3: Instanciar objetos con Atributos
 class Student {
   //El constructor nos permite instanciar un objeto y asignarle atributos, this. nos ayuda a realizar esto:
   constructor(name,age,subjects){
     this.name = name
     this.age = age
     this.subjects = subjects
   }
 }
 //Crear un objeto de la clase Student(esto se le llama instanciación)
 const ricardoStudent = new Student("Ricardo", 30,["NodeJS", "Javascript", "Python"])
 console.log("Ejemplo 3: Instanciar un objeto con atributos")
 console.log(ricardoStudent)
 
 //Ejemplo 4: Métodos en los objetos
 class Repository{
   constructor(name,author,language,stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
   }
   getinfo(){// es una función que ejecutará cualquier objeto instanciado de esta clase
   return `Repository ${this.name} has ${this.stars} stars`
    }
 }
 console.log("Ejemplo 4: Métodos en los objetos")
 const myRepo = new Repository("LaunchX", "neostun","js",100)
 console.log(myRepo.getinfo())
 
 //Ejemplo 5: Atributos con valores por default
 class PullRequest {
   constructor(repo,title,lines_changed){
     this.repo = repo
     this.title = title
     this.lines_changed = lines_changed
     this.status = "OPEN"
     this.dateCreated = new Date() //esto guardará la fecha acual en que se instancia el objeto
   }
   getinfo(){
     return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}` 
   }
 }
 console.log("Ejemplo 5: Atributos con valores por default")
 const myPR1 = new PullRequest("LaunchX", "Mi primer PR", 100)
 console.log(myPR1.getinfo())
 const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
 console.log(myPR2.getinfo())
 
 //Ejemplo 6: Getters para acceder a los atributos del objeto
 class Ajolonauta {
   constructor(name,age,stack){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = 0
     this.exercises_todo = 99
   }
   get getExercises_Completed(){
     return this.exercises_completed
   }
 }
 console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
 const woopa = new Ajolonauta("Woopa",1,[])
 console.log(woopa.getExercises_Completed)
 
 //Ejemplo 7: Setters para modificar los atributos del objeto
 class MissionCommander{
   constructor(name,mission){
     this.name = name
     this.mission = mission
     this.students = 0
     this.lives = 0
   }
   get getStudents(){
     return this.students
   }
   get getLives(){
     return this.lives
   }
   set setStudents(students){
     this.students = students
   }
   set setLives(lives){
     this.lives = lives
   }
 }
 console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
 const MissionCommanderNode = new MissionCommander("Ricardo", "NodeJS")
 console.log(MissionCommanderNode.getStudents) // 0 por default
 console.log(MissionCommanderNode.getLives) // 0 por default
 //actualizaremos los atributos por medio de los Setters
 MissionCommanderNode.setStudents = 100
 MissionCommanderNode.setLives = 30
 console.log(MissionCommanderNode.getStudents)//cambia a 100
 console.log(MissionCommanderNode.getLives)//cambia a 30
 
 //Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar objeto
 class Toolbox{
   static getMostUsefulTools(){
     return["Command Line","Git","Text Editor"]
   }
 }
 console.log("Ejemplo 8: Métodos static")
 console.log(Toolbox.getMostUsefulTools())
 // Si intentamos instanciar un objeto, no podremos llamar este método static
 
 //Ejemplo 9: Herencia entre dos clases
 class Developer{
   constructor(name,mainLang,stack){
     this.name = name
     this.mainLang = mainLang
     this.stack = stack
   }
   get getname(){
     return this.name
   }
 }
 console.log("Ejemplo 9: Herencia entre dos clases")
 const ricardoDev = new Developer("Ricardo","js",["html5","css","js"])
 console.log(ricardoDev)
 
 //se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase vacía y reusar todos los componentes de la clase padre
 class LaunchXStudent extends Developer{
 }
 const ricardoLaunchXDev = new LaunchXStudent("Ricardo","js",["html5","css","js"])
 console.log(ricardoLaunchXDev)
 console.log(ricardoLaunchXDev.getname) //getter de la clase padre reusada en la clase hija
 
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
 console.log(viajero1.getGeneralInfo())//Método de la clase hija