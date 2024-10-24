"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return 'Ola';
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    Fabricante: 'Ford'
  };
};
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
console.log(minhaFuncao());