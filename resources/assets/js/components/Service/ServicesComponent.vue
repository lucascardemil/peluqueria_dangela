<template>

    <div>
        <h5>
            Nuevo Servicio
            <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#create"
                title="Agregar">
                <i class="fas fa-plus-circle"></i>
            </button>
        </h5>
        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Categoría</th>
                    <th>Nombre</th>
                    <th>Punto de Canje</th>
                    <th>Punto que Acumula</th>
                    <th>Precio</th>
                    <th>Servicio Canjeable</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchService.name" @keyup="getServices">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="serviceLocal in services" :key="serviceLocal.id">
                    <td width="10px">{{ serviceLocal.id }}</td>
                    <td>{{ serviceLocal.category.name }}</td>
                    <td>{{ serviceLocal.name }}</td>
                    <td>{{ serviceLocal.score_exchange }}</td>
                    <td>{{ serviceLocal.score_accumulated }}</td>
                    <td>${{ serviceLocal.price }}</td>
                    <td v-if="serviceLocal.redeemable_service === 1">Si</td>
                    <td v-else>No</td>
                    <td width="10px">
                        <button class="btn btn-warning btn-sm" @click.prevent="editService({serviceLocal})"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Editar">
                            <i class="far fa-edit"></i>
                        </button>
                    </td>
                    <td width="10px">
                        <button class="btn btn-danger btn-sm" @click.prevent="deleteService({ id: serviceLocal.id })"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Eliminar">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageService({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageService({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageService({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageService({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageService({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateServiceComponent></CreateServiceComponent>
        <EditServiceComponent></EditServiceComponent>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar';
import CreateServiceComponent from './CreateServiceComponent';
import EditServiceComponent from './EditServiceComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { CreateServiceComponent, EditServiceComponent },
    computed:{
        ...mapState(['services', 'pagination', 'offset', 'searchService']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getServices', 'editService', 'deleteService', 'changePageService'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getServices', { page: 1 })
    }
}

</script>

<style>

</style>
