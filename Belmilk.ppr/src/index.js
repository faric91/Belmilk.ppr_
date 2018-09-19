import Vue from 'vue';
import { EventBus } from './EventBus';
import TableEqpmVueCmp from './components/TableEqpm-VueCmp.vue';
import DivInfoEqpmVueCmp from './components/DivInfoEqpm-VueCmp.vue';
import SearchInputVueCmp from './components/SearchInput-VueCmp.vue';
import ModalAddNewEqpmVueCmp from './components/ModalAddNewEqpm-VueCmp.vue';
import CoreBelmilk from './Core';
import eqpmBelmilk from './EquipmentObject_belmilk';

Vue = new Vue({
    el: '#app',
    components: {
        TableEqpmVueCmp,
        DivInfoEqpmVueCmp,
        SearchInputVueCmp,
        ModalAddNewEqpmVueCmp
    },
    data: {
        core_: {},
        f: {},
        list_eqpm: [],
        search_string: '',
        eqpm_info_visible: false,
        mes: 'message',
        secondMes: 'second message',

        isModalVisible: false
    },
    created: function () {
        this.core_ = new CoreBelmilk();

        var this_ = this;
        EventBus.$on('event_click_info_eqpm', (index) => {
            this.core_.equipment(index).then((res) => {
                this_.eqpm_info_visible = true;
            });
        });

    },
    methods: {
        event_click_add_new_eqpm() {
            EventBus.$emit('event_click_open_add_eqpm_modal');
            //var item = new eqpmBelmilk();
            //this.core_.addNewEquipment(item);
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
});