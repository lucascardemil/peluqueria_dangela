<template>
    <div>

        <v-select v-validate="'required|min:4'"
                    :class="{'input': true, 'is-invalid': errors.has('empresa') }"
                    name="empresa"
                    @input="setCompany"
                    :options="options"
                    :value="selectedItem"></v-select>
        <p v-show="errors.has('empresa')" class="text-danger">{{ errors.first('empresa') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['options', 'selectedItem']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setCompany'])
    },
    created(){
        this.$store.dispatch('allCompanies')
    }
}
</script>

<style>

</style>
