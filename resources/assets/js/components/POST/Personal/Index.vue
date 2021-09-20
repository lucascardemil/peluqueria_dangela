<template>
    <div class="row col-12">
        <div class="col-12">
            <h1 class="color-primary mt-2">SELECCIONAR PERSONAL</h1>
        </div>
        <PersonalService></PersonalService>
        <div class="col-lg-12 col-md-12 col-sm-12 mt-5 mb-5">
            <button :disabled="selectedPersonalposts == null" class="btn btn-block btn-primary btn-lg boton-grande" @click="addService">
                AGREGAR SERVICIO Y PERSONAL(ES)
            </button>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mt-4">
            <button class="btn btn-block btn-info btn-lg  pt-4 pb-4" @click="showTypeServicePanel">
               <i class="fas fa-arrow-left"></i> Atras
            </button>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-6 mt-4">
            <button class="btn btn-block btn-info btn-lg  pt-4 pb-4" @click="showFinalPanel">
               <i class="fas fa-arrow-right"></i> Siguiente
            </button>
        </div>
    </div>
</template>

<script>

import PersonalService from './Select'
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { PersonalService },
    computed:{
        ...mapState(['selectedPersonalposts']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['addService','totalServicePost', 'showTypeServicePanel', 'showFinalPanel'])
    },
    created(){
        loadProgressBar()
    }
}
</script>

<style>

</style>


