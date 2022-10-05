let viajeDuracion = prompt("cuantos dias vas a estar de viaje?")
let viajePresupuesto = prompt("cual es tu presupuesto total para el mismo?")
let comida = viajeDuracion*4
let comidaPresupuesto = viajePresupuesto/comida
alert("Podes gastar un total de " + comidaPresupuesto + " pesos en cada comida para que te alcance la plata durante los " + viajeDuracion + " dias de viaje.")