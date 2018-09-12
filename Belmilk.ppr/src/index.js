import Vue from 'vue'
import { EventBus } from './EventBus.js'
import TableEqpmVueCmp from './components/TableEqpm-VueCmp.vue'
import DivInfoEqpmVueCmp from './components/DivInfoEqpm-VueCmp.vue'

Vue = new Vue({
    el: '#app',
    components: {
        TableEqpmVueCmp,
        DivInfoEqpmVueCmp
    },
    data: {
        mes: 'message',
        secondMes: 'second message'
    },
    created: function () {
        EventBus.$on('info-click', id => {
            console.log('click - ' + id);
        });
    }
})