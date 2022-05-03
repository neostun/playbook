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