<template>
    <tr>
        <td>{{index}}</td>
        <td>{{cmp_eqpm.name}}</td>
        <td>{{cmp_eqpm.spec}}</td>
        <td>{{cmp_eqpm.stage}}</td>
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