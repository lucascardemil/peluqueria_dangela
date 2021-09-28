<template>

    <div class="">

        <h5 class="text-header">
            Nuevo Cliente
            <button class="btn btn-success btn-rounded btn-icon btn-sm" data-toggle="modal" data-target="#create"
                title="Agregar">
                <i class="fas fa-plus-circle"></i>
            </button>
        </h5>

        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Profesión</th>
                    <th>Rut</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <!--<th>Fecha Nacimiento</th>
                    <th>Sexo</th>
                    <th>Estado Civil</th>
                    <th>Hijos</th>-->
                    <th>Código de barra</th>
                    <th>Puntaje</th>
                    <th>Enviar Correo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchClient.rut" @keyup="getClients">
                    </td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchClient.name" @keyup="getClients">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchClient.barcode" @keyup="getClients">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="clientLocal in clients" :key="clientLocal.id">
                    <td width="10px">{{ clientLocal.id }}</td>
                    <td>{{ clientLocal.profession.name }}</td>
                    <td>{{ clientLocal.rut }}</td>
                    <td>{{ clientLocal.name }}</td>
                    <td>{{ clientLocal.email }}</td>
                    <td>{{ clientLocal.address }}</td>
                    <td>{{ clientLocal.phone }}</td>
                    <!--<td>{{ clientLocal.birthdate | moment('L') }}</td>

                    <td v-if="clientLocal.sex == 0">M</td>
                    <td v-if="clientLocal.sex == 1">F</td>

                    <td v-if="clientLocal.civil == 1">Soltero(a)</td>
                    <td v-if="clientLocal.civil == 2">Casado(a)</td>
                    <td v-if="clientLocal.civil == 3">Comprometido(a)</td>
                    <td v-if="clientLocal.civil == 4">Divorciado(a)</td>

                    <td v-if="clientLocal.children == 100">No</td>
                    <td v-else>{{ clientLocal.children }}</td>-->

                    <td>{{ clientLocal.barcode }}</td>
                    <td>{{ clientLocal.score }}</td>
                    <td>
                        <input type="checkbox" class="mt-2" v-model="clientLocal.is_sendmail"
                            @change="canSendMail({ user:clientLocal, send: clientLocal.is_sendmail })">
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-rounded btn-sm"  data-toggle="modal" data-target="#detail"
                                @click.prevent="showClient({ id: clientLocal.id})"
                                title="Detalle">
                                <i class="fas fa-info"></i>
                        </button>
                    
                        <button class="btn btn-warning btn-rounded btn-sm"
                                @click.prevent="editClient({clientLocal})"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Editar">
                                <i class="far fa-edit"></i>
                        </button>
                    
                        <button class="btn btn-danger btn-rounded btn-sm"
                                @click.prevent="deleteClient({ id: clientLocal.id })"
                                data-toggle="tooltip"
                                data-placement="top"
                                
                                title="Eliminar">
                            <i class="fas fa-ban"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageClient({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageClient({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageClient({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageClient({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageClient({page: pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateClientComponent></CreateClientComponent>
        <EditClientComponent></EditClientComponent>
        <DetailClientComponent></DetailClientComponent>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar';
import CreateClientComponent from './CreateClientComponent';
import EditClientComponent from './EditClientComponent';
import DetailClientComponent from './DetailClientComponent';
//import EditProfessionComponent from './EditProfessionComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { CreateClientComponent, EditClientComponent, DetailClientComponent },
    computed:{
        ...mapState(['clients', 'searchClient', 'pagination', 'offset']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getClients','editClient', 'showClient', 'deleteClient', 'canSendMail', 'changePageClient'])
    },
    created(){
        loadProgressBar()
        this.$store.dispatch('getClients', { page: 1 })
    },
}

</script>

<style>

</style>
