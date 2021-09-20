<template>
    <div class="pl-0">
        <v-select v-validate="'required'"
                    :class="{'input': true, 'is-invalid': errors.has('codigo') }"
                    name="codigo"
                    @input="setCode"
                    :options="optionsCode"
                    :value="selectedCode"></v-select>
        <p v-show="errors.has('codigo')" class="text-danger">{{ errors.first('codigo') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsProduct', 'selectedProduct']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setProduct'])
    },
    created(){
        this.$store.dispatch('allProducts')
    }
}
</script>

<style>

</style>
