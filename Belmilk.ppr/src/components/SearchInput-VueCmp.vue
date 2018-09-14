<template>
    <div>
        <input type="text" class="form-control" v-on:keyup.enter="event_keyup_serch()" v-model="search_string">
    </div>
</template>

<script>
    import { EventBus } from '../EventBus.js'
    import SearchEqpmBelmilk from '../search_belmilk.js'

    export default {
        data: function () {
            return {
                s: {},
                search_string: ''
            }
        },
        created: function () {
            
        },
        methods: {
            event_keyup_serch() {
                this.parse_search_string();
                this.event_Event_bus();
            },
            parse_search_string() {
                this.s = new SearchEqpmBelmilk();
            },
            event_Event_bus(s) {
                EventBus.$emit('event_search_eqpm', this.s);
            }
        }
    }
</script>