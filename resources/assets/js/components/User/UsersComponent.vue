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
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th class="text-center">Desactivar bloqueo IP</th>
                    <th class="text-center">Llave de acceso</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchUser.name" @keyup="getUsers">
                    </td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchUser.email" @keyup="getUsers">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="userLocal in users" :key="userLocal.id">
                    <td width="10px">{{ userLocal.id }}</td>
                    <td>{{ userLocal.name }}</td>
                    <td>{{ userLocal.email }}</td>
                    <td v-if="!userLocal.roles.length">No Asignado</td>
                    <td v-else>{{ userLocal.roles[0].name }}</td>
                    <td class="text-center">
                        <input type="checkbox" class="mt-2" v-model="userLocal.is_blockip"
                            @change="canBlockIp({ id :userLocal.id, check: userLocal.is_blockip })">
                    </td>
                    <td class="text-center">{{ userLocal.key }}</td>
                    <td class="text-right">

                        <button class="btn btn-info btn-rounded btn-sm"
                                @click.prevent="generateKey({ id: userLocal.id })"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Generar llave acceso">
                                <i class="fas fa-key"></i>
                        </button>

                        <button class="btn btn-success btn-rounded btn-sm"
                                @click.prevent="resetIp({ id: userLocal.id })"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Resetear ip de sistema">
                                <i class="fas fa-laptop"></i>
                        </button>

                        <button class="btn btn-warning btn-rounded btn-sm"
                                @click.prevent="editUser({userLocal})"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Editar">
                                <i class="far fa-edit"></i>
                        </button>
                    
                        <button class="btn btn-danger btn-rounded btn-sm"
                                @click.prevent="deleteUser({ id: userLocal.id })"
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
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar';
import CreateUserComponent from './CreateUserComponent';
import EditUserComponent from './EditUserComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { CreateUserComponent, EditUserComponent },
    computed:{
        ...mapState(['users', 'searchUser', 'pagination', 'offset']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getUsers','editUser', 'deleteUser', 'changePageUser','generateKey','resetIp','canBlockIp'])
    },
    created(){
        loadProgressBar()
        this.$store.dispatch('getUsers', { page: 1 })
    },
}

</script>

<style>

</style>
