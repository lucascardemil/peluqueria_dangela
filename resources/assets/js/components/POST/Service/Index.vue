<template>
    <div class="col-12">
        
            <h2 v-if="selectedClient != null">Cliente: {{ selectedClient.nombre }}</h2>
            <hr>
        
        
            <h2 class="color-primary mt-2">SELECCIONAR CATEGORIA</h2>
        
        <SelectCategory></SelectCategory>
        
            <h2 class="color-primary mt-2">SELECCIONAR SERVICIO</h2>
        
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

