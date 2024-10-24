let alunos = [
    { nome: "Ana", nota: 10 },
    { nome: "Bruno", nota: 2 },
    { nome: "Carla", nota: 8 },
    { nome: "Daniel", nota: 7 },
    { nome: "Eduardo", nota: 3 },
    { nome: "Fernanda", nota: 9 },
    { nome: "Gabriel", nota: 5 },
    { nome: "Helena", nota: 1 },
    { nome: "Igor", nota: 7 },
    { nome: "Juliana", nota: 6 },
    { nome: "Lucas", nota: 5 },
    { nome: "Mariana", nota: 9 },
    { nome: "Nathalia", nota: 8 },
    { nome: "Otávio", nota: 4 },
    { nome: "Patrícia", nota: 6 }
];

const retornaNota = (lista) => {
    lista.filter(aluno => aluno.nota >= 6).forEach(aluno => console.log(aluno));
}

retornaNota(alunos);
