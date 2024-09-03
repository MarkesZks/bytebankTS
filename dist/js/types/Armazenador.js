export class Armazenador {
    constructor() { } //  impede que você crie um objeto Armazenador diretamente.
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString); // Salvar no local storage 
    }
    //Função reviver() é um parametro opcional
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
