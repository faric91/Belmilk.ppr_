<template>
    <table class="table table-hover" id="table_eqpm">
        <thead>
            <tr>
                <th>№</th>
                <th>Номер</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr is="row-eqpm-vue-cmp" v-for="eqpm in eqpms" v-bind:eqpm="eqpm"></tr>
        </tbody>
    </table>
</template>

<style>
    .table_eqpm {
        border-top:none;
    }
</style>

<script>
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
                        number: 1,
                        article: 'y-02'
                    }
                ]
            }
        },
        components: {
            'row-eqpm-vue-cmp': RowEqpmVueCmp
        },
    }
</script>