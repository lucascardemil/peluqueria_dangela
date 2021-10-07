<template>
    <div class="col-12">
        
            <v-select v-validate="'required|min:4'"
                        :class="{'input': true, 'is-invalid': errors.has('promocion') }"
                        name="promocion"
                        @input="setPromotionPos"
                        :options="optionsPromotion"
                        :value="selectedPromotion"
                        ></v-select>
            <p v-show="errors.has('promocion')" class="text-danger">{{ errors.first('promocion') }}</p>
        
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
        ...mapActions(['setPromotionPos'])
    },
    created(){
        this.$store.dispatch('allPromotions')
    }
}
</script>

<style>

</style>
