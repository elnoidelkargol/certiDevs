class CuentaBancaria{
    private _saldo: number = 0;
    private _titular: string;
    private _numeroCuenta: string;

    constructor(titular: string, numeroCuenta: string, saldoInicial ?: number){
        this._titular = titular;
        this._numeroCuenta = numeroCuenta;
        if(saldoInicial && saldoInicial >= 0){
            this._saldo = saldoInicial;
        }
    }   

    public depositar(cantidad: number): boolean{
        if (cantidad > 0){
            this._saldo += cantidad;
            return true;
        }else{
            return false;
        }
    }

    public retirar(cantidad: number): boolean{
        if(cantidad <= this._saldo && cantidad > 0){
            this._saldo -= cantidad;
            return true;
        }else{
            return false;
        }
    }

    public consultarSaldo(): number{
        return this._saldo;
    }
}

class CuentaAhorro extends CuentaBancaria {
    protected _tasaInteres: number = 1;

    constructor (titular:string, numeroCuenta: string, tasaInteres: number, saldoInicial ?: number)
    {
        super(titular,numeroCuenta,saldoInicial);
        this._tasaInteres = tasaInteres;
    }
    aplicarInteres(){
        const saldo = super.consultarSaldo();
        super.depositar(saldo*this._tasaInteres);
    }
}