<template>
    <tr>
        <td>{{eqpm.number}}</td>
        <td>{{eqpm.article}}</td>
        <td>
            <button class="btn btn-outline-primary btn-sm" v-on:click="info()"><i class="fas fa-align-justify"></i></button>
        </td>
    </tr>
</template>

<script>
    import { EventBus } from '../EventBus.js'

    export default {
        props: {
            eqpm: Object,
            id: Number
        },
        data: function () {

        },
        methods: {
            info() {
                EventBus.$emit('event_click_info-eqpm', this.id);
            }
        }
    }
</script>