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
 