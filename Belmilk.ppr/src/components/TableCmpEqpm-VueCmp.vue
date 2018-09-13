<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Наименование</th>
                <th>Хар-ка</th>
                <th>Период</th>
                <th>Дата последней поверки</th>
                <th>Дата следующей поверки</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr is="row-cmp-eqpm-vue-cmp" v-for="(cmpeqpm, index) in cmps_eqpm" v-bind:cmp_eqpm="cmpeqpm" v-bind:index="index"></tr>
        </tbody>
    </table>
</template>

<script>
    import RowCmpEqpmVueCmp from './RowCmpEqpm-VueCmp.vue'

    export default {
        components: {
            RowCmpEqpmVueCmp
        },
        data: function () {
            return {
                cmps_eqpm: [
                    {
                        name: 'name-1',
                        spec: 'spec-1',
                        stage: 'stage-1',
                        lastDate: '2018.09.10',
                        nextDate: '2018.10.10'
                    },
                    {
                        name: 'name-2',
                        spec: 'spec-2',
                        stage: 'stage-2',
                        lastDate: '2018.09.11',
                        nextDate: '2018.10.11'
                    }
                ]
            }
        }
    }
</script>