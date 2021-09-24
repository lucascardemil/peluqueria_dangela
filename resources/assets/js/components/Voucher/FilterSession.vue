<template>
    <div class="row">

        <div class="col-lg-6 offset-3">
            <label>Seleccionar Cliente</label>    
            <select-user></select-user>
        </div>
        <div class="col-lg-6 offset-3 mt-4">
            <button class="btn btn-primary btn-block form-control"
                    @click.prevent="getVouchersImpagos()"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Buscar">
                    <i class="fas fa-search"></i>
            </button>
        </div>

        <div class="col-12" >
            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pago</th>
                    <!--<th>Descuento</th>-->
                        <th>Fecha</th>
                        <th>Servicio</th>
                        <th>Total</th>
                        <th>Personal</th>
                        <th>PAGAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="voucherLocal in vouchers" :key="voucherLocal.id">
                        <td >{{ voucherLocal.id }}</td>
                        <td v-if="voucherLocal.payment == null">No pagado</td>
                        <td v-else>{{ voucherLocal.payment }}</td>
                    <!--<td>{{ voucherLocal.descuento }}</td>-->
                        <td>{{ voucherLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                        <td>{{ voucherLocal.service }}</td>
                        <td>{{ voucherLocal.total }}</td>
                        <td>{{ voucherLocal.personal }}</td>
                        
                        <td>
                            <button class="btn btn-secondary btn-rounded"
                                    @click.prevent="editVoucher({voucherLocal})"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Pagar">
                                    <i class="fas fa-dollar-sign"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <EditVoucherComponent></EditVoucherComponent>

    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

import EditVoucherComponent from './EditVoucherComponent'

export default {
    components: { EditVoucherComponent},
    computed:{
        ...mapState(['data','vouchers','newVoucherSession']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['getVouchersImpagos','editVoucher'])
    },
    created(){
        loadProgressBar();
    }
}

</script>
