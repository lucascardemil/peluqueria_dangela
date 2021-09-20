<template>
    <div class="pl-0">
        <v-select v-validate="'required|min:4'"
                    :class="{'input': true, 'is-invalid': errors.has('categoria') }"
                    name="categoria"
                    @input="setCategory"
                    :options="optionsCategory"
                    :value="selectedCategory"></v-select>
        <p v-show="errors.has('categoria')" class="text-danger">{{ errors.first('categoria') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsCategory', 'selectedCategory']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setCategory'])
    },
    created(){
        this.$store.dispatch('allCategories')
    }
}
</script>

<style>

</style>
