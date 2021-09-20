<template>
    <div class="row col-12">
        <div class="col-12">
            <h2 v-if="selectedClient != null">Cliente: {{ selectedClient.nombre }}</h2>
        </div>
        <div class="col-12">
            <h1 class="color-primary mt-2">SELECCIONAR CATEGORIA</h1>
        </div>
        <SelectCategory></SelectCategory>
        <div class="col-12">
            <h1 class="color-primary mt-2">SELECCIONAR SERVICIO</h1>
        </div>
        <SelectService></SelectService>
    </div>
</template>

<script>

import SelectService from './Select'
import SelectCategory from '../../Category/SelectCategoryPos'
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { SelectService, SelectCategory },
    computed:{
        ...mapState(['selectedClient']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions([])
    },
    created(){
        loadProgressBar()
    }
}
</script>

<style>

</style>

