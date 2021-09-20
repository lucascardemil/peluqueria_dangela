<template>
    <div class="">
        <div class="mb-3">
            <p class="mb-0">Nombre: <b>{{ getUser.name }}</b></p>
            <p class="mb-0">Rut: <b>{{ getUser.rut }}</b></p>
            <p class="mb-0">Correo: <b>{{ getUser.email }}</b></p>
            <p class="mb-0">Dirección: <b>{{ getUser.address }}</b></p>
            <p class="mb-0">Teléfono: <b>{{ getUser.phone }}</b></p>
            <p class="mb-0">Profesión: <b>{{ getUser.profession.name }}</b></p>
        </div>

        <div class="">
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
    computed:{
        //...mapState(['user']),
        ...mapGetters(['getUser', 'getUserService'])
    },
    methods:{
        //...mapActions(['showUser'])
    },
    created(){
        loadProgressBar()
    }
}
</script>

<style>

</style>
