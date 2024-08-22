let saldo = 8000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo.toString();
let transacaoFormulario = document.querySelector('.block-nova-transacao form');
transacaoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Não ira recarregar a pagina 
    if (!transacaoFormulario.checkValidity()) {
        alert('Por favor preencha todos os campos da transação');
        return;
    }
    const inputTipoTransacao = document.querySelector('#tipoTransacao');
    const inputValor = document.querySelector('#valor');
    const inputData = document.querySelector('#data');
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('Tipo de Transação invalida');
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    transacaoFormulario.reset();
});
