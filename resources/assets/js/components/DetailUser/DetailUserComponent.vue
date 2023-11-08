<template>
    <div>
        <div class="mb-3">
            <p class="mb-0">Nombre: <b>{{ users.name }}</b></p>
            <p class="mb-0">Rut: <b>{{ users.rut }}</b></p>
            <p class="mb-0">Correo: <b>{{ users.email }}</b></p>
            <p class="mb-0">Dirección: <b>{{ users.city }}</b></p>
            <p class="mb-0">Teléfono: <b>{{ users.phone }}</b></p>
            <p class="mb-0">Profesión: <b>{{ users.profession.name }}</b></p>
        </div>

        <div>
            <table class="table table-hover table-striped mt-3 table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Servicio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="service in getUserService" :key="service.id">
                        <td width="10px">{{ service.id }}</td>
                        <td>{{ service.name }}</td>
                        <td>{{ service.contador }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState(['users']),
        ...mapGetters(['getUserService'])
    },
    methods: {
        //...mapActions(['showUser'])
    },
    created() {
        loadProgressBar()
    }
}
</script>

<style></style>
