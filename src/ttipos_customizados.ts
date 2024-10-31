type aluno = {
    nome: string;
    //deixar opcional
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: 'Carlos',
        cursos: ['Front-End', 'Java'],
        idade: 27
    },
    {
        nome: 'Ana',
        cursos: ['Front-End', 'C#'],
        idade: 23
    }
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 20
});

const novoAluno: aluno = {nome: 'Lucas', idade: 32};

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}