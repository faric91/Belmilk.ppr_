import Vue from 'vue'
import { EventBus } from './EventBus.js'
import TableEqpmVueCmp from './components/TableEqpm-VueCmp.vue'
import DivInfoEqpmVueCmp from './components/DivInfoEqpm-VueCmp.vue'
import FirebaseBelmilk from './firebase_belmilk.js'

Vue = new Vue({
    el: '#app',
    components: {
        TableEqpmVueCmp,
        DivInfoEqpmVueCmp
    },
    data: {
        f: {},
        eqpm_info_visible: false,
        mes: 'message',
        secondMes: 'second message'
    },
    created: function () {
        this.f = new FirebaseBelmilk();
        this.f.init();
        this.f.equipments().then((res) => {
            console.log(res[0].begindate);
        });

        EventBus.$on('event_click_info-eqpm', id => {
            if (id !== undefined) {
                this.eqpm_info_visible = true;
                console.log(this.eqpm_info_visible);
            }
        });
    }
})