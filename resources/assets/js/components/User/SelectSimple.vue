<template>
    <div>
            <v-select v-validate="'required|min:2'"
                        :class="{'input': true, 'is-invalid': errors.has('cliente') }"
                        name="cliente"
                        @input="setClient"
                        :options="clients"
                        :value="selectedClient"></v-select>
            <p v-show="errors.has('cliente')" class="text-danger">{{ errors.first('cliente') }}</p>
       
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['clients', 'selectedClient','selectedTypeService']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['setClient', 'showServicePanel'])
    },
    created(){
        this.$store.dispatch('allClients')
    }
}
</script>
