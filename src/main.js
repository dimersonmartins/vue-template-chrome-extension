import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/pt-br';
import Main from './components/Main.vue';
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(ElementUI, { locale })

const store = new Vuex.Store({
    state: {
        loading: false,
        aplicationName: 'MyTasks',

    },
    mutations: {
        setLoading: (state, payload) => {
            state.loading = payload;
        },

    },
    getters: {
    },
    actions: {
    },
    modules: {
    }
});


const main = new Vue({
    el: '#main',
    store,
    render: createElement => createElement(Main)
});