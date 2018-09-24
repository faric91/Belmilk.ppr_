<template>
    <tr>
        <td>{{index}}</td>
        <td>{{cmp_eqpm.number}}</td>
        <td>{{cmp_eqpm.descr}}</td>
        <td>
             <div v-for="(ppr, index) in cmp_eqpm.ppr">
                 Тип: <strong>{{ppr.worktype}}</strong> | дата: <strong>{{ppr.lastdate}}</strong> |  период: <strong>{{ppr.period}}</strong><br>
             </div>
        </td>
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