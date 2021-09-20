<template>

    <div>

        <h5 class="mt-5">
            Ver Inventario por Sucursal
        </h5>
        <div class="row mt-3 mb-2">
            <div class="col-lg-2 col-md-2 col-sm-4" v-for="sucursalLocal in sucursals" :key="sucursalLocal.id">
                <button class="btn btn-primary" @click="getInventories({ page: 1, sucursal_id: sucursalLocal.id })">
                    <i class="far fa-building"></i> <span>{{ sucursalLocal.name }}</span>
                </button>
            </div>
        </div>

        <div class="row">
            <div class="col-5 mt-3">
                <label for="tipoConsumo">Tipo de Consumo</label>
                <select class="form-control" id="tipoConsumo" v-model="tipoConsumo.value">
                    <option value="0">Inventario</option>
                    <option value="1">Venta</option>
                </select>
            </div>
        </div>

        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Laboratorio</th>
                    <th>Producto</th>
                    <th>Codigo</th>
                    <th>Stock</th>
                    <th>Cantidad</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchReduction.brand" @keyup="getInventories2">
                    </td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchReduction.laboratory" @keyup="getInventories2">
                    </td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchReduction.product" @keyup="getInventories2">
                    </td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchReduction.code" @keyup="getInventories2">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr v-for="inventoryLocal in inventories" :key="inventoryLocal.id">
                    <td width="10px">{{ inventoryLocal.id }}</td>
                    <td>{{ inventoryLocal.brandName }}</td>
                    <td>{{ inventoryLocal.laboratoryName }}</td>
                    <td>{{ inventoryLocal.productName }} - {{ inventoryLocal.productDetail }}</td>
                    <td>{{ inventoryLocal.codeName }}</td>
                    <td>{{ inventoryLocal.quantity }}</td>
                    <td>
                        <input
                            type="number"
                            class="form-control-sm" v-model="inventoryLocal.newQuantity"
                            :disabled="inventoryLocal.quantity == 0">
                    </td>
                    <td width="10px">
                        <button class="btn btn-info btn-sm"
                            @click.prevent="addConsumeProduct( { inventoryLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Agregar Consumo"
                            :disabled="inventoryLocal.quantity == 0">
                            <i class="fas fa-plus-square"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageInventory({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageInventory({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageInventory({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageInventory({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageInventory({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>


        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Laboratorio</th>
                    <th>Producto</th>
                    <th>Codigo</th>
                    <th>Cantidad</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="consumeLocal in consumeProducts" :key="consumeLocal.id">
                    <td width="10px">{{ consumeLocal.id }}</td>
                    <td>{{ consumeLocal.brandName }}</td>
                    <td>{{ consumeLocal.laboratoryName }}</td>
                    <td>{{ consumeLocal.productName }} - {{ consumeLocal.productDetail }}</td>
                    <td>{{ consumeLocal.codeName }}</td>
                    <td>{{ consumeLocal.newQuantity }}</td>
                    <td width="10px">
                        <button class="btn btn-danger btn-sm"
                            @click.prevent="deleteConsumeProduct( { id: consumeLocal.id } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Eliminar">
                            <i class="fas fa-ban"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <button class="btn btn-success btn-lg text-white" name="guardar" @click="confirmReduction">
            <i class="fas fa-plus-square"></i> Confirmar Inventario
        </button>

        <Confirmar></Confirmar>

    </div>


</template>


<script>

import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'
import  Confirmar  from './Confirm'

export default {
    components: { Confirmar },
    computed:{
        ...mapState(['sucursals', 'inventories', 'consumeProducts', 'newReduction', 'searchReduction',
                    'tipoConsumo', 'pagination', 'offset',]),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getInventories', 'getInventories2', 'confirmReduction', 'changePageInventory',
            'addConsumeProduct', 'deleteConsumeProduct'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('allCodes')
        this.$store.dispatch('allSucursals')
    }
}

</script>

<style>

</style>
