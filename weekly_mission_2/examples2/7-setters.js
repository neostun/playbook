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
 