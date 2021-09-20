<template>
    <div>
            <v-select v-validate="'required|min:4'"
                        :class="{'input': true, 'is-invalid': errors.has('sucursal') }"
                        name="sucursal"
                        @input="setSucursal"
                        :options="sucursalsSelect"
                        :value="selectedSucursal"></v-select>
            <p v-show="errors.has('sucursal')" class="text-danger">{{ errors.first('sucursal') }}</p>
        
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed:{
        ...mapState(['sucursalsSelect', 'selectedSucursal']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['setSucursal'])
    },
    created(){
    }
}
</script>

<style>

</style>
