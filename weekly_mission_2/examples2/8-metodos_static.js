 //Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar objeto
 class Toolbox{
   static getMostUsefulTools(){
     return["Command Line","Git","Text Editor"]
   }
 }
 console.log("Ejemplo 8: Métodos static")
 console.log(Toolbox.getMostUsefulTools())
 // Si intentamos instanciar un objeto, no podremos llamar este método static