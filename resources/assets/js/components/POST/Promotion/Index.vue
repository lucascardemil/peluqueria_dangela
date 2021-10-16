<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h2 v-if="selectedClient != null">Cliente: {{ selectedClient.nombre }}</h2>
            </div>
            <hr>
            <div class="col-12">
                <h2 class="color-primary mt-2">Seleccione promoción</h2>
            </div>
            <SelectPromotion></SelectPromotion>
            <div class="col-12">
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
                                <button  class="btn btn-block btn-secondary" :disabled="service.estado=='CONFIRMADO' || selectedPersonalposts==null" @click="addServicePersonalPromotion(service)">
                                CONFIRMAR
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12">
                <button class="btn btn-block btn-info btn-lg" @click="showTypeServicePanel">
                <i class="fas fa-arrow-left"></i> Atras
                </button>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-6">
                <button class="btn btn-block btn-info btn-lg " @click="showFinalPanel">
                <i class="fas fa-arrow-right"></i> Siguiente
                </button>
            </div>
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

