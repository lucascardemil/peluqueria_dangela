<template>
    <div class="row col-12 pr-0">
        <div class="col-12">
            <h1 class="color-primary mb-5 mt-2">SELECCIONAR CLIENTE</h1>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12 mb-4">
            <v-select v-validate="'required|min:2'"
                        :class="{'input': true, 'is-invalid': errors.has('cliente') }"
                        name="cliente"
                        @input="setClient"
                        :options="clients"
                        :value="selectedClient"></v-select>
            <p v-show="errors.has('cliente')" class="text-danger">{{ errors.first('cliente') }}</p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
            <a href="#" class="btn btn-block btn-primary btn-lg boton-grande" @click="showTypeServicePanel">
                SELECCIONAR
            </a>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['clients', 'selectedClient']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['setClient', 'showTypeServicePanel'])
    },
    created(){
        this.$store.dispatch('allClients')
    }
}
</script>

<style>
    .v-select input[type=search]{
        height: 100px;
    }
    .v-select .selected-tag {
        height: 95px;
        line-height: 95px;
        font-size: 24px;
    }
    .boton-grande{
        height: 101px;
        padding-top: 22px;
        font-size: 24px;
    }
    .v-select .dropdown-toggle .clear{
        font-size: 50px;
    }
    .v-select .dropdown-toggle .clear{
        right: 75px;
    }
    .v-select .open-indicator, .v-select .open-indicator:before {
        width: 40px;
    }
    .v-select .open-indicator {
        bottom: 8px;
        right: 5px;
        height: 50px;
    }
</style>
