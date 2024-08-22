let valor:number = 3000;
let nome:string = "";
let isPago:boolean = false


//Arrays

const lista = [] //lista de qualquer tipo
const listaNumber: number[] = []; //lista number[]
const listaString: string[] = [];  //lista string []


//Tipos Personalizados (Type Alieas )
//Criamos um tipo para o nosso codigo entrar dentro dos padroes que definimos 

type testeTipo = {
    tipoTransacao: TipoTransacao,
    valor: number,
    data: Date
}

enum TipoTransacao{
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}
const novoTipo: testeTipo= {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    valor: 150,
    data: new Date("15/05/2022")
}
console.log(novoTipo)