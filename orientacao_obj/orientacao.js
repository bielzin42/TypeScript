//início da definição de classe
var Cumprimento = /** @class */ (function () {
    //criando método construtor
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ""; }
        if (_idade === void 0) { _idade = 0; }
        this.nome = _nome;
        this.idade = _idade;
    }
    //construindo outro método
    Cumprimento.prototype.mostarNomeIdade = function (idade, nome) {
        return "Ol\u00E1 " + nome + ", voc\u00EA tem " + idade + " Anos";
    };
    return Cumprimento;
}());
//fim da  definição de classe
// invocando uma função e armazenando seu resultado em uma variável de memória(resposta)
var pessoa1 = new Cumprimento("");
//inicializamos com vazio
console.log(pessoa1.mostarNomeIdade(22, "Gabriel"));
//método do obj resposta
