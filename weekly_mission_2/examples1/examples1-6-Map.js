// Ejemplo 6: Uso de map para convertir todos los nombres de una lista  a las 3 primeras letras en mayúsculas
const countries6 = ['Finland','Denmark','Sweden','Norway','Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
    country.toUpperCase().slice(0,3)  // el método slice obtiene solo la longitud marcada del string
    )
console.log(countriesFirstThreeLetters)