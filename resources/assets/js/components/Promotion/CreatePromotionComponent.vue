<template>

    <form action="POST" v-on:submit.prevent="createPromotion">
        <div id="create" class="modal fade ">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Nueva Promoción</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="POST" v-on:submit.prevent="addServicePromotion">
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input v-validate="'required|min:4|max:190'"
                                        :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                        type="text"
                                        name="nombre"
                                        class="form-control" v-model="newPromotion.name">
                                <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>
                            </div>
                            <div class="form-group">
                                <label for="servicio">Seleccionar servicio en promocion</label>
                                <ServicePromotionSelect></ServicePromotionSelect>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <button  :disabled="!newPromotion.name" type="submit" class="btn btn-block btn-primary btn-lg">Agregar servicio en promoción</button>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-danger btn-block btn-lg" @click="deleteServicePromotion">
                                        <i class="far fa-trash-alt"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                        </form>
                        <table  class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                            <thead>
                                <tr>
                                    <th>
                                        <h5>Servicio</h5>
                                    </th>
                                    <th>
                                        <h5>Valor</h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="servicepromotionLocal in listServicepromotions" :key="servicepromotionLocal.id">
                                    <td><h5>{{ servicepromotionLocal.nombre }}</h5></td>
                                    <td><h5>{{ servicepromotionLocal.precio }}</h5></td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- <h2>Valor de Promoción:$ {{ totalPromotion }} </h2> -->
                        <h2>Valor de Promoción: $ {{ totalPromotion }}</h2>
                        <hr>
                        <label>Valor Manual</label>
                        <div class="mt-2">
                            <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('total') }"
                                type="text"
                                name="total"
                                class="form-control" v-model="newPromotion.total" >
                            <p v-show="errors.has('total')" class="text-danger">{{ errors.first('total') }}</p>
                        </div>
                        
                                
            
                            
                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                            <p>{{ error.total }}</p>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completePromotionCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>

</template>

<script>

import SelectCategory from '../Category/SelectCategoryPos'
import ServicePromotionSelect from '../Service/SelectServicePromotion'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    components: { ServicePromotionSelect, SelectCategory },
    computed:{
        ...mapState(['newPromotion','selectedServicepromotions','listServicepromotions','totalPromotion', 'errorsLaravel']),
        ...mapGetters(['completePromotionCreate'])
    },
    methods:{
        ...mapActions(['createPromotion','addServicePromotion','totalServicePromotion','deleteServicePromotion'])
    },
}
</script>
