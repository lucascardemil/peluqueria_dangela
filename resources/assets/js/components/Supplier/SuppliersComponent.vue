<template>
    <div>
        <h5>
            Nuevo Proveedor
            <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create"
                title="Agregar">
                <i class="fas fa-plus-circle"></i>
            </a>
        </h5>

        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Rut</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th>Giro</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="supplier in suppliers" :key="supplier.id">
                    <td>{{ supplier.name }}</td>
                    <td>{{ supplier.rut }}</td>
                    <td>{{ supplier.phone }}</td>
                    <td>{{ supplier.address }}</td>
                    <td>{{ supplier.commercial_business }}</td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageSupplier({ page: 1 })">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageSupplier({ page: pagination.current_page - 1 })">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active' : '']"
                    :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageSupplier({ page })">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageSupplier({ page: pagination.current_page + 1 })">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageSupplier({ page: pagination.last_page })">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateSupplierComponent></CreateSupplierComponent>
    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import CreateSupplierComponent from './CreateSupplierComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { CreateSupplierComponent },
    computed:{
        ...mapState(['suppliers', 'pagination', 'offset']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getSuppliers','changePageSupplier'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getSuppliers', { page: 1 })
    }
}

</script>