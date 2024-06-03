console.log("Hola Mundo")
    console.log("Mensaje adicional")

    var parrafo = document.getElementById("pParrafo")
    console.log(parrafo.textContent)

    parrafo.textContent = "Otro texto muy diferente"
    console.log(parrafo.textContent)

    var textoPrueba = "" //Declaramos una variable con nombre textoPrueba
    
    textoPrueba = prompt("Escribe hola") //prompt devuelve un String, así que lo que hacemos es 
    // almacenar ese String en la variable textoPrueba

    console.log(textoPrueba)