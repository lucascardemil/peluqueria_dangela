<template>
    <div>
        <div class="row">

            <div class="col-4 form-group">
                <label for="">Sucursal*</label>
                <SelectSucursal></SelectSucursal>
            </div>

            <div class="col-4 form-group">
                <label for="">Clientes*</label>
                <select-user></select-user>
            </div>

            <div class="col-4 form-group">
                <label for="">Selecciona Categoría*</label>
                <SelectIsSession></SelectIsSession>
            </div>

            <div class="col-5 form-group">
                <label for="">Selecciona Servicio*</label>
                <SelectService></SelectService>
            </div>

            <div class="col-1 form-group">
                <label for="">Cantidad*</label>
                <input
                    :class="{'input': true, 'is-invalid': errors.has('cantidad') }"
                    type="number"
                    name="cantidad"
                    class="form-control" v-model="newVoucherSession.quantity">
            </div>

            <div class="col-1 form-group">
                <label for="">Valor Sesión*</label>
                <input
                    :class="{'input': true, 'is-invalid': errors.has('valor') }"
                    type="number"
                    name="valor"
                    class="form-control" v-model="newVoucherSession.price">
            </div>

            <!-- <div class="col-4">
                <label for="">Detalle de los vouchers*</label>
                <input v-validate="'min:4|max:190'"
                    :class="{'input': true, 'is-invalid': errors.has('adicional') }"
                    type="text"
                    name="adicional"
                    class="form-control" v-model="newVoucherSession.aditional">
            </div> -->

            <div class="col-2 form-group">
                <label>Seleccionar Personal</label>
                <PersonalService></PersonalService>
            </div>

            <!-- <div class="col-4">
                <label>Seleccionar Método de Pago</label>
                <Payment></Payment>
            </div> -->

            <div class="col form-group">
                <label style="color:transparent">.</label>
                <a href="#" class="btn btn-primary form-control btn-sm"
                    @click="createVoucherSession()">Generar Vouchers</a>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center">
                <br>
                <h1>Seguimiento de las Sesiones</h1>
            </div>
            <div class="col-12">
                <filter-session-component></filter-session-component>
            </div>


        </div>
    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapGetters, mapActions } from 'vuex'
import SelectSucursal from '../POST/Sucursal/Select'
import PersonalService from '../POST/Personal/SelectOne'
// import SelectCategory from '../Category/SelectCategoryPos'
import SelectIsSession from '../Category/SelectIsSession'
import SelectService from '../POST/Service/Select'
import Payment from '../POST/Payment/Select'

export default {
    components: { SelectSucursal, PersonalService, SelectIsSession, SelectService, Payment },
    computed:{
        ...mapState(['sucursals','vouchers', 'newVoucherSession']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['createVoucherSession'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('allSucursals')
        //this.$store.dispatch('getVouchers', { page: 1 })
    }
}
</script>
