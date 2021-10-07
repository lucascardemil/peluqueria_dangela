<template>
    <div>

        
        <button class="btn btn-block btn-primary btn-lg" @click="allClients">
            <i class="fas fa-user"></i> Actualizar Clientes
        </button>

        
        <selectClient></selectClient>

        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
                <button class="btn btn-block btn-info" @click="showSucursalPanel">
                <i class="fas fa-arrow-left"></i> Atras
                </button>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-6">
                <button class="btn btn-block btn-info" @click="showTypeServicePanel">
                <i class="fas fa-arrow-right"></i> Siguiente
                </button>
            </div>
        </div>
    </div>

</template>

<script>

import selectClient from '../../Client/Select'
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { selectClient },
    computed:{
        ...mapState(['sucursalShow', 'clientShow', 'typeServiceShow']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['showSucursalPanel', 'allClients', 'showTypeServicePanel'])
    },
    created(){
        loadProgressBar()
    }
}
</script>

<style>

</style>
