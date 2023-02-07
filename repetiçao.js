// 1.4

var array = [12, 6, 9, 42, 11, 102, 44, 15]
var index = 0
var soma = 0

for (index; index < array.length; index++) {
    soma = soma + array[index]
}

console.log(soma)



// 1.4.1
var contador = 0
var primo = false
var num = 0

while (primo === false) {
    for (index = 0; index <= num; index++) {
        if (num % index === 0) {
            contador++
        }
    }
    if (contador === 2) {
        primo = true
    } else {
        contador = 0
        num++
    }
    console.log(num)
}


// 1.4.2:

for (index = 0; index < 100; index++) {
    while ((index < 40 || index > 50) && index < 100) {
        console.log(index)
        index++
    }
}