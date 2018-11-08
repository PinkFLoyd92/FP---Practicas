let resultado = ""

function printList(stringVar, variable, indice)  {
    if(typeof variable === "string") {
        resultado+=(`${indice}.${variable}\n${stringVar}.`)
    } else {
        variable.forEach((elemento, indice2) => {
            resultado+=`${indice}.`
            printList(stringVar, elemento, indice2)
        })
    }
}

let palabraSeleccionada = "hola"
printList(palabraSeleccionada, ["h", [["a"], "2f"], "e", "c", "x", "d"], 0)
var indiceEnter = resultado.lastIndexOf("\n"); 

resultado = `${palabraSeleccionada}.${resultado}`

console.info(resultado)
