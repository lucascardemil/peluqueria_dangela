<template>
    <div>
        <v-select v-validate="'required|min:4'"
                    :class="{'input': true, 'is-invalid': errors.has('servicio') }"
                    name="servicio"
                    @input="setServicepromotion"
                    :options="optionsService"
                    :value="selectedServicepromotions"
                    ></v-select>
        <p v-show="errors.has('servicio')" class="text-danger">{{ errors.first('servicio') }}</p>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsService', 'selectedServicepromotions']),
        ...mapGetters(['getItem'])
    },
    methods:{
        ...mapActions(['setServicepromotion'])
    }
}
</script>

<style>

</style>
