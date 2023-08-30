<template>
   Cart
   {{this.$store.state.teste }}

   <button @click="this.$store.dispatch('alterarNome', {nome: 'DevinHouse'} )">Cliquei</button>

</template>