<template>
    <div class="row col-12 pr-0">
        <div class="col-12 mb-5 mt-2">
            <h1 color="primary">SELECCIONAR SUCURSAL</h1>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 mb-4 pr-0">
            <button class="btn btn-block btn-lg btn-primary pt-5 pb-5" @click="showServicePanel">
                <i class="fas fa-book" style="font-size:48px"></i> <h2>SERVICIOS</h2>
            </button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-4 pr-0">
            <button class="btn btn-block btn-lg btn-primary pt-5 pb-5" @click="showPromotionPanel">
                <i class="fas fa-book" style="font-size:48px"></i> <h2>PROMOCIONES</h2>
            </button>    
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mt-4">
            <button class="btn btn-block btn-info btn-lg  pt-4 pb-4" @click="showClientPanel">
               <i class="fas fa-arrow-left"></i> Atras
            </button>
        </div>
    </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed:{
        ...mapState(['serviceShow','promotionShow', 'clientShow','selectedTypeService']),
    },
    methods:{
        ...mapActions(['showServicePanel','showPromotionPanel','showClientPanel'])
    },
    created(){
        loadProgressBar()
    }
}
</script>

<style>

</style>
