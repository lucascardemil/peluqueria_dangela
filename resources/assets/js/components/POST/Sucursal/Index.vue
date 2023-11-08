<template>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 mb-4 pr-0" v-for="sucursalLocal in sucursals" :key="sucursalLocal.id">
            <button class="btn btn-block btn-lg btn-primary pt-5 pb-5" @click="addSucursal({ sucursal: sucursalLocal })">
                <i class="far fa-building" style="font-size:48px"></i> <h2>{{ sucursalLocal.name }}</h2>
            </button>
        </div>
    </div>
</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed:{
        ...mapState(['sucursals']),
    },
    methods:{
        ...mapActions(['showClientPanel', 'addSucursal'])
    },
    created(){
        this.$store.dispatch('allSucursals')
    }
}
</script>

<style>

</style>
