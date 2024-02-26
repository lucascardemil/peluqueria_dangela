<template>
    <div>
        <v-select v-validate="'required'" :class="{ 'input': true, 'is-invalid': errors.has('product') }"
            name="product" @input="setProduct" :options="optionsProduct" :value="selectedProduct"></v-select>
        <p v-show="errors.has('product')" class="text-danger">{{ errors.first('product') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['optionsProduct', 'selectedProduct']),
        ...mapGetters(['getItemProduct'])
    },
    methods: {
        ...mapActions(['setProduct'])
    },
    created() {
        this.$store.dispatch('allProducts')
    }
}
</script>