import {createStore} from "vuex"

const store = createStore({ 
    state() { 
        return { 
            teste: "Hola"
    
        }
    },
    mutations: {
        alterarTeste(state, value){
            state.teste = value

        }

    },

    actions:{ 
        alterarNome(context, value){ 
            console.log(value.nome)
            console.log("entrei no alterar nome")
            context.commit("alterarTeste", value.nome)
        }
    }
})

export default store