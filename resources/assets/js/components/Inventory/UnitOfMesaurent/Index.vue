<template>

    <div>

        <h5>
            Nueva Unidad de Medida
            <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create"
                title="Agregar">
                <i class="fas fa-plus-circle"></i>
            </a>
        </h5>
            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchUnit.name" @keyup="getUnits">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr v-for="unitLocal in units" :key="unitLocal.id">
                    <td width="10px">{{ unitLocal.id }}</td>
                    <td>{{ unitLocal.name }}</td>
                    <td>{{ unitLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm"
                            @click.prevent="editUnit( { unitLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar">
                            <i class="far fa-edit"></i>
                        </a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm"
                            @click.prevent="deleteUnit( { id: unitLocal.id } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Eliminar">
                            <i class="fas fa-ban"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageUnit({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageUnit({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageUnit({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageUnit({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageUnit({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <Create></Create>
        <Edit></Edit>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar'
import Create from './Create'
import Edit from './Edit'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { Create, Edit },
    computed:{
        ...mapState(['units', 'pagination', 'offset', 'searchUnit']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getUnits', 'editUnit', 'deleteUnit', 'changePageUnit'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getUnits', { page: 1 })
    }
}

</script>

<style>

</style>
