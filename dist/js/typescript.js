let valor = 3000;
let nome = "";
let isPago = false;
//Arrays
const lista = []; //lista de qualquer tipo
const listaNumber = []; //lista number[]
const listaString = []; //lista string []
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novoTipo = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    valor: 150,
    data: new Date("15/05/2022")
};
console.log(novoTipo);
