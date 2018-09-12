<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Наименование</th>
                <th>Хар-ка</th>
                <th>Период</th>
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
                        stage: 'stage-1'
                    },
                    {
                        name: 'name-2',
                        spec: 'spec-2',
                        stage: 'stage-2'
                    }
                ]
            }
        }
    }
</script>