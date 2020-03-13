//marca vel max e vel atua

class Carro 
{
    marca:string = "";
    velMax:number = 0;
    velAtual:number = 0;


    constructor(_marca:string, _velMax:number, _velAtual:number)
    {
        this.marca = _marca;
        this.velAtual = _velAtual
        this.velMax = _velMax
    }

    acelerar(marca:string, velAtual:number, velMax:number)
    {
        for(velAtual = 0; velAtual <= velMax; velAtual++)
        {
            console.log(velAtual);            
        }
        return `O carro de marca ${marca}, acelerou de velocidade 0 para ${velMax}`;
    }    

    desacelerar(marca:string, velAtual:number, velMax:number)
    {     
        if(velAtual > 0 )
        {
            for(velAtual = velMax; velAtual >= 0; velAtual--)
            {
                console.log(velAtual);            
            }
            return `O carro de marca ${marca}, desacelerou de velocidade ${velMax} para 0`;
        }
        else
        {
            return `O carro está parado.`
        }
    }
}

let carro1 = new Carro("gol", 0, 10);
console.log(carro1.acelerar("gol", 0, 10))
console.log(carro1.desacelerar("gol", 0, 10))