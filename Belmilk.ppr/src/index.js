import Vue from 'vue'
import { EventBus } from './EventBus.js'
import TableEqpmVueCmp from './components/TableEqpm-VueCmp.vue'
import DivInfoEqpmVueCmp from './components/DivInfoEqpm-VueCmp.vue'
import SearchInputVueCmp from './components/SearchInput-VueCmp.vue'
import FirebaseBelmilk from './firebase_belmilk.js'

Vue = new Vue({
    el: '#app',
    components: {
        TableEqpmVueCmp,
        DivInfoEqpmVueCmp,
        SearchInputVueCmp
    },
    data: {
        f: {},
        list_eqpm: [],
        search_string: '',
        eqpm_info_visible: false,
        mes: 'message',
        secondMes: 'second message'
    },
    created: function () {
        this.f = new FirebaseBelmilk();
        this.f.init();
        this.f.equipments().then((res) => {
            this.list_eqpm = res;
        });

        EventBus.$on('event_click_info-eqpm', id => {
            if (id !== undefined) {
                this.eqpm_info_visible = true;
            }
        });

        EventBus.$on('event_search_eqpm', (s) => {
            console.log(s.startdate);
        });
    },
    methods: {
        event_keyup_serch() {
            console.log(this.list_eqpm);
        }
    }
})