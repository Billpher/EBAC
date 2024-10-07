function Pessoa(nome) {
    this.nome = nome;
    this.dizoi = function() {
        console.log(this.nome + ' diz oi');
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    //this.salario = salario;
    let _salario = salario;
    this.getSalario = function() {
        return _salario;
    }
    this.setSalario = function(valor) {
        _salario = valor;
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    funcionario.call(this, nome, 'Estagiario', 2000)
    this.aumento = function() {
        const novoSalario = this.getSalario * 1.1;
        this.setSalario = novoSalario;
    }
}

const funcionario1 = new Funcionario('Maria', 'Dev', 4000);

funcionario1.aumento();
console.log(funcionario1.getSalario());