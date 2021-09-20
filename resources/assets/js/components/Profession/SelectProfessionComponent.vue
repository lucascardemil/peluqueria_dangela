<template>
    <div>

        <v-select v-validate="'required|min:4'"
                    :class="{'input': true, 'is-invalid': errors.has('profesion') }"
                    name="profesion"
                    @input="setProfession"
                    :options="optionsProfession"
                    :value="selectedProfession"></v-select>
        <p v-show="errors.has('profesion')" class="text-danger">{{ errors.first('profesion') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsProfession', 'selectedProfession']),
        ...mapGetters(['getProfession'])
    },
    methods:{
        ...mapActions(['setProfession'])
    },
    created(){
        this.$store.dispatch('allProfessions')
    }
}
</script>

<style>

</style>
