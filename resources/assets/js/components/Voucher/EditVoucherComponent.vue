<template>

    <form action="POST" v-on:submit.prevent="updateVoucher({ id: fillVoucher.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Pagar Voucher</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input required
                                    type="text"
                                    name="nombre"
                                    class="form-control" v-model="fillVoucher.name" 
                                    disabled>
                            
                        </div>

                        <div class="form-group">
                            <label for="nombre">Personal</label>
                            <PersonalService></PersonalService>
                        </div>

                        <div class="form-group">
                            <label for="precio">Precio</label>
                            <input required
                                    
                                    type="number"
                                    name="precio"
                                    class="form-control" v-model="fillVoucher.total" 
                                    >
                            
                        </div>


                        <label for="payment">Medio de pago</label>
                        <SelectPayment></SelectPayment>

                    </div>


                    <div class="modal-footer">
                        <button type="submit" class="btn btn-secondary" :disabled="!completeVoucherEdit">
                            <i class="fas fa-dollar-sign"></i> Pagar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import SelectPayment from '../POST/Payment/Select';
import PersonalService from '../POST/Personal/SelectOne';

export default {
    components: { SelectPayment, PersonalService },
    computed:{
        ...mapState(['fillVoucher', 'errorsLaravel','payments']),
        ...mapGetters(['completeVoucherEdit'])
    },
    methods:{
        ...mapActions(['updateVoucher'])
    }
    ,
    created(){
        this.$store.dispatch('allPayments')
    }
}
</script>
