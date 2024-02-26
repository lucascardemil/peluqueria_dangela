<template>
    <div>
        <h5>
            Nuevo Personal
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
                                v-model="searchPersonal.name" @keyup="getPersonals">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr v-for="personalLocal in personals" :key="personalLocal.id">
                    <td width="10px">{{ personalLocal.id }}</td>
                    <td>{{ personalLocal.name }}</td>
                    <td>{{ personalLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm"
                            @click.prevent="editPersonal( { personalLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar">
                            <i class="far fa-edit"></i>
                        </a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm"
                            @click.prevent="deletePersonal( { id: personalLocal.id } )"
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
                    <a class="page-link" href="#" @click.prevent="changePagePersonal({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePagePersonal({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePagePersonal({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePagePersonal({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePagePersonal({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreatePersonalComponent></CreatePersonalComponent>
        <EditPersonalComponent></EditPersonalComponent>
    </div>
</template>


<script>

import { loadProgressBar } from 'axios-progress-bar'
import CreatePersonalComponent from './CreatePersonalComponent'
import EditPersonalComponent from './EditPersonalComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { CreatePersonalComponent, EditPersonalComponent },
    computed:{
        ...mapState(['personals', 'pagination', 'offset', 'searchPersonal']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getPersonals', 'editPersonal', 'deletePersonal', 'changePagePersonal'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getPersonals', { page: 1 })
    }
}

</script>

<style>

</style>
