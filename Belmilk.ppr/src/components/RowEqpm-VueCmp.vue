<template>
    <tr>
        <td>{{eqpm.number}}</td>
        <td>{{eqpm.article}}</td>
        <td>{{eqpm.stage}}</td>
        <td>{{eqpm.lastDate}}</td>
        <td>{{eqpm.nextDate}}</td>
        <td>
            <a href="#" style="margin-left:10px;"><i class="fas fa-align-justify"></i></a>
            <a href="#" style="margin-left:10px; color:green;"><i class="fas fa-check"></i></a> 
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