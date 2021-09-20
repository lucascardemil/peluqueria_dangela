<template>

    <form action="POST" v-on:submit.prevent="createInventory">
        <div class="modal fade modal-fullscreen" id="create" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Inventariar</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body row">

                        <div class="col-5">
                            <label for="codigo">Sucursal*</label>
                            <select-sucursal-inventory></select-sucursal-inventory>
                        </div>

                        <div class="col-5">
                            <label for="plantilla">Plantilla de Inventariado*</label>
                            <select-inventory-template></select-inventory-template>
                        </div>

                        <div class="col-2">
                            <label>.</label>
                            <button type="button" class="btn btn-success form-control" @click="chargeTemplate">
                                <i class="fas fa-clipboard-check"></i> Cargar
                            </button>
                        </div>

                        <div class="col-12">

                            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Marca</th>
                                        <th>Laboratorio</th>
                                        <th>Producto</th>
                                        <th>Codigo</th>
                                        <th>Stock Actual</th>
                                        <th>Precio Neto Compra</th>
                                        <th>Precio Neto Venta</th>
                                        <th>Cantidad</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="inventoryLocal in codes" :key="inventoryLocal.id">
                                        <td width="10px">{{ inventoryLocal.id }}</td>
                                        <td>{{ inventoryLocal.brandName }}</td>
                                        <td>{{ inventoryLocal.laboratoryName }}</td>
                                        <td>{{ inventoryLocal.productName }} - {{ inventoryLocal.productDetail }}</td>
                                        <td>{{ inventoryLocal.codeName }}</td>
                                        <td>{{ inventoryLocal.quantity }}</td>
                                        <td>
                                            <input
                                                type="number"
                                                class="form-control-sm" v-model="inventoryLocal.price_cost">
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="form-control-sm" v-model="inventoryLocal.price_sale">
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                class="form-control-sm" v-model="inventoryLocal.newQuantity">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <!--<div class="col-4">
                            <label for="codigo">Código*</label>
                            <select-code></select-code>
                        </div>-->

                        <!--<label for="precio_compra">Valor Compra Neto</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('precio_compra') }"
                                type="number"
                                name="precio_compra"
                                class="form-control" v-model="newInventory.price_cost">
                        <p v-show="errors.has('precio')" class="text-danger">{{ errors.first('precio_compra') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.price_cost }}</p>
                        </div>

                        <label for="precio_venta">Valor Venta Neto</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('precio_venta') }"
                                type="number"
                                name="precio_venta"
                                class="form-control" v-model="newInventory.price_sale">
                        <p v-show="errors.has('precio_venta')" class="text-danger">{{ errors.first('precio_venta') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.price_sale }}</p>
                        </div>

                        <label for="cantidad">Cantidad</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('cantidad') }"
                                type="number"
                                name="cantidad"
                                class="form-control" v-model="newInventory.quantity">
                        <p v-show="errors.has('cantidad')" class="text-danger">{{ errors.first('cantidad') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.quantity }}</p>
                        </div>-->

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['codes', 'newInventory', 'errorsLaravel']),
        ...mapGetters(['completeInventoryCreate'])
    },
    methods:{
        ...mapActions(['createInventory', 'chargeTemplate'])
    },

}
</script>

