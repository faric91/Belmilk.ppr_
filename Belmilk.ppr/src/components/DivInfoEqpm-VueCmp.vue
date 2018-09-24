<template>
    <div style="display:flex; flex-direction:column; justify-content:flex-start; width:100%;">
        <div style="display:flex; flex-direction:row; justify-content: flex-start;">
            <h4>Информация по оборудованию</h4>
        </div>

        <div-info-ppr-eqpm-vue-cmp>
        </div-info-ppr-eqpm-vue-cmp>

        <div class="belmilk-flex-row" style="justify-content:flex-start; margin-left:15px; margin-right: 15px;">
            <h6>Список элементов оборудования</h6>
        </div>

        <div class="belmilk-flex-row" style="justify-content: flex-end; margin-left:15px; margin-right:15px; margin-bottom:5px; padding:5px;">
            <button type="button" class="btn btn-outline-success btn-sm">Добавить элемент</button>
        </div>

        <div class="belmilk-flex-row" style="justify-content:flex-start; margin-left:15px; margin-right: 15px;">
            <table-cmp-eqpm-vue-cmp >
            </table-cmp-eqpm-vue-cmp>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../EventBus';
    import TableCmpEqpmVueCmp from './TableCmpeqpm-VueCmp.vue';
    import DivInfoPprEqpmVueCmp from './DivInfoPprEqpm-VueCmp.vue';

    export default {
        components: {
            TableCmpEqpmVueCmp,
            DivInfoPprEqpmVueCmp
        },
        props: {
            eqpm: Object
        },
        data: function () {
            return {
                id: 0
            };
        },
        created: function () {
            EventBus.$on('event_click_info_eqpm', id => {
                this.id = id;
            });
        }
    };
</script>