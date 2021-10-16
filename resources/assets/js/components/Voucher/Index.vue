<template>
    <div class="row">
        <div class="col-lg-6 offset-3">
            <label for="codigo">*Código</label>
            <input v-validate="'min:4|max:190'"
                    type="text"
                    name="codigo"
                    class="form-control"
                    v-model="searchVoucher.id">
        </div>
        <div class="col-lg-6 offset-3 mt-4">
            <button class="btn btn-lg btn-primary btn-block" @click="showVoucherButton">
                <i class="fas fa-search"></i> Buscar
            </button>
        </div>

        <div class="col-lg-6 offset-3 mt-4" v-if="voucher != null">
            <h4>Nombre: {{ voucher.voucher.name }}</h4>
            <h4>Pago: {{ voucher.voucher.payment }}</h4>
            <h4>Fecha: {{ voucher.voucher.created_at | moment('DD/MM/YYYY HH:mm:ss') }}</h4>
            <button class="btn btn-info btn-lg" @click="boleta({ id: voucher.voucher.id })" target="_blank">
                <i class="fas fa-file"></i> Boleta
            </button>

            <button class="btn btn-danger btn-lg" @click="boletaPdf({ id: voucher.voucher.id })">
                <i class="fas fa-file-pdf"></i> PDF
            </button>
        </div>

        <div class="col-lg-12 mt-4">
            <button class="btn btn-lg btn-secondary" @click="getVouchers({ page: 1 })">
                <i class="fas fa-hourglass-half"></i> Actualizar
            </button>

            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Pago</th>
                        <th>Total</th>
                        <th>Fecha</th>
                        <th>Boleta</th>
                        <th>PDF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="voucherLocal in vouchers" :key="voucherLocal.id">
                        
                        <td width="10px">{{ voucherLocal.id }}</td>
                        <td>{{ voucherLocal.name }}</td>
                        <td>{{ voucherLocal.payment }}</td>
                        <td>{{ voucherLocal.total | currency('$', '.', { thousandsSeparator: '.' }) }}</td>
                        <td>{{ voucherLocal.created_at |  moment('DD/MM/YYYY HH:mm:ss') }}</td>
                        <td width="100">
                            <a href="#" class="btn btn-info btn-sm" @click="boleta({ id: voucherLocal.id })" target="_blank">
                                <i class="fas fa-file"></i> Boleta
                            </a>
                        </td>
                        <td width="100">
                            <a href="#" class="btn btn-danger btn-sm" @click="boletaPdf({ id: voucherLocal.id })">
                                <i class="fas fa-file-pdf"></i> PDF
                            </a>
                        </td>
                    
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-lg-6 mt-4">
            <button class="btn btn-lg btn-warning btn-block pt-3 pb-3" @click="cajaZ({ id: 1 })">
                <i class="fas fa-archive"></i> CAJA Z EL LLANO
            </button>
        </div>

        <div class="col-lg-6 mt-4">
            <button class="btn btn-lg btn-warning btn-block pt-3 pb-3" @click="cajaZ({ id: 2 })">
                <i class="fas fa-archive"></i> CAJA Z LA CANTERA
            </button>
        </div>

        <div class="col-lg-6 mt-4">
            <button class="btn btn-lg btn-danger btn-block pt-3 pb-3" @click="listaVoucher({ id: 1 })">
                <i class="fas fa-archive"></i> LISTA VOUCHER EL LLANO (PDF)
            </button>
        </div>

        <div class="col-lg-6 mt-4">
            <button class="btn btn-lg btn-danger btn-block pt-3 pb-3" @click="listaVoucher({ id: 2 })">
                <i class="fas fa-archive"></i> LISTA VOUCHER LA CANTERA (PDF)
            </button>
        </div>

        <div class="col-lg-12 mt-4" v-if="cajaServices">
            <h4>
                Total: {{ totalCajaZ | currency('$', '.', { thousandsSeparator: '.' }) }}
            </h4>

            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Servicio</th>
                        <th>Precio Servicio</th>
                        <th>Descuento</th>
                        <th>Precio Final</th>
                        
                        <th>Fecha</th>
                        <th>Personal</th>
                    </tr>
                </thead>
                <tbody v-for="serviceLocal in cajaServices" :key="serviceLocal.id">
           
                    <tr v-for="servicepostsLocal in serviceLocal.serviceposts" :key="servicepostsLocal.id">
                        <td>{{ servicepostsLocal.id }}</td>
                        <td>{{ servicepostsLocal.service.name }}</td>
                        <td>{{ servicepostsLocal.service.price | currency('$', '.', { thousandsSeparator: '.' }) }}</td>
                        <td>
                            <span v-if="servicepostsLocal.is_promotion > 0">
                                {{ parseFloat(servicepostsLocal.descuento).toFixed(2) }}%
                            </span>
                            <span v-else>
                                {{ servicepostsLocal.descuento }}%
                            </span>
                        </td>
                        <td>{{ servicepostsLocal.price | currency('$', '.', { thousandsSeparator: '.' }) }}</td>
                        
                        <td>{{ servicepostsLocal.service.created_at |  moment('DD/MM/YYYY HH:mm:ss') }}</td>
                        <td>
                            <span v-for="personalpostsLocal in servicepostsLocal.personalposts" :key="personalpostsLocal.id">
                                {{ personalpostsLocal.personal.name }} -
                            </span>
                        </td>
                    </tr>
                     
                </tbody>
            </table>
        </div>


        <!--Esta sección puede ser agregada con posterioridad según requerimientos de la empresa-->
        <!--<div class="col-lg-12 mt-4" v-if="totalPersonalServices">
            <h4>
                Total Personal  {{ new Date() | moment("DD/MM/YYYY") }}
            </h4>

            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Total</th>
                        <th>Ver Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="personalTotal in totalPersonalServices" :key="personalTotal.id">
                        <td width="10px">{{ personalTotal.id }}</td>
                        <td>{{ personalTotal.name }}</td>
                        <td>{{ personalTotal.total | currency('$', 0, { thousandsSeparator: '.' }) }}</td>
                        <td width="100">
                            <button class="btn btn-outline-info btn-sm"
                                @click="detailPersonalVoucher({ id: personalTotal.id, name: personalTotal.name })">
                                <i class="fas fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>-->

        <!--<div class="col-lg-12 mt-4" v-if="detailPersonalServices">
            <h4>
                Detalle Personal {{ detailPersonalName }}
            </h4>

            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Servicio</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="detailPersonal in detailPersonalServices" :key="detailPersonal.id">
                        <td width="10px">{{ detailPersonal.id }}</td>
                        <td>{{ detailPersonal.name }}</td>
                        <td>{{ detailPersonal.price | currency('$', 0, { thousandsSeparator: '.' }) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>-->

        <div class="col-12">
            <filter-voucher-component></filter-voucher-component>
        </div>


        <!--<pre>
            {{ data || JSON }}
        </pre>-->

        <!--<pre>
            {{ cajaZData || JSON }}
        </pre>-->

    </div>
</template>

<script>

    import { loadProgressBar } from 'axios-progress-bar'
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        components: {},
        computed:{
            ...mapState(['vouchers', 'searchVoucher', 'pagination', 'offset', 'voucher',
                        'cajaZData', 'cajaServices', 'clientposts' , 'totalCajaZ', 'totalPersonalServices',
                        'detailPersonalServices', 'detailPersonalName', 'data']),
            ...mapGetters(['isActived', 'pagesNumber'])
        },
        methods:{
            ...mapActions(['showVoucherButton', 'getVouchers', 'boleta', 'boletaPdf', 'cajaZ', 'listaVoucher',
                    'totalVoucherPersonal', 'detailPersonalVoucher'])
        },
        created(){
            loadProgressBar()
            this.$store.dispatch('getVouchers', { page: 1 })
            //this.$store.dispatch('totalVoucherPersonal')
        }
    }
</script>

<style>

</style>
