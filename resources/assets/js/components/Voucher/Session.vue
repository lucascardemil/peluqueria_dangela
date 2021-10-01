<template>
    <div>
        <form action="POST" v-on:submit.prevent="addToCart">
            <div class="form-row align-items-center">
                <div class="col-4">
                    <label for="">Sucursal*</label>
                    <SelectSucursal></SelectSucursal>
                </div>

                <div class="col-4">
                    <label for="">Clientes*</label>
                    <select-user></select-user>
                </div>

                <div class="col-4">
                    <label for="">Selecciona Categoría*</label>
                    <SelectIsSession></SelectIsSession>
                </div>
            </div>
            <div class="form-row align-items-center">
                <div class="col-6">
                    <label for="">Selecciona Servicio*</label>
                    <SelectService></SelectService>
                </div>

                <div class="col-2">
                    <label for="">Cantidad*</label>
                    <input
                        :class="{'input': true, 'is-invalid': errors.has('cantidad') }"
                        type="number"
                        name="cantidad"
                        class="form-control" v-model="newVoucherSession.quantity">
                </div>

                <div class="col-2">
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

                <div class="col-2">
                    <label>Seleccionar Personal</label>
                    <PersonalService></PersonalService>
                </div>
            </div>
            <div class="row justify-content-end">
                <!-- <div class="col-4">
                    <label>Seleccionar Método de Pago</label>
                    <Payment></Payment>
                </div> -->
                <div class="col-4 mt-2">
                    <button  :disabled="!newVoucherSession.price" type="submit" class="btn btn-info form-control">Agregar</button>
                </div>
            </div>
        </form>
        <div class="row">
            <div class="col-lg-12">
                <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Servicio</th>
                            <th>Cantidad</th>
                            <th>Valor Sesion</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(session, index) in cart" :key="session.service_name">
                            <td>{{index + 1}}</td>
                            <td>{{session.service_name}}</td>
                            <td>{{session.quantity}}</td>
                            <td>{{session.service_price}}</td>
                            <td>
                                <!-- <div class="col-lg-5 mt-1"> -->
                                <a 
                                    href="#" 
                                    class="btn btn-danger btn-sm"
                                    @click.prevent="removeFromCart({ id: session.service_name })"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Eliminar"
                                >
                                    <i class="fas fa-ban"></i>
                                </a>
                                <!-- </div> -->
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th>Total:</th>
                            <td>{{ cartTotal }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-4">
                <a href="#" :disabled="cartTotal===0" class="btn btn-primary form-control btn-sm" v-on:click="createVoucherSession">Generar Vouchers</a>
            </div>
        </div>
        <hr>
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
        ...mapState(['sucursals','vouchers', 'newVoucherSession', 'cart','cartTotal']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['createVoucherSession', 'addToCart', 'removeFromCart'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('allSucursals')
        //this.$store.dispatch('getVouchers', { page: 1 })
    }
}
</script>
