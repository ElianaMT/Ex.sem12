<template>
    <h1>Produtos {{ this.$store.state.produtosCarrinho.length }}</h1>

    <button @click="this.$store.dispatch('alterarNome', {nome: 'Ely'} )">Cliquei</button>

    <div class="list-products">

        <v-card width="300px" class="pa-2 mb-2" v-for="product in products" :key="product.id"> 
        <v-img 
            :src="product.imagem" 
            class="align-end" 
            width="300px" 
            hidden="200px"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                cover aspect-ratio="1">

                <v-card-title class="text-white">{{ product.nome }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
                10X de {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.parcela) }}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange" @click="() => this.$store.dispatch('adicionarProduto', {product})">Comprar</v-btn>
            </v-card-actions>
        </v-card>

      

    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            products: []
            
        }
      },

    mounted() {
        this.loadProducts()

    },
    methods: {
        loadProducts() {
            axios({
                url: " http://localhost:3000/produtos",
                method: "GET"
            })

                .then((response) => {
                    this.products = response.data

                })

                .catch(() => {
                    alert("Desculpe, nao foi possivel recuper os produtos")

                })

        },
        }
}
</script>

<style>
.list-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
</style>