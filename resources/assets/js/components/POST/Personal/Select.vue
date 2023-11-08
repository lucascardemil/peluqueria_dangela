<template>
    <div>
        <v-select v-validate="'required|min:4'" :class="{ 'input': true, 'is-invalid': errors.has('personal') }"
            name="personal" @input="setPersonalpost" :options="personalposts" :value="selectedPersonalposts"
            multiple></v-select>
        <p v-show="errors.has('personal')" class="text-danger">{{ errors.first('personal') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['personalposts', 'selectedPersonalposts']),
        ...mapGetters(['getPersonalpost'])
    },
    methods: {
        ...mapActions(['setPersonalpost'])
    },
    created() {
        this.$store.dispatch('allPersonalposts')
    }
}
</script>

<style></style>
