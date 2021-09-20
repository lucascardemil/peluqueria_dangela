<template>

    <div>


        <h5>
            Opciones para Agregar
        </h5>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <!--active (class nav-link), false-->
                <a class="nav-link mr-2" id="pills-brand-tabe" data-toggle="pill" href="#pills-brand"
                    role="tab" aria-controls="pills-brand" aria-selected="false">
                    Nueva Marca
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-laboratory-tab" data-toggle="pill" href="#pills-laboratory"
                    role="tab" aria-controls="pills-laboratory" aria-selected="false">
                    Nuevo Laboratorio
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-unit-tab" data-toggle="pill" href="#pills-unit"
                    role="tab" aria-controls="pills-unit" aria-selected="false">
                    Nueva Unidad de Medida
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-product-tab" data-toggle="pill" href="#pills-product"
                    role="tab" aria-controls="pills-product" aria-selected="false">
                    Nuevo Producto
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-code-tab" data-toggle="pill" href="#pills-code"
                    role="tab" aria-controls="pills-code" aria-selected="false">
                    Nuevo Código
                </a>
            </li>
        </ul>
        <!------------------------------------------------------------>
        <!------------------------------------------------------------>
        <div class="tab-content mb-4" id="pills-tabContent">

            <!--<div class="tab-pane fade show active" id="pills-brand" role="tabpanel" aria-labelledby="pills-brand-tab">-->
            <div class="tab-pane fade show" id="pills-brand" role="tabpanel" aria-labelledby="pills-brand-tab">
                <form action="POST" class="row" v-on:submit.prevent="createBrand">

                    <!--<div class="col-12">
                        <h5>Nueva Marca</h5>
                    </div>-->

                    <div class="col-8">
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                class="form-control" v-model="newBrand.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>
                    </div>

                    <div class="col-4">
                        <button type="submit" class="btn btn-success" :disabled="!completeBrandCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>

                </form>
            </div>

            <div class="tab-pane fade" id="pills-laboratory" role="tabpanel" aria-labelledby="pills-laboratory-tab">
                <form action="POST" class="row" v-on:submit.prevent="createLaboratory">

                    <!--<div class="col-12">
                        <h5>Nuevo Laboratorio</h5>
                    </div>-->
                    <div class="col-8">
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                class="form-control" v-model="newLaboratory.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>
                    </div>

                    <div class="col-4">
                        <button type="submit" class="btn btn-success" :disabled="!completeLaboratoryCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>

                </form>
            </div>

            <div class="tab-pane fade" id="pills-unit" role="tabpanel" aria-labelledby="pills-unit-tab">
                <form action="POST" class="row" v-on:submit.prevent="createUnit">

                    <!--<div class="col-12">
                        <h5>Nuevo Laboratorio</h5>
                    </div>-->
                    <div class="col-8">
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                class="form-control" v-model="newUnit.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>
                    </div>

                    <div class="col-4">
                        <button type="submit" class="btn btn-success" :disabled="!completeUnitCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>

                </form>
            </div>

            <div class="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab">
                <form action="POST" class="row" v-on:submit.prevent="createProduct">

                    <div class="col-4">
                        <input v-validate="'required|min:4|max:190'"
                            :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            class="form-control" v-model="newProduct.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>
                    </div>

                    <div class="col-4">
                        <input v-validate="'max:190'"
                            :class="{'input': true, 'is-invalid': errors.has('detalle') }"
                            type="text"
                            name="detalle"
                            placeholder="Detalle"
                            class="form-control" v-model="newProduct.detail">
                        <p v-show="errors.has('detalle')" class="text-danger">{{ errors.first('detalle') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.detail }}</p>
                        </div>
                    </div>

                    <div class="col-4">
                        <button type="submit" class="btn btn-success" :disabled="!completeProductCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>


                </form>
            </div>

            <div class="tab-pane fade" id="pills-code" role="tabpanel" aria-labelledby="pills-code-tab">
                <form action="POST" class="row" v-on:submit.prevent="createCode">

                    <div class="col-6 mb-3">
                        <label for="categoria">Marca*</label>
                        <select-brand></select-brand>
                    </div>

                    <div class="col-6 mb-3">
                        <label for="categoria">Laboratorio*</label>
                        <select-laboratory></select-laboratory>
                    </div>
                    <div class="col-6 mb-3">
                        <label for="categoria">Producto*</label>
                        <select-product></select-product>
                    </div>

                    <div class="col-6 mb-3">
                    </div>

                    <div class="col-6">
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('detalle') }"
                                type="text"
                                name="detalle"
                                placeholder="Detalle"
                                class="form-control" v-model="newCode.detail">
                        <p v-show="errors.has('detalle')" class="text-danger">{{ errors.first('detalle') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>
                    </div>

                    <div class="col-6">
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                class="form-control" v-model="newCode.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>
                    </div>

                    <div class="col-3">
                        <label>Valor Estimado Compra Neto</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('costo') }"
                                type="number"
                                name="costo"
                                placeholder=""
                                class="form-control" v-model="newCode.price_cost">
                        <p v-show="errors.has('costo')" class="text-danger">{{ errors.first('costo') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.price_cost }}</p>
                        </div>
                    </div>

                    <div class="col-3">
                        <label>Valor Estimado Venta Neto</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('venta') }"
                                type="number"
                                name="venta"
                                placeholder=""
                                class="form-control" v-model="newCode.price_sale">
                        <p v-show="errors.has('venta')" class="text-danger">{{ errors.first('venta') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.price_sale }}</p>
                        </div>
                    </div>

                    <div class="col-3">
                        <label>.</label>
                        <button type="submit" class="btn btn-success form-control" :disabled="!completeCodeCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>

                </form>
            </div>

        </div>

        <h5 class="mb-4">
            <a href="#" class="btn btn-success pull-right btn-lg" data-toggle="modal" data-target="#create"
                title="Agregar">
                Inventariar <i class="fas fa-plus-circle"></i>
            </a>
        </h5>

        <h5>
            Ver Inventario por Sucursal
        </h5>
        <div class="row mt-3 mb-2">
            <div class="col-lg-2 col-md-2 col-sm-4" v-for="sucursalLocal in sucursals" :key="sucursalLocal.id">
                <button class="btn btn-primary" @click="getInventories({ page: 1, sucursal_id: sucursalLocal.id })">
                    <i class="far fa-building"></i> <span>{{ sucursalLocal.name }}</span>
                </button>
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
                    <th>Cantidad</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
                    <td width="10px">
                        <a href="#" class="btn btn-info btn-sm"
                            @click.prevent="detailInventory( { inventoryLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Detalle">
                            <i class="fas fa-bars"></i>
                        </a>
                    </td>
                    <!--<td width="10px">
                        <a href="#" class="btn btn-warning btn-sm"
                            @click.prevent="editInventory( { inventoryLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar">
                            <i class="far fa-edit"></i>
                        </a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm"
                            @click.prevent="deleteInventory( { id: inventoryLocal.id } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Eliminar">
                            <i class="fas fa-ban"></i>
                        </a>
                    </td>-->
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

        <Detail></Detail>
        <Create></Create>
        <Edit></Edit>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar'
import Detail from './Detail'
import Create from './Create'
import Edit from './Edit'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { Create, Edit, Detail },
    computed:{
        ...mapState(['inventories', 'sucursals', 'pagination', 'offset', 'newBrand', 'newLaboratory', 'newUnit',
                    'newProduct', 'newCode', 'errorsLaravel']),
        ...mapGetters(['isActived', 'pagesNumber', 'completeBrandCreate', 'completeLaboratoryCreate',
                    'completeUnitCreate', 'completeProductCreate', 'completeCodeCreate'])
    },
    methods:{
        ...mapActions(['getInventories', 'detailInventory', 'editInventory', 'deleteInventory', 'changePageInventory',
                    'createBrand', 'createLaboratory', 'createUnit', 'createProduct', 'createCode'])
    },
    created(){
        loadProgressBar();
        //this.$store.dispatch('getInventories', { page: 1, idSucursal })
        this.$store.dispatch('allSucursals')
    }
}

</script>

<style>

</style>
