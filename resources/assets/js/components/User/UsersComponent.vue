<template>

    <div class="">

        <h5 class="text-header">
            Nuevo Usuario
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
                    <th>&nbsp;</th>
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
                                v-model="searchUser.rut" @keyup="getUsers">
                    </td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchUser.name" @keyup="getUsers">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <!--<td></td>
                    <td></td>
                    <td></td>
                    <td></td>-->
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchUser.barcode" @keyup="getUsers">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="userLocal in users" :key="userLocal.id">
                    <td width="10px">{{ userLocal.id }}</td>
                    <td>{{ userLocal.profession.name }}</td>
                    <td>{{ userLocal.rut }}</td>
                    <td>{{ userLocal.name }}</td>
                    <td>{{ userLocal.email }}</td>
                    <td>{{ userLocal.address }}</td>
                    <td>{{ userLocal.phone }}</td>
                    <!--<td>{{ userLocal.birthdate | moment('L') }}</td>

                    <td v-if="userLocal.sex == 0">M</td>
                    <td v-if="userLocal.sex == 1">F</td>

                    <td v-if="userLocal.civil == 1">Soltero(a)</td>
                    <td v-if="userLocal.civil == 2">Casado(a)</td>
                    <td v-if="userLocal.civil == 3">Comprometido(a)</td>
                    <td v-if="userLocal.civil == 4">Divorciado(a)</td>

                    <td v-if="userLocal.children == 100">No</td>
                    <td v-else>{{ userLocal.children }}</td>-->

                    <td>{{ userLocal.barcode }}</td>
                    <td>{{ userLocal.score }}</td>
                    <td>
                        <input type="checkbox" class="mt-2" v-model="userLocal.is_sendmail"
                            @change="canSendMail({ user:userLocal, send: userLocal.is_sendmail })">
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-rounded btn-sm"  data-toggle="modal" data-target="#detail"
                                @click.prevent="showUser({ id: userLocal.id})"
                                title="Detalle">
                                <i class="fas fa-info"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-warning btn-rounded btn-sm"
                                @click.prevent="editUser({userLocal})"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Editar">
                                <i class="far fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-rounded btn-sm"
                                @click.prevent="deleteUser({ id: userLocal.id })"
                                data-toggle="tooltip"
                                data-placement="top"
                                :disabled="true"
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
                    <a class="page-link" href="#" @click.prevent="changePageUser({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageUser({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageUser({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageUser({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageUser({page: pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreateUserComponent></CreateUserComponent>
        <EditUserComponent></EditUserComponent>
        <DetailUserComponent></DetailUserComponent>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar';
import CreateUserComponent from './CreateUserComponent';
import EditUserComponent from './EditUserComponent';
import DetailUserComponent from './DetailUserComponent';
//import EditProfessionComponent from './EditProfessionComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { CreateUserComponent, EditUserComponent, DetailUserComponent },
    computed:{
        ...mapState(['users', 'searchUser', 'pagination', 'offset']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getUsers','editUser', 'showUser', 'deleteUser', 'canSendMail', 'changePageUser'])
    },
    created(){
        loadProgressBar()
        //this.$store.dispatch('allProfessions'),
        this.$store.dispatch('getUsers', { page: 1 })
    },
}

</script>

<style>

</style>
