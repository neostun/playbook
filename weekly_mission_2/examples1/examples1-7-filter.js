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
