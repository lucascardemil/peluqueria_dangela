<template>
    <div>
        <hr> 
        <h2 class="color-primary">SELECCIONAR CLIENTE</h2>
        <div class="row"> 
            <div class="col-lg-6 col-md-12 col-sm-12 mb-4">
                <v-select v-validate="'required|min:2'"
                            :class="{'input': true, 'is-invalid': errors.has('cliente') }"
                            class="selectPost"
                            name="cliente"
                            @input="setClient"
                            :options="clients"
                            :value="selectedClient"></v-select>
                <p v-show="errors.has('cliente')" class="text-danger">{{ errors.first('cliente') }}</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
                <a href="#" class="btn btn-block btn-primary" @click="showTypeServicePanel">
                    SELECCIONAR
                </a>
            </div>
        </div>

       
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['clients', 'selectedClient']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['setClient', 'showTypeServicePanel'])
    },
    created(){
        this.$store.dispatch('allClients')
    }
}
</script>

