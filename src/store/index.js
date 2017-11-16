import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: sessionStorage.getItem('token') || '',
        // username:'',
    },
    actions: {
    },
    mutations: {
        increment() {
        },
        unIncrement() {
        },
    },
    getters: {
    },
    modules: {

    }
})
export default store