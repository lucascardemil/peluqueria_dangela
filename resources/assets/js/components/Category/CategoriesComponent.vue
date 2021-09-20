<template>

    <div>

        <h5>
            Nueva Categoría
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
                    <th>Agregar</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchCategory.name" @keyup="getCategories">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr v-for="categoryLocal in categories" :key="categoryLocal.id">
                    <td width="10px">{{ categoryLocal.id }}</td>
                    <td>{{ categoryLocal.name }}</td>
                    <td>{{ categoryLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                    <td v-if="categoryLocal.isSession == true">Agregado</td>
                    <td v-else>No Agregado</td>
                    <td width="10px">
                        <a href="#" class="btn btn-warning btn-sm"
                            @click.prevent="editCategory( { categoryLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar">
                            <i class="far fa-edit"></i>
                        </a>
                    </td>
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm"
                            @click.prevent="deleteCategory( { id: categoryLocal.id } )"
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
                    <a class="page-link" href="#" @click.prevent="changePageCategory({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageCategory({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageCategory({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageCategory({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageCategory({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateCategoryComponent></CreateCategoryComponent>
        <EditCategoryComponent></EditCategoryComponent>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar'
import CreateCategoryComponent from './CreateCategoryComponent'
import EditCategoryComponent from './EditCategoryComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { CreateCategoryComponent, EditCategoryComponent },
    computed:{
        ...mapState(['categories', 'pagination', 'offset', 'searchCategory']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getCategories', 'editCategory', 'deleteCategory', 'changePageCategory'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getCategories', { page: 1 })
    }
}

</script>

<style>

</style>
