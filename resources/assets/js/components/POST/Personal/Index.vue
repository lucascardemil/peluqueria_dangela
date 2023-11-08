<template>
    <div>
        <div class="col-12">
            <h2 class="color-primary mt-2">SELECCIONAR PERSONAL</h2>
            <PersonalService></PersonalService>
            
            <button :disabled="selectedPersonalposts == null" class="btn btn-block btn-primary mt-3" @click="addService">
                AGREGAR SERVICIO Y PERSONAL(ES)
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


