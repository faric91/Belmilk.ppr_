<template>
    <tr>
        <td>{{index}}</td>
        <td>{{cmp_eqpm.name}}</td>
        <td>{{cmp_eqpm.spec}}</td>
        <td>{{cmp_eqpm.stage}}</td>
        <td>{{cmp_eqpm.lastDate}}</td>
        <td>{{cmp_eqpm.nextDate}}</td>
        <td>
            <a href="#" style="margin-left:10px; color:green;"><i class="fas fa-check"></i></a>
        </td>
    </tr>
</template>

<script>
    export default {
        props: {
            index: Number,
            cmp_eqpm: Object
        }
    }
</script>