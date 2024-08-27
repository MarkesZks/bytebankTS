import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes:Transacao[]= JSON.parse(localStorage.getItem("transacoes"), (key:string,value:string) =>{
    if (key === "data") {
        return new Date(value);
    }
    return value;
})|| []; // Se tiver dados da o parse em JSON e coloca na lista, se nao crie um array vazio


function debitar(valor:number): void{
    if (valor <= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString())
}
function depositar(valor:number): void{
    if (valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }
    saldo += valor;
    localStorage.setItem("saldo",saldo.toString())
}

const Conta={
    getSaldo(){
        return saldo;
    },
    getDataAcesso(){
        return new Date();
    },
    getGruposTransacoes(): GrupoTransacao[]{
        const gruposTransacoes: GrupoTransacao[] = []
        const listaTransacoes: Transacao[] = structuredClone(transacoes); // Faz uma copia profunda gerando uma nova referencia do objeto clonado
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1,t2)=> t2.data.getTime() - t1.data.getTime()) //essa linha ordena a lista de transações (listaTransacoes) em ordem decrescente de data, colocando as transações mais recentes no início da lista.
        let labelAtualGrupoTransacoes : string = ""

        for(let transacao of transacoesOrdenadas){
            let labelGrupoTransacoes: string = transacao.data.toLocaleDateString("pt-br",{month: "long",year: "numeric"});
            if(labelAtualGrupoTransacoes !== labelGrupoTransacoes){
                labelAtualGrupoTransacoes = labelAtualGrupoTransacoes;
                gruposTransacoes.push({
                    label:labelGrupoTransacoes,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao)
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao:Transacao): void{

        if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO){
            depositar(novaTransacao.valor)
    
        }else if(novaTransacao.tipoTransacao == TipoTransacao.TRANSFERECIA|| novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
            debitar(novaTransacao.valor)
    
    
        }else{
            throw new Error('Tipo de Transação invalida');
            //Lançando um erro
            
        }
        console.log(novaTransacao)
        console.log(this.getGruposTransacoes())
        localStorage.setItem("transacoes",JSON.stringify(transacoes))

    }
}
export default Conta;