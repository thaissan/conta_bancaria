import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite: number;


	constructor(_numero: number, _agencia: number, _tipo: number, 
        _titular: string, _saldo: number, limite: number) {
        super(_numero, _agencia, _tipo, _titular, _saldo);
		this._limite = limite;
	}


    /**
     * Getter limite
     * @return {number}
     */
	public get limite(): number {
		return this._limite;
	}

    /**
     * Setter limite
     * @param {number} limite
     */
	public set limite(limite: number) {
		this._limite = limite;
	}

    public sacar(valor: number): boolean {

        if ((this.saldo + this._limite) < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Limite: " + this._limite.toFixed(2));
    }


}


