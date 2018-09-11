import Vue from 'vue'
import TableEqpmVueCmp from './components/TableEqpm-VueCmp.vue'

Vue = new Vue({
    el: '#app',
    components: {
        TableEqpmVueCmp
    },
    data: {
        mes: 'message',
        secondMes: 'second message'
    }
})