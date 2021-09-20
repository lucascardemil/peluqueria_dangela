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

<style>
.v-select .selected-tag {
    height: auto; 
    line-height: 1.42857143;
    font-size: 1em;
}

.v-select input[type=search] {
    height: auto;
}

.v-select .dropdown-toggle .clear {
    font-size: 23px;
}

.v-select .open-indicator {
    bottom: auto; 
    right: auto;
    height: auto;
}

.v-select .open-indicator, .v-select .open-indicator:before {
    width: 10px;
}
</style>
