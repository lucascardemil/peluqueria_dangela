<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item mr-1">
                <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create"
                    title="Agregar">
                    <i class="fas fa-plus-circle"></i> Nuevo Producto
                </a>
            </li>
            <li class="nav-item mr-1">
                <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create_utility"
                    title="Agregar">
                    <i class="fas fa-money-bill-wave"></i> Utilidad
                </a>
            </li>
            <li class="nav-item mr-1">
                <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create_flete"
                    title="Agregar">
                    <i class="fas fa-truck"></i> Flete
                </a>
            </li>
        </ul>
        <input type="text" name="searchProduct" class="form-control my-2" placeholder="Filtrar Producto..." v-model="searchProduct.name" @keyup="getProducts">
        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Codigo</th>
                    <th>Proveedor</th>
                    <th>Detalle</th>
                    <th>Fecha</th>
                    <th>Utilidad</th>
                    <th>Flete</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.code }}</td>
                    <td>{{ product.supplier }}</td>
                    <td>{{ product.detail }}</td>
                    <td>{{ product.created_at }}</td>
                    <td>{{ product.utility }}%</td>
                    <td>${{ product.flete }}</td>
                    <td>
                        <a href="#" class="btn btn-warning pull-right btn-sm" data-toggle="modal"
                            data-target="#edit_product" title="Editar"
                            @click.prevent="editProduct({ product, page: pagination.current_page })">
                            <i class="far fa-edit"></i>
                        </a>
                        <a href="#" class="btn btn-info pull-right btn-sm" data-toggle="modal" data-target="#edit_inventory"
                            title="Inventario"
                            @click.prevent="editInventory({ id: product.id, inventories: product.inventories })">
                            <i class="fas fa-boxes"></i>
                        </a>
                        <a href="#" class="btn btn-danger pull-right btn-sm" data-toggle="modal"
                            data-target="#delete_product" title="Eliminar"
                            @click.prevent="modalDeleteProduct({ id: product.id })">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageProduct({ page: 1 })">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageProduct({ page: pagination.current_page - 1 })">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active' : '']"
                    :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageProduct({ page })">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageProduct({ page: pagination.current_page + 1 })">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageProduct({ page: pagination.last_page })">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateProductComponent></CreateProductComponent>
        <EditProductComponent></EditProductComponent>
        <EditInventoryProductComponent></EditInventoryProductComponent>
        <DeleteProductComponent></DeleteProductComponent>
        <UtilityDefectComponent></UtilityDefectComponent>
        <FleteDefectComponent></FleteDefectComponent>
    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import CreateProductComponent from './CreateProductComponent'
import UtilityDefectComponent from './UtilityDefectComponent'
import FleteDefectComponent from './FleteDefectComponent'
import EditProductComponent from './EditProductComponent'
import EditInventoryProductComponent from './EditInventoryProductComponent'
import DeleteProductComponent from './DeleteProductComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { CreateProductComponent, EditProductComponent, EditInventoryProductComponent, DeleteProductComponent, UtilityDefectComponent, FleteDefectComponent },
    computed: {
        ...mapState(['products', 'pagination', 'offset', 'searchProduct']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods: {
        ...mapActions(['getProducts', 'getUtilities', 'getFletes', 'editProduct', 'editInventory', 'modalDeleteProduct', 'changePageProduct'])
    },
    created() {
        loadProgressBar();
        this.$store.dispatch('getProducts', { page: 1 })
        this.$store.dispatch('getUtilities')
        this.$store.dispatch('getFletes')
    }
}

</script>