/** 
 * Class Veiculo
 * @param {String} combustivel
 * @param {String} cor
 * @param {number} numeroRodas
*/

class Veiculo {
    constructor(combustivel,cor,numeroRodas=2){
        this.combustivel = combustivel;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.contaQuilometros = 0;
    }

    andar(distancia=1){
        this.contaQuilometros+=distancia;
    }
}

var v1 = new Veiculo("gasoleo","red",4);

v1.andar();

console.log(v1.contaQuilometros);
console.log(v1);

/** 
 * Class Automovel extends to Veiculo
 * @param {String} combustivel
 * @param {String} cor
 * @param {String} numeroAssentos
 * @param {String} numeroPortas
*/

class Automovel extends Veiculo{
    
    constructor(combustivel, cor, numeroAssentos, numeroPortas){
        super(combustivel, cor, 4); 
        this.numeroAssentos = numeroAssentos;
        this.numeroPortas = numeroPortas;
        this.numeroVolantes = 1;
        this.litrosDeposito = 50;
    }

    porCombustivel(litros){
        this.litrosDeposito+=litros;
    }

    tirarCombustivel(litros){
        this.litrosDeposito-=litros;
    }

    andar(distancia){
        super.andar(distancia);
        this.litrosDeposito-=distancia;
    }
}

var auto1 = new Automovel("Gasolina95","Preto",2,4);

