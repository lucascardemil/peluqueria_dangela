<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 border border-primary pt-3 pb-3 rounded">
                <h4 class="text-left text-primary">Buscar Usuario</h4>
                <form class="form-inline my-3">
                    <div class="form-group">
                        <label class="sr-only" for="inlineFormInput">Rut</label>
                        <input type="text" class="form-control form-control-sm mb-2 mr-sm-2 mb-sm-0" placeholder="Rut"
                            v-model="searchUser.rut" @keyup="getSearchUsers">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="inlineFormInput">Nombre</label>
                        <input type="text" class="form-control form-control-sm mb-2 mr-sm-2 mb-sm-0" placeholder="Nombre"
                            v-model="searchUser.name" @keyup="getSearchUsers">
                    </div>
                </form>


                <table class="table table-hover table-striped table-sm bg-primary text-white">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Puntaje Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ users.name }}</td>
                            <td>{{ users.score }}</td>
                        </tr>
                    </tbody>
                </table>

                <button class="btn btn-info btn-sm" @click="getUserServices({ id: users.id })">
                    Detalle y Disponibilidad de Servicios <i class="fas fa-arrow-right"></i>
                </button>

                <h4 class="mt-5 text-primary">Servicios Compatibles con tu puntaje</h4>

                <table class="table table-hover table-striped table-sm bg-info text-white">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Puntaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(userAvaibleLocal, index) in userScoreServices" :key="userAvaibleLocal.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ userAvaibleLocal.name }}</td>
                            <td>{{ userAvaibleLocal.score_exchange }}</td>
                        </tr>
                    </tbody>
                </table>

                <!--panel de administración de servicios y puntos para el usuario-->

                <form class="">
                    <span for="personal">Buscar Personal</span>
                    <select-personal></select-personal>

                    <span for="servicio">Buscar Servicio</span>
                    <select-service></select-service>

                    <button type="button" class="btn btn-info mt-1"
                        @click="showService({ id: selectedItem.value })">Seleccionar</button>
                </form>

                <table class="table table-hover table-striped mt-5 table-sm bg-info text-white" v-show="getService.name">
                    <thead>
                        <tr>
                            <th>Puntaje Cliente</th>
                            <th>Puntaje para Canjear</th>
                            <th>Puntaje que Acumulas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ users.score }}</td>
                            <td>{{ getService.score_exchange }}</td>
                            <td>{{ getService.score_accumulated }}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="mt-3" v-show="getService.name">

                    <div v-show="getService.score_exchange">
                        <p class="text-danger" v-if="getService.score_exchange > users.score">
                            El valor de puntaje excede al puntaje actual del usuario
                        </p>

                        <p class="text-success" v-else>
                            Puntaje válido, puede canjear el servicio
                        </p>

                        <button class="btn btn-info" data-toggle="modal" data-target="#exchange"
                            :disabled="getService.score_exchange > users.score">Canjear</button>
                        <button class="btn btn-info" data-toggle="modal" data-target="#accumulated"
                            :disabled="getService.score_accumulated === null">Acumular</button>
                    </div>

                </div>
            </div>

            <exchange-service></exchange-service>
            <accumulated-service></accumulated-service>



            <div class="col-lg-6 border border-primary pt-3 pb-3 rounded">
                <detail-user></detail-user>
            </div>
        </div>
    </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'
import { cleanRut } from '../../utils/rutUtils';
export default {
    computed: {
        ...mapState(['users', 'userServices', 'userScoreServices', 'searchUser', 'pagination', 'offset', 'selectedItem']),
        ...mapGetters(['isActived', 'pagesNumber', 'getService'])
    },
    watch: {
        'searchUser.rut': function (newValue) {
            this.searchUser.rut = this.cleanRut(newValue);
        },
    },
    methods: {
        ...mapActions(['getSearchUsers', 'showService', 'getUserServices']),
        cleanRut,
    },
    created() {
        loadProgressBar();
    }
}
</script>
