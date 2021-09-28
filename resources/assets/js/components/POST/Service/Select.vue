<template>
    <div>
        
            <v-select v-validate="'required|min:4'"
                        :class="{'input': true, 'is-invalid': errors.has('servicio') }"
                        name="servicio"
                        @input="setServicepost"
                        :options="serviceposts"
                        :value="selectedServiceposts"
                        ></v-select>
            <p v-show="errors.has('servicio')" class="text-danger">{{ errors.first('servicio') }}</p>
        
        <!--<div class="col-lg-3 col-md-12 col-sm-12 pr-0">
            <button id="boton-servicio-post" class="btn btn-block btn-primary btn-lg boton-grande" @click="addService">
                AGREGAR
            </button>
        </div>-->
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['serviceposts', 'selectedServiceposts']),
        ...mapGetters(['getServicepost'])
    },
    methods:{
        ...mapActions(['setServicepost', 'addService'])
    },
    created(){
        this.$store.dispatch('allServiceposts')
    }
}
</script>

