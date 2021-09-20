<template>
    <div class="row col-12">
        <div class="col-12">
            <h2 v-if="selectedClient != null">Cliente: {{ selectedClient.nombre }}</h2>
        </div>
        <div class="col-12">
            <h1 class="color-primary mt-2">Seleccione promoción</h1>
        </div>
        <SelectPromotion></SelectPromotion>
        <div class="col-12 mt-4">
            <table  class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>
                            <h3>Servicio</h3>
                        </th>
                        <th>
                            <h3>Personal</h3>
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="service in servicepromotions" :key="service.value">
                        <td><h3>{{ service.label }}</h3></td>
                        <td class="col-3" v-if="service.estado!='CONFIRMADO'"><SelectPersonal></SelectPersonal></td>
                        <td class="col-3" v-else> <h3>{{ service.personal }}</h3> </td>
                        
                        <td>
                            <button  class="btn btn-block btn-secondary btn-lg  pt-4 pb-4" :disabled="service.estado=='CONFIRMADO' || selectedPersonalposts==null" @click="addServicePersonalPromotion(servicepromotions[service.position])">
                            CONFIRMAR
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
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

import SelectPromotion from '../../Promotion/SelectPromotionPos'
import SelectPersonal from '../Personal/SelectOne'
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { SelectPromotion,SelectPersonal },
    computed:{
        ...mapState(['selectedClient','servicepromotions','selectedPersonalposts']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['addServicePersonalPromotion','showTypeServicePanel','showFinalPanel'])
    },
    created(){
        loadProgressBar()
        
    }
}
</script>

<style>

</style>

