<template>
    <tr>
        <td>{{index}}</td>
        <td>{{cmp_eqpm.number}}</td>
        <td>{{cmp_eqpm.descr}}</td>
        <td>{{cmp_eqpm.period}}</td>
        <td>{{cmp_eqpm.prevdate}}</td>
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
    };
</script>