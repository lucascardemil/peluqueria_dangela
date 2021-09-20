<template>
    <div class="pl-0">
        <v-select v-validate="'required'"
                    :class="{'input': true, 'is-invalid': errors.has('producto') }"
                    name="producto"
                    @input="setProduct"
                    :options="optionsProduct"
                    :value="selectedProduct"></v-select>
        <p v-show="errors.has('producto')" class="text-danger">{{ errors.first('producto') }}</p>
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
