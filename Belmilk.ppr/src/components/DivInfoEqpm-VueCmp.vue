<template>
    <div style="display:flex; flex-direction:column; justify-content:flex-start; width:100%;">
        <div style="display:flex; flex-direction:row; justify-content: flex-start;">
            <h4>Информация по оборудованию</h4>
        </div>

        <div class="belmilk-flex-row" style="justify-content:flex-start;">
            <h6>Список элементов оборудования</h6>
        </div>

        <div class="belmilk-flex-row" style="justify-content:flex-start;">
            <table-cmp-eqpm-vue-cmp >
            </table-cmp-eqpm-vue-cmp>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../EventBus.js'
    import TableCmpEqpmVueCmp from './TableCmpeqpm-VueCmp.vue'

    export default {
        components: {
            TableCmpEqpmVueCmp
        },
        props: {
            eqpm: Object
        },
        data: function () {
            return {
                id: 0
            }
        },
        created: function () {
            EventBus.$on('event_click_info-eqpm', id => {
                this.id = id;
            });
        }
    }
</script>