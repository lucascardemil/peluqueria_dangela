<template>
    <div class="pl-0">
        <v-select v-validate="'required'"
                    :class="{'input': true, 'is-invalid': errors.has('marca') }"
                    name="marca"
                    @input="setBrand"
                    :options="optionsBrand"
                    :value="selectedBrand"></v-select>
        <p v-show="errors.has('marca')" class="text-danger">{{ errors.first('marca') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsBrand', 'selectedBrand']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setBrand'])
    },
    created(){
        this.$store.dispatch('allBrands')
    }
}
</script>

<style>

</style>
