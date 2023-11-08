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
                    <th>Puntaje</th>
                    <th>Enviar Correo</th>
                    <th class="text-center">Desactivar bloqueo IP</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm" v-model="searchClient.rut"
                            @keyup="getClients">
                    </td>
                    <td>
                        <input type="text" class="form-control form-control-sm" v-model="searchClient.name"
                            @keyup="getClients">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="clientLocal in clients" :key="clientLocal.id">
                    <td width="10px">{{ clientLocal.id }}</td>
                    <td>{{ clientLocal.profession.name }}</td>
                    <td>{{ clientLocal.rut }}</td>
                    <td>{{ clientLocal.name }}</td>
                    <td v-if="userSucursal === false">{{ clientLocal.email }}</td>
                    <td v-else>No tiene permiso</td>
                    <td>{{ clientLocal.city }}</td>
                    <td v-if="userSucursal === false">{{ clientLocal.phone }}</td>
                    <td v-else>No tiene permiso</td>
                    <td>{{ clientLocal.score }}</td>
                    <td>
                        <input type="checkbox" class="mt-2" v-model="clientLocal.is_sendmail"
                            @change="canSendMail({ user: clientLocal, send: clientLocal.is_sendmail })">
                    </td>
                    <td class="text-center">
                        <input type="checkbox" class="mt-2" v-model="clientLocal.is_blockip"
                            @change="canBlockIp({ id: clientLocal.id, check: clientLocal.is_blockip })">
                    </td>
                    <td>
                        <button class="btn btn-secondary btn-rounded btn-sm" data-toggle="modal" data-target="#detail"
                            @click.prevent="showClient({ id: clientLocal.id })" title="Detalle">
                            <i class="fas fa-info"></i>
                        </button>

                        <button class="btn btn-info btn-rounded btn-sm" @click.prevent="generateKey({ id: clientLocal.id })"
                            data-toggle="tooltip" data-placement="top" title="Generar llave acceso">
                            <i class="fas fa-key"></i>
                        </button>

                        <button class="btn btn-success btn-rounded btn-sm" @click.prevent="resetIp({ id: clientLocal.id })"
                            data-toggle="tooltip" data-placement="top" title="Resetear ip de sistema">
                            <i class="fas fa-laptop"></i>
                        </button>

                        <button class="btn btn-warning btn-rounded btn-sm" @click.prevent="editClient({ clientLocal })"
                            data-toggle="tooltip" data-placement="top" title="Editar">
                            <i class="far fa-edit"></i>
                        </button>

                        <button class="btn btn-danger btn-rounded btn-sm"
                            @click.prevent="deleteClient({ id: clientLocal.id })" data-toggle="tooltip" data-placement="top"
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
                    <a class="page-link" href="#" @click.prevent="changePageClient({ page: 1 })">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageClient({ page: pagination.current_page - 1 })">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active' : '']"
                    :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageClient({ page })">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageClient({ page: pagination.current_page + 1 })">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageClient({ page: pagination.last_page })">
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
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { CreateClientComponent, EditClientComponent, DetailClientComponent },
    computed: {
        ...mapState(['clients', 'searchClient', 'pagination', 'offset', 'userSucursal']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods: {
        ...mapActions(['getClients', 'editClient', 'showClient', 'deleteClient', 'canSendMail', 'changePageClient', 'generateKey', 'resetIp', 'canBlockIp']),
    },
    created() {
        loadProgressBar()
        this.$store.dispatch('getClients', { page: 1 })
    }
}

</script>

<style></style>
