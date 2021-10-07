<template>
<div>
    <div v-show="sucursalShow">
        <SucursalComponent></SucursalComponent>
    </div>
    <div v-show="clientShow">
        <ClientComponent></ClientComponent>
    </div>
    <div v-show="typeServiceShow">
        <TypeServiceComponent></TypeServiceComponent>
    </div>
    <div v-show="promotionShow">
        <PromotionComponent></PromotionComponent>
    </div>
    <div v-show="serviceShow">
        <ServiceComponent></ServiceComponent>
    </div>
    <div v-show="personalShow">
        <PersonalComponent></PersonalComponent>
    </div>
    <!--<div v-show="personalServicesShow">
        <PersonalServicesComponent></PersonalServicesComponent>
    </div>
    -->
    <div class="row" v-show="finalShow">
        <div class="col-6">
            <button class="btn btn-danger btn-block btn-lg pt-3 pb-3" @click="deleteServicepost">
                <i class="far fa-trash-alt"></i> Eliminar
            </button>
        </div>
        <div class="col-12 mt-4 mb-4">
            <table  class="table table-hover table-striped table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>
                            <h3>Servicio</h3>
                        </th>
                        <th>
                            <h3>Valor</h3>
                        </th>
                        <th>
                            <h3>Personal</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="servicepostLocal in listServiceposts" :key="servicepostLocal.id">
                        <td><h3>{{ servicepostLocal.nombre }}</h3></td>
                        <td><h3>$ {{ servicepostLocal.precio }}</h3></td>
                        <td>
                            <h3>
                                <span  v-for="personalLocal in servicepostLocal.personal" :key="personalLocal.id">
                                    {{ personalLocal.label }} |
                                </span>
                            </h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-12" v-show="finalShow">
            <label for="pago"><h3>*Método de Pago</h3></label>
            <SelectPayment></SelectPayment>
        </div>
        <hr>
    
        <div class="col-12 my-3" v-show="finalShow">
            <table  class="table table-hover table-striped table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>
                            <h3>Sucursal</h3>
                        </th>
                        <th>
                            <h3>Cliente</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h3>{{ selectedSucursal.name }}</h3></td>
                        <td v-if="selectedClient != null"><h3>{{ selectedClient.nombre }}</h3></td>

                    </tr>
                    <tr>
                        <td></td>
                        <td><h3>Total: $ {{ totalPost }}</h3></td>
                    </tr>
                </tbody>
            </table>
        
            <!-- <h3>Total Servicios: {{ (totalPost*100)/(100-descuento) }}</h3>

        
            <h3>Descuentos Aplicados: {{ descuento }} %</h3> -->
        
            
        </div>
        
        <!-- <div class="col-12" v-show="finalShow">
            <button :disabled="!completeVoucher"
                    class="btn btn-block btn-success btn-lg pt-4 pb-4" @click="showModalConfirm">
                <h2><i class="fas fa-file-alt"></i> CONFIRMAR SERVICIOS</h2>
            </button>
        </div> -->
        <div v-if="selectedTypeService.name=='SERVICE'" class="col-lg-3 col-md-6 col-sm-12" v-show="finalShow">
            <button class="btn btn-block btn-info btn-lg" @click="showServicePanel">
                <i class="fas fa-arrow-left"></i> Atras
            </button>
        </div>
        <div v-else class="col-lg-3 col-md-6 col-sm-12" v-show="finalShow">
            <button class="btn btn-block btn-info btn-lg" @click="showPromotionPanel">
                <i class="fas fa-arrow-left"></i> Atras
            </button>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-6" v-show="finalShow">
            <button class="btn btn-block btn-success btn-lg" @click="createVoucher">
                Pagar
            </button>
        </div>

        <div class="col-lg-12 text-center mt-5" v-show="codeVoucher">
            <h1>Código Voucher: {{ idVoucher }}</h1>
        </div>

        <div class="col-lg-12 col-sm-12 mt-5" v-show="codeVoucher">
            <button class="btn btn-block btn-info btn-lg pt-4 pb-4" @click="resetVoucher">
                <i class="fas fa-file-alt"></i> Generar Nuevo Voucher
            </button>
        </div>
    </div>

    <ModalConfirm></ModalConfirm>
</div>
</template>

<script>

import SucursalComponent from '../Sucursal/Index'
import ClientComponent from '../Client/Index'
import TypeServiceComponent from '../TypeService/Index'
import PromotionComponent from '../Promotion/Index'
import ServiceComponent from '../Service/Index'
import PersonalComponent from '../Personal/Index'
import ModalConfirm from '../Voucher/Confirm'
import SelectPayment from '../Payment/Select'
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { SucursalComponent, ClientComponent, TypeServiceComponent, PromotionComponent, ServiceComponent,
                PersonalComponent, ModalConfirm, SelectPayment },
    computed:{
        ...mapState(['sucursalShow', 'clientShow', 'typeServiceShow', 'promotionShow', 'serviceShow', 'personalShow', 'finalShow',
                    'listServiceposts', 'selectedSucursal', 'selectedClient','selectedTypeService',
                    'totalPost','descuento', 'idVoucher', 'codeVoucher']),
        ...mapGetters(['completeVoucher'])
    },
    methods:{
        ...mapActions(['deleteServicepost', 'showServicePanel','showPromotionPanel', 'showModalConfirm', 'resetVoucher','createVoucher'])
    },
    created(){
        loadProgressBar()
    }
}
</script>

<style>
    .dropbdown-menu{
        font-size: 32px !important;
    }
</style>
