<template>
    <div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
                <button class="btn btn-block btn-lg btn-primary pt-5 pb-5" @click="showServicePanel">
                    <i class="fas fa-book" style="font-size:48px"></i> <h2>SERVICIOS</h2>
                </button>
            </div>
            <div v-if="is_convenio == 0" class="col-lg-6 col-md-6 col-sm-12 mb-4 pr-0">
                <button class="btn btn-block btn-lg btn-primary pt-5 pb-5" @click="showPromotionPanel">
                    <i class="fas fa-book" style="font-size:48px"></i> <h2>PROMOCIONES</h2>
                </button>    
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <button class="btn btn-block btn-info" @click="showClientPanel">
                <i class="fas fa-arrow-left"></i> Atras
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed:{
        ...mapState(['serviceShow','promotionShow', 'clientShow','selectedTypeService', 'is_convenio']),
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
