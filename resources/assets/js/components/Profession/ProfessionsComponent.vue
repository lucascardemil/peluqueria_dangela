<template>

    <div>

        <h5>
            Nueva Profesión
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
                        <th>Descuento</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" class="form-control form-control-sm"
                                    v-model="searchProfession.name" @keyup="getProfessions">
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr v-for="professionLocal in professions" :key="professionLocal.id">
                        <td width="10px">{{ professionLocal.id }}</td>
                        <td>{{ professionLocal.name }}</td>
                        <td>{{ professionLocal.date |  moment('DD/MM') }}</td>
                        <td>{{ professionLocal.percentage }}%</td>
                        <td width="10px">
                            <a href="#" class="btn btn-warning btn-sm"
                                @click.prevent="editProfession({professionLocal})"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Editar">
                                <i class="far fa-edit"></i>
                            </a>
                        </td>
                        <td width="10px">
                            <a href="#" class="btn btn-danger btn-sm"
                                @click.prevent="deleteProfession({ id: professionLocal.id })"
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
                    <a class="page-link" href="#" @click.prevent="changePageProfession({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageProfession({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageProfession({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageProfession({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageProfession({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateProfessionComponent></CreateProfessionComponent>
        <EditProfessionComponent></EditProfessionComponent>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar';
import CreateProfessionComponent from './CreateProfessionComponent';
import EditProfessionComponent from './EditProfessionComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { CreateProfessionComponent, EditProfessionComponent },
    computed:{
        ...mapState(['professions', 'pagination', 'offset', 'searchProfession']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getProfessions', 'editProfession', 'deleteProfession', 'changePageProfession'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getProfessions', { page: 1 })
    }
}

</script>

<style>

</style>
