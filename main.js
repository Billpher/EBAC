function Aluno(aluno, idade, ano) {
    this.aluno = aluno;
    this.idade = idade;
    this.ano = ano;
}

function Professora(professora, sala, aluno) {
    this.professora = professora;
    this.sala = sala;
    Aluno.call(this, aluno);
}

function Escola(escola, professora, sala, aluno, idade, ano) {
    this.escola = escola;
    Professora.call(this, professora, sala);
    Aluno.call(this, aluno, idade, ano)
}

const escola1 = new Escola('Unifev','maria',10,'Pedro',22,'5 ano');
const escola2 = new Escola('Etec','Antonio',3,'Clara',17,'3 colegial');
const escola3 = new Escola('Unifev','Carlos',11,'Diego',20,'2 ano');

console.log(escola1);
console.log(escola2);
console.log(escola3);