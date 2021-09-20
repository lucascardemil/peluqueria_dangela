<!--<template>
    <div class="col-12 row">
        <div class="col-lg-12 col-md-12 col-sm-12 pl-0 pr-0">
            <v-select v-validate="'required|min:4'"
                        :class="{'input': true, 'is-invalid': errors.has('promocion') }"
                        name="promocion"
                        @input="setPromotion"
                        :options="optionsPromotion"
                        :value="selectedPromotion"
                        ></v-select>
            <p v-show="errors.has('promocion')" class="text-danger">{{ errors.first('promocion') }}</p>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['optionsPromotion', 'selectedPromotion']),
        ...mapGetters(['getPromotion'])
    },
    methods:{
        ...mapActions(['setPromotion'])
    },
    created(){
        this.$store.dispatch('allPromotions')
    }
}
</script>

<style>

</style>
-->