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