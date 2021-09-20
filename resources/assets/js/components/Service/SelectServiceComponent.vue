<template>
    <div>
        <v-select v-validate="'required|min:4'"
                    :class="{'input': true, 'is-invalid': errors.has('servicio') }"
                    name="servicio"
                    @input="setService"
                    :options="options"
                    :value="selectedItem"></v-select>
        <p v-show="errors.has('servicio')" class="text-danger">{{ errors.first('servicio') }}</p>
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
        ...mapActions(['setService'])
    },
    created(){
        this.$store.dispatch('allServices')
    }
}
</script>

<style>

</style>
