<template>
    <div>
            <v-select v-validate="'required|min:4'"
                        :class="{'input': true, 'is-invalid': errors.has('pago') }"
                        name="pago"
                        @input="setPayment"
                        :options="payments"
                        :value="selectedPayment"></v-select>
            <p v-show="errors.has('pago')" class="text-danger">{{ errors.first('pago') }}</p>
        
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed:{
        ...mapState(['payments', 'selectedPayment']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['setPayment'])
    },
    created(){
        this.$store.dispatch('allPayments')
    }
}
</script>

<style>

</style>
