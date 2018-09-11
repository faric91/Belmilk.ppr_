<template>
    <div style="display:flex; flex-direction:column; justify-content:flex-start; width:100%;" >
        <div style="display: flex; flex-direction:row; justify-content: flex-start;">
        </div>
        <div style="display: flex; flex-direction:row; justify-content: flex-start; width:100%; margin-top:15px;">
            <table class="table table-hover" id="table_eqpm">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Номер</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr is="row-eqpm-vue-cmp" v-for="(eqpm, index) in eqpms" v-bind:eqpm="eqpm" v-bind:id="index"></tr>
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
    import { EventBus } from '../EventBus.js'
    import RowEqpmVueCmp from './RowEqpm-VueCmp.vue'

    export default {
        data: function () {
            return {
                eqpms: [
                    {
                        number: 1,
                        article: 'y-01'
                    },
                    {
                        number: 2,
                        article: 'y-02'
                    }
                ]
            }
        },
        created: function() {
            EventBus.$on('info-click', id => {
                console.log('click - ' + id);
            });
        },
        components: {
            'row-eqpm-vue-cmp': RowEqpmVueCmp
        },
    }
</script>