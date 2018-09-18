﻿import Vue from 'vue';
import { EventBus } from './EventBus';
import TableEqpmVueCmp from './components/TableEqpm-VueCmp.vue';
import DivInfoEqpmVueCmp from './components/DivInfoEqpm-VueCmp.vue';
import SearchInputVueCmp from './components/SearchInput-VueCmp.vue';
import FirebaseBelmilk from './firebase_belmilk';
import CoreBelmilk from './Core';

Vue = new Vue({
    el: '#app',
    components: {
        TableEqpmVueCmp,
        DivInfoEqpmVueCmp,
        SearchInputVueCmp
    },
    data: {
        core_: {},
        f: {},
        list_eqpm: [],
        search_string: '',
        eqpm_info_visible: false,
        mes: 'message',
        secondMes: 'second message'
    },
    created: function () {
        this.core_ = new CoreBelmilk();

        EventBus.$on('event_click_info_eqpm', (index) => {
            this.core_.equipment(index).then((res) => {
                console.log(res);
            });
        });
    },
    methods: {
        event_click_add_new_eqpm() {

        }
    }
})