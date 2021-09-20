<template>
    <div class="pl-0">
        <v-select v-validate="'required'"
                    :class="{'input': true, 'is-invalid': errors.has('plantilla') }"
                    name="plantilla"
                    @input="setTemplate"
                    :options="optionsTemplate"
                    :value="selectedTemplate"></v-select>
        <p v-show="errors.has('plantilla')" class="text-danger">{{ errors.first('plantilla') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsTemplate', 'selectedTemplate']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setTemplate'])
    },
    created(){
        this.$store.dispatch('allTemplates')
    }
}
</script>

<style>

</style>
