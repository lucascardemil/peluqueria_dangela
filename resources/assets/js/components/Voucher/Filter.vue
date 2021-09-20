<template>
    <div class="row">

        <div class="col-12 row mb-4">
            <div class="col-6">
                <label>Seleccionar Personal</label>
                <PersonalService></PersonalService>
            </div>
        </div>

        <div class="col-4">
            <h5>Día</h5>
            <datepicker
                placeholder="Seleccionar Día"
                :inline="true"
                v-model="fecha.diaSeleccionado">
            </datepicker>

            <div class="row mt-2">
                <div class="col-lg-6 col-md-6 col-sm-12" v-for="sucursalLocal in sucursals" :key="sucursalLocal.id">
                    <button class="btn btn-primary" @click="selectedDate({ format: 'day', id: sucursalLocal.id })">
                        {{ sucursalLocal.name }}
                    </button>
                </div>
            </div>

        </div>

        <div class="col-4">
            <h5>Mes</h5>
            <datepicker
                placeholder="Seleccionar Mes"
                :inline="true"
                :minimumView="'month'"
                :maximumView="'month'"
                v-model="fecha.mesSeleccionado">
            </datepicker>

            <div class="row mt-2">
                <div class="col-lg-6 col-md-6 col-sm-12" v-for="sucursalLocal in sucursals" :key="sucursalLocal.id">
                    <button class="btn btn-primary" @click="selectedDate({ format: 'month', id: sucursalLocal.id })">
                        {{ sucursalLocal.name }}
                    </button>
                </div>
            </div>

        </div>

        <div class="col-4">
            <h5>Año</h5>
            <datepicker
                placeholder="Seleccionar Año"
                :inline="true"
                :minimumView="'year'"
                :maximumView="'year'"
                v-model="fecha.anioSeleccionado">
            </datepicker>

            <div class="row mt-2">
                <div class="col-lg-6 col-md-6 col-sm-12" v-for="sucursalLocal in sucursals" :key="sucursalLocal.id">
                    <button class="btn btn-primary" @click="selectedDate({ format: 'year', id: sucursalLocal.id })">
                        {{ sucursalLocal.name }}
                    </button>
                </div>
            </div>

        </div>

        <div class="col-12 mt-4">
            <h4>Neto: {{ filtroVoucher.totalNeto | currency }}</h4>

            <h4>IVA: {{ filtroVoucher.iva | currency }}</h4>

            <h4>Total: {{ filtroVoucher.total | currency }}</h4>
        </div>

        <div class="col-12" v-show="serviciosPersonal.length > 0">

            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Personal</th>
                        <th>Servicio</th>
                        <th>Valor</th>
                        <th>Descuento</th>
                        <th>Valor Final</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="servicioLocal in serviciosPersonal" :key="servicioLocal.id">
                        <td>{{ servicioLocal.id }}</td>
                        <td>{{ servicioLocal.personal }}</td>
                        <td>{{ servicioLocal.name }}</td>
                        <td>{{ servicioLocal.price*100/(100-servicioLocal.descuento) | currency }}</td>
                        <td>{{ servicioLocal.descuento }}</td>
                        <td>{{ servicioLocal.price | currency }}</td>
                        <td>{{ servicioLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                    </tr>
                </tbody>
            </table>

        </div>

        <!--<div class="col-12" v-show="vouchers.length > 0">

            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Pago</th>
                        <th>Total</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="voucherLocal in vouchers" :key="voucherLocal.id">
                        <td>{{ voucherLocal.id }}</td>
                        <td>{{ voucherLocal.name }}</td>
                        <td>{{ voucherLocal.payment }}</td>
                        <td>{{ voucherLocal.total }}</td>
                        <td>{{ voucherLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                    </tr>
                </tbody>
            </table>

        </div>-->



    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import Datepicker from 'vuejs-datepicker'
import { mapState, mapActions, mapGetters } from 'vuex'
import PersonalService from '../POST/Personal/SelectOne'

export default {
    components: { Datepicker, PersonalService },
    computed:{
        ...mapState(['vouchersFilter', 'sucursals', 'serviciosPersonal', 'filtroVoucher', 'fecha']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions(['selectedDate'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('allSucursals')
        //this.$store.dispatch('getVouchers', { page: 1 })
    }
}

</script>
