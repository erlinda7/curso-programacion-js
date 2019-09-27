var variosParametros = function (x, esContinente) {
    if (esContinente) {
        return 'si';
    }
    return x.toUpperCase();
};
console.log("" + variosParametros('Africa', true));
