class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class contaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumero() {
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class contaBancariaPF extends contaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaPedro = new contaBancariaPF(123456);

contaBancaria.retornaNumero();