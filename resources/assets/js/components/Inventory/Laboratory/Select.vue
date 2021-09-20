<template>
    <div class="pl-0">
        <v-select v-validate="'required'"
                    :class="{'input': true, 'is-invalid': errors.has('laboratorio') }"
                    name="laboratorio"
                    @input="setLaboratory"
                    :options="optionsLaboratory"
                    :value="selectedLaboratory"></v-select>
        <p v-show="errors.has('laboratorio')" class="text-danger">{{ errors.first('laboratorio') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsLaboratory', 'selectedLaboratory']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setLaboratory'])
    },
    created(){
        this.$store.dispatch('allLaboratories')
    }
}
</script>

<style>

</style>
