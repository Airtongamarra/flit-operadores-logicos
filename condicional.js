// 1.3
var num = 12
var contador = 0

for(var index = 0; index <= num; index++){
    switch (num % index) {
        case 0:
            contador++
            break;
        default:
            break;
    }
}

switch (contador) {
    case 2:
        console.log("Numero primo")
        break;
    default:
        console.log("Não número primo")
        break;
}

// 1.3.2:

var hora = 5;
var minutos = 0;

hora > 0 ? minutos = hora*60 : minutos = 60;
console.log(minutos)