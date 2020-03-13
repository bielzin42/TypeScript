//marca vel max e vel atua
var Carro = /** @class */ (function () {
    function Carro(_marca, _velMax, _velAtual) {
        this.marca = "";
        this.velMax = 0;
        this.velAtual = 0;
        this.marca = _marca;
        this.velAtual = _velAtual;
        this.velMax = _velMax;
    }
    Carro.prototype.acelerar = function (marca, velAtual, velMax) {
        for (velAtual = 0; velAtual <= velMax; velAtual++) {
            console.log(velAtual);
        }
        return "O carro de marca " + marca + ", acelerou de velocidade 0 para " + velMax;
    };
    Carro.prototype.desacelerar = function (marca, velAtual, velMax) {
        if (velAtual > 0) {
            for (velAtual = velMax; velAtual >= 0; velAtual--) {
                console.log(velAtual);
            }
            return "O carro de marca " + marca + ", desacelerou de velocidade " + velMax + " para 0";
        }
        else {
            return "O carro est\u00E1 parado.";
        }
    };
    return Carro;
}());
var carro1 = new Carro("gol", 0, 10);
console.log(carro1.acelerar("gol", 0, 10));
console.log(carro1.desacelerar("gol", 0, 10));
