export class Armazenador{

    private constructor(){} //  impede que você crie um objeto Armazenador diretamente.

    static salvar(chave:string,valor:any):void{
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave,valorComoString);// Salvar no local storage 
        }
        //Função reviver() é um parametro opcional
    static obter<T>(chave:string,reviver?: (this: any, key: string,value: any)=>any): T | null{
        const valor = localStorage.getItem(chave);

        if(valor=== null){
            return null
        }
        if(reviver){
            return JSON.parse(valor,reviver) as T
        }
             return JSON.parse(valor) as T
    
}}

