<template>
    <div class="row">

        <div class="col-lg-12">
            <button class="btn btn-block btn-primary btn-lg pt-4 pb-4 mt-4" @click="allClients">
                <i class="fas fa-user"></i> Actualizar Clientes
            </button>
        </div>

        <selectClient></selectClient>

        <div class="row col-12 pr-0">
            <div class="col-lg-3 col-md-6 col-sm-12">
                <button class="btn btn-block btn-info btn-lg  pt-4 pb-4 mt-4" @click="showSucursalPanel">
                <i class="fas fa-arrow-left"></i> Atras
                </button>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-6 pr-0">
                <button class="btn btn-block btn-info btn-lg  pt-4 pb-4 mt-4" @click="showTypeServicePanel">
                <i class="fas fa-arrow-right"></i> Siguiente
                </button>
            </div>
        </div>
    </div>

</template>

<script>

import selectClient from '../../User/Select'
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
