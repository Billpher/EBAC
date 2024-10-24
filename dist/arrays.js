"use strict";

var redesSociais = ['facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRede, indice) {
  console.log("#".concat(indice, ", Eu tenho ").concat(nomeDaRede));
});
var alunos = ['Gustavo', 'Julia', 'Paula'];
var alunos2 = alunos.map(function (nomeDosAlunos) {
  nomeDosAlunos = {
    nome: nomeDosAlunos,
    curso: 'Front-End'
  };
  return nomeDosAlunos;
});
var paula = alunos2.find(function (item) {
  return item.nome = 'Paula';
});
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome = 'Paula';
});
console.log(paula);
console.log(indiceDaPaula);
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroNumeros = numeros.map(function (numerosAtuais) {
  return numerosAtuais * 2;
});
console.log(dobroNumeros);