function start9(n) {
    var res = parseInt(n / 10);
    while (res > 10) {
        res = parseInt(res / 10);
    }
    return res == 9;
}
function end9(n) {
    var modulo = n % 10;
    return modulo == 9;
}

function mensaje(numero) {
    if (start9(numero)) {
        if (end9(numero)) {
            var codigo = ["maria", "no", "esta", "feliz"];
            numero = parseInt(numero / 10);
            var cadena = "";
            while (numero > 10) {
                var modulo = numero % 10;
                if(modulo<=3){
                cadena = codigo[modulo] + " " + cadena;
                }
                numero = parseInt(numero / 10);
            }
            console.log(cadena);

        } else {
            console.log("no termina en 9");
        }
    }
    else {
        console.log("no empieza en 9");
    }
}

// start9(1231);
// var resultado = end9(12313139);
// console.log(resultado);
mensaje(90233393339);