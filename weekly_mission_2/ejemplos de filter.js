// Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => country.includes('land') //Filtra por coincidencia de land
)
console.log(" Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) =>
  country.endsWith('nd'))
console.log("Ejemplo 7: Paises que terminan en nd")
console.log(countriesEndsByia)




//Ejemplo 8
const scores = [{
  name: 'A',
  score: 95
},
  {
    name: 'L',
    score: 98
  },
  {
    name: 'M',
    score: 80
  },
  {
    name: 'E',
    score: 50
  },
  {
    name: 'M',
    score: 85
  },
  {
    name: 'J',
    score: 100
  },
]
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log("Ejemplo 8: Filtrado de elementos por score")
console.log(scoresGreaterEighty)
/*scoresGreaterEighty.sort((a,b) => {
    if (a.score < b.score) return -1
    if (a.score > b.score) return 1
    return 0
  })
  console.log("Ejemplo 8: Filtrado de elementos por score con sort")
  console.log(scoresGreaterEighty)*/

//Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

//Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer1', 'Explorer2', 'Explorer3', 'Explorer4']
const areAllStr = names10.every((name) => typeof name === 'string')
console.log("Ejemplo 10: Son todos los nombres string " + areAllStr)

//Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es "+ age)

//Ejemplo 11: Uso de find en una lista de objetos
const scores12 = [{
  name: 'A',
  score: 95
},
  {
    name: 'M',
    score: 80
  },
  {
    name: 'E',
    score: 50
  },
  {
    name: 'M',
    score: 85
  },
  {
    name: 'J',
    score: 100
  }]
const score_less_than_80 = scores12.find((user) => user.score < 80)
console.log("Ejemplo 12: Nombre de score con menos de 80: "+ score_less_than_80.name)
//Ejemplo 13: uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques
const names13 = ['Explr1','Explr2','Explorer3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)

//Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará TRUE, de lo contrario será false

//Lista de elementos
const bools = [ true,true,false,true]
//uso de Some para ver si al menos uno de los elementos es FALSE
const areSomeTrue = bools.some((b) => b === false)
console.log("Ejemplo 14: alguno de los elementos en el array es false: "+ areSomeTrue) //true
//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk','Coffe','Sugar','Honey','Apple','Carrot']
console.log("Ejemplo 15: Elementos ordenados usando SORT")
console.log(products.sort())
// Ejemplo 16: Ordenando una lista de objetos
const users = [
  {name:'A',age: 150},
  {name:'B',age: 50},
  {name:'C',age: 100},
  {name:'D',age: 22}
  ]
  users.sort((a,b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) //ordenados ascendente