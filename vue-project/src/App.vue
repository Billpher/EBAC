<script setup>
import { reactive } from 'vue';

  const nome = 'Lucas Rodrigues'
  const obj = {
    nome: 'Lucas',
    filme: 'Dinastia'
  }

  function dizOla(nome) {
    return `${nome} diz oi`
  }

  const gostaDeBatman = true;

  //let contador = 0
  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes: ['lucas', 'luis', 'pablo'],
    novoNome: '',
  });

  function mostraSaldoRestante() {
    const {saldo, transferindo} = estado
    return saldo - transferindo;
  }

  function validaValor() {
    const {saldo, transferindo} = estado
    return saldo >= transferindo;
  }

  function incrementar() {
    estado.contador++
  }

  function decrementar() {
    estado.contador--
  }

  function cadastraNome() {
    if (estado.novoNome.length >= 3) {
      estado.nomes.push(estado.novoNome)
    } else {
      alert('Digite mais de 3 caracteres')
    }
    
  }

</script>

<template>
  <h1>Ola {{obj.Lucas}} voce gosta do filme {{obj.filme}}</h1>

  <h1 v-if="gostaDeBatman">{{ dizOla('Luis') }}</h1>

  <br>
  <hr> </hr>

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr> </hr>

  {{ estado.email }}
  <input type="email" @keyup="evento => estado.email = evento.target.value">

  
  <br>
  <hr> </hr>

  saldo: {{ estado.saldo }} <br>
  transferindo: {{ estado.transferindo }} <br>
  saldo restante: {{ mostraSaldoRestante() }} <br>
  <input  :class="{ invalido: !validaValor() }" @keyup=" e => estado.transferindo = e.target.value" type="number" placeholder="quantida para transferir">
  <button v-if="validaValor()">Transferir</button>
  <span v-else>Valor maior que Saldo</span>

  <br>
  <hr> </hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="e => estado.novoNome  = e.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome()" type="button">Cadastrar</button>

</template>

<style scoped>

  .invalido {
    outline-color: red;
    border-color: red;
  }

</style>
