alert("queres saber cuantos snacks vas a comer en tu vida?");
let edad = prompt("que edad tenes?")
let edadMaxima = prompt("hasta que edad te gustaria vivir?")
let snackFavorito = prompt("cual es tu snack favorito?") ;
let snackDiarios = prompt("cuantos de estos snacks comes por dia?")
let snackVitalicio = (edadMaxima - edad)*365*snackDiarios
alert("necesitaras " + snackVitalicio + " " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.")
let snackPrecio = prompt("Cuanto sale cada " + snackFavorito + "?")
alert("el total de los " + snackVitalicio + " te costara unos " + (snackPrecio*snackVitalicio) + " pesos")