<template>
    <div style="display:flex; flex-direction:column; justify-content:flex-start; width:100%;" >
        <div style="display: flex; flex-direction:row; justify-content: flex-start;">
        </div>
        <div style="display: flex; flex-direction:row; justify-content: flex-start; width:100%; margin-top:15px;">
            <table class="table table-hover" id="table_eqpm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Номер</th>
                        <th>Хар-ка</th>
                        <th>Место расположения</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr is="row-eqpm-vue-cmp" v-for="(eqpm, index) in eqpms" v-bind:eqpm="eqpm" v-bind:index="index"></tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<style>
    .table_eqpm {
        border-top:none;
    }
</style>

<script>
    import { EventBus } from '../EventBus';
    import CoreBelmilk from '../Core';
    import RowEqpmVueCmp from './RowEqpm-VueCmp.vue';


    export default {
        data: function () {
            return {
                eqpms: [],
                core_: {}
            };
        },
        created: function () {
            this.core_ = new CoreBelmilk();

            EventBus.$on('event_search_eqpm', (s) => {
                this.core_.equipmentsFilter(s).then((res) => {
                    this.eqpms = res;
                });
            });
        },
        components: {
            'row-eqpm-vue-cmp': RowEqpmVueCmp
        }
    };
</script>