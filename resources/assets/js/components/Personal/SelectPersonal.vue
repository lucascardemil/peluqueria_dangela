<template>
    <div>

        <v-select multiple v-validate="'required|min:4'"
                    :class="{'input': true, 'is-invalid': errors.has('personal') }"
                    name="personal"
                    @input="setPersonal"
                    :options="optionsPersonal"
                    :value="selectedPersonal"></v-select>
        <p v-show="errors.has('personal')" class="text-danger">{{ errors.first('personal') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsPersonal', 'selectedPersonal']),
        ...mapGetters(['getItemPersonal'])
    },
    methods:{
        ...mapActions(['setPersonal'])
    },
    created(){
        this.$store.dispatch('allPersonals')
    }
}
</script>

<style>

</style>
