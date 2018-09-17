import Vue from 'vue'
import { EventBus } from './EventBus.js'
import TableEqpmVueCmp from './components/TableEqpm-VueCmp.vue'
import DivInfoEqpmVueCmp from './components/DivInfoEqpm-VueCmp.vue'
import SearchInputVueCmp from './components/SearchInput-VueCmp.vue'
import FirebaseBelmilk from './firebase_belmilk.js'
import CoreBelmilk from './Core.js'

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
        EventBus.$on('event_click_info-eqpm', id => {
            if (id !== undefined) {
                this.eqpm_info_visible = true;
            }
        });

        EventBus.$on('event_search_eqpm', (s) => {
            var _core = new CoreBelmilk();
            _core.equipmentsFilter(s).then((res) => {
                console.log(res);
            });
            
        });
    },
    methods: {
        event_keyup_serch() {
            console.log(this.list_eqpm);
        }
    }
})