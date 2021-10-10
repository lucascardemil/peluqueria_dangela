<template>

    <div>

        <h5>
            Nueva Empresa
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
                                    v-model="searchCompany.name" @keyup="getCompanies">
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr v-for="companyLocal in companies" :key="companyLocal.id">
                        <td width="10px">{{ companyLocal.id }}</td>
                        <td>{{ companyLocal.name }}</td>
                        <td>{{ companyLocal.created_at |  moment('DD/MM') }}</td>
                        <td>{{ companyLocal.discount }}%</td>
                        <td width="10px">
                            <a href="#" class="btn btn-warning btn-sm"
                                @click.prevent="editCompany({companyLocal})"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Editar">
                                <i class="far fa-edit"></i>
                            </a>
                        </td>
                        <td width="10px">
                            <a href="#" class="btn btn-danger btn-sm"
                                @click.prevent="deleteCompany({ id: companyLocal.id })"
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
                    <a class="page-link" href="#" @click.prevent="changePageCompany({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageCompany({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageCompany({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageCompany({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageCompany({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateCompanyComponent></CreateCompanyComponent>
        <EditCompanyComponent></EditCompanyComponent>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar';
import CreateCompanyComponent from './CreateCompanyComponent';
import EditCompanyComponent from './EditCompanyComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { CreateCompanyComponent, EditCompanyComponent },
    computed:{
        ...mapState(['companies', 'pagination', 'offset', 'searchCompany']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getCompanies', 'editCompany', 'deleteCompany', 'changePageCompany'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getCompanies', { page: 1 })
    }
}

</script>

<style>

</style>
