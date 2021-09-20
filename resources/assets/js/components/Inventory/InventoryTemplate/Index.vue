<template>

    <div>

        <h5>
            Nueva Plantilla de Inventario
            <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create"
                title="Agregar">
                <i class="fas fa-plus-circle"></i>
            </a>
        </h5>
            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Sucursal</th>
                    <th>Nombre</th>
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
                                v-model="searchTemplate.name" @keyup="getTemplates">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr v-for="templateLocal in templates" :key="templateLocal.id">
                    <td width="10px">{{ templateLocal.id }}</td>
                    <td>{{ templateLocal.sucursal.name }}</td>
                    <td>{{ templateLocal.name }}</td>
                    <td>{{ templateLocal.created_at |  moment('DD/MM/YYYY hh:mm') }}</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm"
                            @click.prevent="editTemplate( { templateLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar">
                            <i class="far fa-edit"></i>
                        </a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm"
                            @click.prevent="deleteTemplate( { id: templateLocal.id } )"
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
                    <a class="page-link" href="#" @click.prevent="changePageTemplate({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageTemplate({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageTemplate({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageTemplate({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageTemplate({page:pagination.last_page})">
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
        ...mapState(['templates', 'pagination', 'offset', 'searchTemplate']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getTemplates', 'editTemplate', 'deleteTemplate', 'changePageTemplate'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getTemplates', { page: 1 })
    }
}

</script>

<style>

</style>
