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
    import RowCmpEqpmVueCmp from './RowCmpEqpm-VueCmp.vue';

    export default {
        components: {
            RowCmpEqpmVueCmp
        },
        data: function () {
            return {
            };
        }
    };
</script>