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


