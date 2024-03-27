export class Conta{
    //Atributos do objeto da classe conta
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //Método construtor - Instanciar (criar) um novo objeto da classe conta
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero; //atributo da classe(this) (=)parametro
		this._agencia = agencia;
		this._tipo = tipo;
        this._titular = titular;
		this._saldo = saldo;
    }
    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} numero
     */
	public set numero(numero: number) {
		this._numero = numero;
	}

    /**
     * Setter agencia
     * @param {number} agencia
     */
	public set agencia(agencia: number) {
		this._agencia = agencia;
	}

    /**
     * Setter tipo
     * @param {number} tipo
     */
	public set tipo(tipo: number) {
		this._tipo = tipo;
	}

    /**
     * Setter titular
     * @param {string} titular
     */
	public set titular(titular: string) {
		this._titular = titular;
	}

    /**
     * Setter saldo
     * @param {number} saldo
     */
	public set saldo(saldo: number) {
		this._saldo = saldo;
	}

    public sacar(valor: number): boolean{
        if(this._saldo >= valor){
            this._saldo = this._saldo - valor;
            return true;
        }
        console.log("Saldo é insuficiente!");
        return false;

    }

    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
    }


    public visualizar(): void{

        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança"
                break;
        }



        console.log("\n\n***********************************************")
        console.log("Dados da conta")
        console.log("***********************************************")
        console.log(`Numero da conta: ${this._numero}`)
        console.log(`Numero da agencia: ${this._agencia}`)
        console.log(`Tipo da conta: ${tipo}`)
        console.log(`Titular da conta: ${this._titular}`)
        console.log(`Saldo da conta: ${this._saldo.toFixed(2)}`)
    }
		
}