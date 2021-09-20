<template>
    <div class="pl-0">
        <v-select v-validate="'required'"
                    :class="{'input': true, 'is-invalid': errors.has('unidad') }"
                    name="unidad"
                    @input="setUnit"
                    :options="optionsUnit"
                    :value="selectedUnit"></v-select>
        <p v-show="errors.has('unidad')" class="text-danger">{{ errors.first('unidad') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsUnit', 'selectedUnit']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setUnit'])
    },
    created(){
        this.$store.dispatch('allUnits')
    }
}
</script>

<style>

</style>
