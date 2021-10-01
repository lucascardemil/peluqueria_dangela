<template>
    <div>
            <v-select v-validate="'required|min:4'"
                        :class="{'input': true, 'is-invalid': errors.has('categoria') }"
                        name="categoria"
                        @input="setCategoryPos"
                        :options="optionsIsSession"
                        :value="selectedCategory"></v-select>
            <p v-show="errors.has('categoria')" class="text-danger">{{ errors.first('categoria') }}</p>
        
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed:{
        ...mapState(['optionsIsSession', 'selectedCategory']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setCategoryPos'])
    },
    created(){
        this.$store.dispatch('allIsSession')
    }
}
</script>

<style>

</style>
