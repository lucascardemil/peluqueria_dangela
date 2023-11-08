<template>
    <form action="POST" v-on:submit.prevent="updatePromotion({ id: fillPromotion.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Promocion</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table  class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                            <thead>
                                <tr>
                                    <th>
                                        <h5>Servicio</h5>
                                    </th>
                                    <th>
                                        <h5>Valor</h5>
                                    </th>
                                    <th>
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="servicepromotionEdit in servicespromotions" :key="servicepromotionEdit.id">
                                    
                                    <td><h5>{{ servicepromotionEdit.service.name }}</h5></td>
                                    <td><h5>$ {{ servicepromotionEdit.service.price }}</h5></td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-danger btn-sm"
                                            @click.prevent="deletePromotionEdit( { id: servicepromotionEdit.id, id_promo: fillPromotion.id} )"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Eliminar">
                                            <i class="fas fa-ban"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                        <form action="POST" v-on:submit.prevent="addServicePromotion">
                            <div class="form-group">
                                <label for="categoria">Seleccionar categoria en promocion</label>
                                <SelectCategory></SelectCategory>
                            </div>

                            <div class="form-group">
                                <label for="servicio">Seleccionar servicio en promocion</label>
                                <ServicePromotionSelect></ServicePromotionSelect>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <button type="submit" class="btn btn-block btn-primary btn-lg">Agregar servicio en promoción</button>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-danger btn-block btn-lg" type="button" @click="deleteServicePromotion">
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
                                    <td><h5>$ {{ servicepromotionLocal.precio }}</h5></td>
    
                                </tr>
                                <tr>
                                    <td class="text-right"><h5>Total:</h5></td>
                                    <td><h5>$ {{ totalPromotion }}</h5></td>
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                        <h4>Valor de Promoción</h4>
                        <div class="mt-2">
                            <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('total') }"
                                type="text"
                                name="total"
                                class="form-control" v-model="fillPromotion.total" >
                            <p v-show="errors.has('total')" class="text-danger">{{ errors.first('total') }}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" >
                            <i class="fas fa-edit"></i> Editar
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
    components: {ServicePromotionSelect, SelectCategory },
    computed:{
        ...mapState(['fillPromotion','servicespromotions','listServicepromotions','totalPromotion', 'errorsLaravel']),
    },
    methods:{
        ...mapActions(['updatePromotion','addServicePromotion','totalServicePromotion','deleteServicePromotion','deletePromotionEdit'])
    },
}

</script>

<style>

</style>