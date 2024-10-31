class conta {
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroDaConta:number) {
        this.numeroConta = numeroDaConta;
    }
}

class contaSalario extends conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface Itranscional {
    transferir: (valor: number, destinatario: conta) => boolean;
    taxaTransferencia: number;
}

class contaCorrente extends conta implements Itranscional {
    transferir(valor: number, destinatario: conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;
}
