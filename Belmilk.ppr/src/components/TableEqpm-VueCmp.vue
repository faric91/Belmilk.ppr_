<template>
    <div style="display:flex; flex-direction:column; justify-content:flex-start; width:100%;" >
        <div style="display: flex; flex-direction:row; justify-content: flex-start;">
        </div>
        <div style="display: flex; flex-direction:row; justify-content: flex-start; width:100%; margin-top:15px;">
            <table class="table table-hover table-bordered" id="table_eqpm">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Номер</th>
                        <th>Период</th>
                        <th>Дата последней поверки</th>
                        <th>Дата следующей поверки</th>
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
                        article: 'y-01',
                        stage: '12',
                        lastDate: '2018.09.10',
                        nextDate: '2018.10.10'
                    },
                    {
                        number: 2,
                        article: 'article-02',
                        stage: '12',
                        lastDate: '2018.09.11',
                        nextDate: '2018.10.11'
                    }
                ]
            }
        },
        created: function () {
            EventBus.$on('event_search_eqpm', (s) => {
                console.log(s.startdate);
            });
        },
        components: {
            'row-eqpm-vue-cmp': RowEqpmVueCmp
        },
    }
</script>