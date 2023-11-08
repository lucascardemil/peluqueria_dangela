<template>
    <div>
        <button class="btn btn-block btn-primary btn-lg" @click="allClients">
            <i class="fas fa-user"></i> Actualizar Clientes
        </button>

        <selectClient></selectClient>
    </div>
</template>

<script>

import selectClient from '../../Client/Select'
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { selectClient },
    computed: {
        ...mapState(['sucursalShow', 'clientShow', 'typeServiceShow']),
        ...mapGetters([])
    },
    methods: {
        ...mapActions(['showSucursalPanel', 'allClients', 'showTypeServicePanel'])
    },
    created() {
        loadProgressBar()
    }
}
</script>

<style></style>
