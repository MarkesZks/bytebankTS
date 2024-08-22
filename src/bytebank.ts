
let saldo = 8000;
const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;

elementoSaldo.textContent = saldo.toString()


let transacaoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement
transacaoFormulario.addEventListener("submit",function(event){
    event.preventDefault();// Não ira recarregar a pagina 
    if (!transacaoFormulario.checkValidity()) {
        alert('Por favor preencha todos os campos da transação')
        return;
    }

    const inputTipoTransacao = document.querySelector('#tipoTransacao') as HTMLSelectElement
    const inputValor = document.querySelector('#valor') as HTMLInputElement
    const inputData = document.querySelector('#data') as HTMLInputElement

    let tipoTransacao: string = inputTipoTransacao.value
    let valor: number = inputValor.valueAsNumber
    let data: Date = new Date(inputData.value)


    if(tipoTransacao == 'Depósito'){
        saldo +=valor;

    }else if(tipoTransacao == 'Transferência'|| tipoTransacao == 'Pagamento de Boleto'){
        saldo-=valor;

    }else{
        alert('Tipo de Transação invalida')
        return;
    }
    elementoSaldo.textContent = saldo.toString();
  
    type transacao = {
        tipoTransacao: string,
        valor: number,
        data: Date
    }
    const novaTransacao: transacao= {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }
    console.log(novaTransacao);
    transacaoFormulario.reset();

})