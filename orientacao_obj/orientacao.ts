//início da definição de classe
class Cumprimento
{
    //definindo atributos / nome do atributo: tipo
    nome:string;
    idade:number;

    //criando método construtor

    constructor(_nome:string = "",_idade:number = 0)
    {
        this.nome = _nome;
        this.idade = _idade;
    }
    
    //construindo outro método
    mostarNomeIdade (idade:number, nome:string)
    {
        return `Olá ${nome}, você tem ${idade} Anos`
    }
}
//fim da  definição de classe

// invocando uma função e armazenando seu resultado em uma variável de memória(resposta)
let pessoa1 = new Cumprimento("", )
//inicializamos com vazio

console.log(pessoa1.mostarNomeIdade(22, "Gabriel"));
//método do obj resposta