<template>
    <div id="detail" class="modal fade">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h6>Detalle Usuario</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-2">
                    <div class="row">
                        <div class="col">
                            <img v-if="getUser.image !== null" :src="getUser.image" alt="Imagen del Cliente" class="img-thumbnail">
                            <p v-else>No tiene ninguna imagen</p>
                        </div>
                        <div class="col">
                            <div class="card">
                                <ul class="list-group list-group-flush detail-user">
                                    <li class="list-group-item">
                                        <h5 class="card-title">Nombre</h5>
                                        {{ getUser.name }}
                                    </li>
                                    <li class="list-group-item">
                                        <h5 class="card-title">Rut</h5>
                                        {{ getUser.rut }}
                                    </li>
                                    <li class="list-group-item" v-if="userSucursal === false">
                                        <h5 class="card-title">Correo Electrónico</h5>
                                        {{ getUser.email }}
                                    </li>
                                    <li class="list-group-item">
                                        <h5 class="card-title">Dirección</h5>
                                        {{ getUser.city }}
                                    </li>
                                    <li class="list-group-item" v-if="userSucursal === false">
                                        <h5 class="card-title">Teléfono</h5>
                                        {{ getUser.phone }}
                                    </li>
                                    <li class="list-group-item">
                                        <h5 class="card-title">Fecha de Nacimiento</h5>
                                        {{ getUser.birthdate }}
                                    </li>
                                    <li class="list-group-item">
                                        <h5 class="card-title">Sexo</h5>
                                        <div v-if="getUser.sex == 1">Masculino</div>
                                        <div v-if="getUser.sex == 2">Femenino</div>
                                    </li>
                                    <li class="list-group-item">
                                        <h5 class="card-title">Convenio con Empresa</h5>
                                        <div v-if="getUser.is_convenio">Si</div>
                                        <div v-else>No</div>
                                    </li>
                                    <li class="list-group-item">
                                        <h5 class="card-title">Puntaje</h5>
                                        {{ getUser.score }}
                                    </li>
                                    <li class="list-group-item">
                                        <h5 class="card-title">Llave de acceso</h5>
                                        {{ getUser.key }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        //...mapState(['users', 'userServices', 'searchUser', 'pagination', 'offset', 'selectedItem']),
        ...mapGetters(['getUser'])
    },
    methods: {
        //...mapActions(['getUser'])
    },
    created() {
        loadProgressBar();
    }
}
</script>

