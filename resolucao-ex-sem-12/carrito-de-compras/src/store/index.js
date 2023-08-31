import {createStore} from "vuex"

const store = createStore({ 
    state() { 
        return { 
            teste: "Hola",
            produtosCarrinho: []
            }
    },
    mutations: {
        alterarTeste(state, value){
            state.teste = value
        },
        adicionarProdutoAoCarrinho(state,value){
            state.produtosCarrinho = [...state.produtosCarrinho, value ]
        }
    },

    actions:{ 
        alterarNome(context, value){ 
            console.log(value.nome)
            console.log("entrei no alterar nome")
            context.commit("alterarTeste", value.nome)
            
            },
            adicionarProduto(context, value) {
                console.log("entrei dentro do adicionar produto")
                console.log(value.product)
                context.commit("adicionarProdutoAoCarrinho", value.product)
        }
    }
})

export default store