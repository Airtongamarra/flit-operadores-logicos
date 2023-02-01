var caminhada = prompt(" Caminhou quantos km? ")

var corrida = prompt("Correu quantos km")

var acordar = prompt("Que horas acordou?")

var trabalho = prompt("Terminou o trabalho?")

var compromisso = prompt("Tem compromisso?")

if (caminhada <= "5" && corrida <= "2") {
    console.log("Passo o dia bem!!")
} else {
    console.log("Passa o dia cansado")
}
if (acordar == "Cedo" || acordar <= 8) {
    console.log("Pode sair tranquilo")
} else {
    console.log("Vai ter que sair correndo")
}
if (!(trabalho == "sim") && !(compromisso == "sim")) {
    console.log("vai sair mais tarde")
} else {
    console.log("Pode ir embora")
}