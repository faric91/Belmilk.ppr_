<template>
    <tr>
        <td>{{index}}</td>
        <td>{{eqpm.number}}</td>
        <td>{{eqpm.descr}}</td>
        <td>{{eqpm.period}}</td>
        <td>{{eqpm.prevdate}}</td>
        <td>{{eqpm.where.manufacture}} (Площадка №{{eqpm.where.platform}})</td>
        <td>
            <a href="#" style="margin-left:10px;" v-on:click="event_click_eqpm_info()"><i class="fas fa-align-justify"></i></a>
            <a href="#" style="margin-left:10px; color:green;"><i class="fas fa-check"></i></a>
            <a href="#" style="margin-left:10px; color:gray;"><i class="fas fa-edit"></i></a>
        </td>
    </tr>
</template>

<script>
    import { EventBus } from '../EventBus';

    export default {
        props: {
            eqpm: Object,
            index: Number
        },
        data: function () {
            return {

            };
        },
        methods: {
            event_click_eqpm_info() {
                EventBus.$emit('event_click_info_eqpm', this.index);
            }
        }
    };
</script>