<template>
    <div style="display:flex; flex-direction:row; justify-content:center; margin-bottom:15px; font-size:12px;">
        <div style="display: flex; flex-direction: column; justify-content:flex-start; width:50%; margin-left:15px; margin-right:15px;" v-for="(ppr, index) in eqpm.ppr">
            <div style="display:flex; flex-direction:row; justify-content:flex-start;">
                <div style="width:35%;">Тип ППР:</div>
                <div style="width:65%;"><strong>{{ppr.worktype}}</strong></div>
            </div>
            <div style="display:flex; flex-direction:row; justify-content:flex-start;">
                <div style="width:35%;">Дата последней ППР:</div>
                <div style="width:65%;"><strong>{{ppr.lastdate}}</strong></div>
            </div>
            <div style="display:flex; flex-direction:row; justify-content:flex-start;">
                <div style="width:35%;">Период:</div>
                <div style="width:65%;"><strong>{{ppr.period}}</strong></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../EventBus';
    import CoreBelmilk from '../Core';
    import { eqpmBelmilk } from '../equipmentObject_belmilk';

    export default {
        data: function () {
            return {
                core_: {},
                eqpm: {}
            };
        },
        created: function () {
            this.core_ = new CoreBelmilk();
            this.eqpm = new eqpmBelmilk();
            
            EventBus.$on('event_click_info_eqpm', id => {
                this.core_.equipment(id).then((res) => {
                    this.eqpm = res;
                });
            });
        }
    };
</script>