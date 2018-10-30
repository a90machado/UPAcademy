/**
 * Class Factura
 * @param {String} nomeRequerente
 * @param {Class} artigo
 */
class Factura{
    constructor(nomeRequerente,artigo){
        this.id = new Date().getTime();
        this.nomeRequerente = nomeRequerente;
        this.artigos = [artigo];
    }

    addArtigo(artigo){
        this.artigos.push(artigo);
    }

}

/**
 * Class Artigo
 * @param {String} nome
 * @param {String} extra
 */
class Artigo{
    constructor(nome, extra){
        this.nome = nome;
        this.extra = extra;
    }
}

//var fact1 = new Factura("Andre",new Artigo("Lentilhas","Natura"));

//fact1.addArtigo(new Artigo("Bla Bla","Wiskas Saquetas"));

//var x = showFacturaByID(2);

//removeFacturaByID(2);

//console.log(data);
//console.log(x);


