<template>
<div class="row">
    <table class="table table-hover table-bordered mt-3 table-sm bg-primary text-white col-lg-6">
        <tbody>
            <tr>
                <td>
                    Cantidad de usuarios actual
                </td>
                <td class="text-center">
                    {{ countIndex.user.total }}
                </td>
            </tr>
        </tbody>
    </table>

    <table class="table table-hover table-bordered mt-3 table-sm bg-primary text-white col-lg-6">
        <tbody>
            <tr>
                <td>
                    Cantidad de servicios realizados
                </td>
                <td class="text-center">
                    {{ countIndex.service.total }}
                </td>
            </tr>
        </tbody>
    </table>

    <h5 class="mb-0">Los 5 servicios más requeridos por los clientes este mes</h5>
    <table class="table table-hover table-bordered mt-0 table-sm bg-primary text-white col-lg-12">
        <thead>
            <th>Ranking</th>
            <th>Servicio</th>
            <th>Cantidad</th>
        </thead>
        <tbody>
            <tr v-for="(serviceLocal, index) in serviceMonth" :key="serviceLocal.id">
                <td class="text-center">
                    {{ index + 1 }}
                </td>
                <td class="text-center">
                    {{ serviceLocal.name }}
                </td>
                <td class="text-center">
                    {{ serviceLocal.services_count }}
                </td>
            </tr>
        </tbody>
    </table>

    <h5 class="mb-0">Los 5 usuarios que se han realizado más servicios</h5>
    <table class="table table-hover table-bordered mt-0 table-sm bg-primary text-white col-lg-12">
        <thead>
            <th>Ranking</th>
            <th>Rut</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Cantidad</th>
        </thead>
        
        <tbody>
            <tr v-for="(userLocal, index) in userServices" :key="userLocal.id">
                <td class="text-center">
                    {{ index + 1 }}
                </td>
                <td class="text-center">
                    {{ userLocal.rut }}
                </td>
                <td class="text-center">
                    {{ userLocal.name }}
                </td>
                <td class="text-center">
                    {{ userLocal.email }}
                </td>
                <td class="text-center">
                    {{ userLocal.services_count }}
                </td>
            </tr>
        </tbody>
    </table>

</div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    //components: { CreateProfessionComponent, EditProfessionComponent },
    computed:{
        ...mapState(['countIndex','serviceMonth', 'userServices']),
        //...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['countUser', 'countUserService'])
    },
    created(){
        loadProgressBar()
        this.$store.dispatch('countUser')
        this.$store.dispatch('countUserService')
        this.$store.dispatch('showServicesByMonth')
        this.$store.dispatch('showUsersByServices')
    }
}
</script>

<style>

</style>
