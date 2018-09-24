<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal-belmilk">
                <header class="modal-header">
                    <div style="display:flex; flex-direction:row; justify-content: flex-start;">
                        <div style="width:90%">This is the default tile!</div>
                        <!--<div style="width:10%">
                            <button type="button"
                                    class="btn-close"
                                    @click="close">
                                x
                            </button>
                        </div>-->
                    </div>
                </header>
                <section class="modal-body">
                    <div style="display:flex; flex-direction:column; justify-content:flex-start;">
                        <div style="display:flex; flex-direction:row; justify-content: flex-start;">
                            <div style="width:20%; display:flex; flex-direction:row; justify-content:flex-end;">
                                <p>Номер :</p>
                            </div>
                            <div style="width:80%; margin-left:10px;">
                                <input v-model="newItem.number" class="form-control" />
                            </div>
                        </div>

                        <div style="display:flex; flex-direction:row; justify-content: flex-start; margin-top:5px;">
                            <div style="width:20%; display:flex; flex-direction:row; justify-content:flex-end;">
                                <p>Описание :</p>
                            </div>
                            <div style="width:80%; margin-left:10px;">
                                <input v-model="newItem.descr" class="form-control" />
                            </div>
                        </div>

                        <div style="display:flex; flex-direction:row; justify-content: flex-start; margin-top:5px;">
                            <div style="width:20%; display:flex; flex-direction:row; justify-content:flex-end;">
                                <p>Период :</p>
                            </div>
                            <div style="width:80%; margin-left:10px;">
                                <input v-model="newItem.period" class="form-control" />
                            </div>
                        </div>

                        <div style="display:flex; flex-direction:row; justify-content: flex-start; margin-top:5px;">
                            <div style="width:20%; display:flex; flex-direction:row; justify-content:flex-end;">
                                <p>Дата последнего ремонта :</p>
                            </div>
                            <div style="width:80%; margin-left:10px;">
                                <input v-model="newItem.prevdate" class="form-control" type="date" />
                            </div>
                        </div>

                        <div style="display:flex; flex-direction:row; justify-content: flex-start; margin-top:5px; margin-left:15px;">
                            <div style="width:20%; display:flex; flex-direction:row; justify-content:flex-end;">
                                <p>Площадка :</p>
                            </div>
                            <div style="width:80%; margin-left:10px;">
                                <input v-model="newItem.where.platform" class="form-control" type="number" max="2" min="0"/>
                            </div>
                        </div>

                        <div style="display:flex; flex-direction:row; justify-content: flex-start; margin-top:5px; margin-left:15px;">
                            <div style="width:20%; display:flex; flex-direction:row; justify-content:flex-end;">
                                <p>Цех :</p>
                            </div>
                            <div style="width:80%; margin-left:10px;">
                                <input v-model="newItem.where.manufacture" class="form-control" />
                            </div>
                        </div>

                        <div style="display:flex; flex-direction:row; justify-content: flex-start; margin-top:5px; margin-left:15px;">
                            <div style="width:20%; display:flex; flex-direction:row; justify-content:flex-end;">
                                <p>Место :</p>
                            </div>
                            <div style="width:80%; margin-left:10px;">
                                <input v-model="newItem.where.place" class="form-control" />
                            </div>
                        </div>

                        <div style="display:flex; flex-direction:column; justify-content:flex-start;">
                            <div style="display:flex; flex-direction:row; justify-content:flex-start;">
                                <p>Детали:</p>
                            </div>
                            <div style="display:flex; flex-direction:row; justify-content:flex-start;">

                            </div>
                        </div>


                    </div>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button type="button"
                                class="btn-green"
                                @click="close">
                            Close me!
                        </button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<style>
    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
    }

    .modal-belmilk {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        /*height:30%;*/
        width:30%;
    }

    .modal-header,
    .modal-footer {
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        border: none;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }

    .input-belmilk {
        font-size: 12px!important;
        padding:2px 3px 2px 3px!important;
        height:20px!important;
    }

    .p-belmilk {
        margin-bottom:5px!important;
    }
</style>


<script>
    import { eqpmBelmilk } from '../EquipmentObject_belmilk';

    export default {
        data: function () {
            return {
                newItem: {}
            };
        },
        created: function () {
            this.newItem = new eqpmBelmilk();
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    };
</script>