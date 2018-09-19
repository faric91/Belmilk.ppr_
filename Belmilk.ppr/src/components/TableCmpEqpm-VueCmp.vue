<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Номер</th>
                <th>Хар-ка</th>
                <th>Период</th>
                <th>Дата последней поверки</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr is="row-cmp-eqpm-vue-cmp" v-for="(cmpeqpm, index) in cmps_eqpm" v-bind:cmp_eqpm="cmpeqpm" v-bind:index="index"></tr>
        </tbody>
    </table>
</template>

<script>
    import { EventBus } from '../EventBus';
    import CoreBelmilk from '../Core';
    import RowCmpEqpmVueCmp from './RowCmpEqpm-VueCmp.vue';

    export default {
        components: {
            RowCmpEqpmVueCmp
        },
        data: function () {
            return {
                core_: {},
                cmps_eqpm: []
            };
        },
        created: function () {
            this.core_ = new CoreBelmilk();

            EventBus.$on('event_click_info_eqpm', (index) => {
                this.core_.equipment(index).then((res) => {
                    this.cmps_eqpm = res.components;
                    console.log(this.cmps_eqpm);
                });
            });
        }
    };
</script>