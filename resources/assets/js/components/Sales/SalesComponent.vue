<template>
    <div>
        <h5>Ventas</h5>
        <ul class="nav nav-pills">
            <li class="nav-item mr-1">
                <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#generate_sales"
                    title="Agregar">
                    <i class="fas fa-plus-circle"></i> Generar Ventas
                </a>
            </li>
            <li class="nav-item mr-1">
                <a class="btn btn-success pull-right btn-sm" data-toggle="collapse" href="#before_sales" role="button"
                    aria-expanded="false" aria-controls="before_sales">
                    <i class="far fa-calendar-alt"></i> Ventas anteriores
                </a>
            </li>
        </ul>

        <div class="row mt-3">
            <div class="collapse col-2" id="before_sales">
                <Datepicker valueType="format" :inline="true" v-model="calendar.search" />
                <div class="row">
                    <div class="col-6 pr-0">
                        <button class="btn btn-success btn-block" style="border-radius: 0;"
                            @click.prevent="allSales({ page: 1, calendar: calendar.search })"><i
                                class="fas fa-search"></i></button>
                    </div>
                    <div class="col-6 pl-0">
                        <button class="btn btn-danger btn-block" style="border-radius: 0;"
                            @click.prevent="allSales({ page: 1, calendar: calendar.search = 'undefined' })"><i
                                class="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-10">
                <table class="table table-hover table-striped table-sm bg-primary text-white">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Forma de Pago</th>
                            <th>Cantidad</th>
                            <th>Neto</th>
                            <th>Total</th>
                            <th>Fecha</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody v-for="sale in sales" :key="sale.id">
                        <tr data-toggle="collapse" aria-expanded="false" :aria-controls="'#sale' + sale.id"
                            :data-target="'#sale' + sale.id">
                            <td style="width: 25%"></td>
                            <td style="width: 10%"></td>
                            <td></td>
                            <td></td>
                            <td>${{ sale.total }}</td>
                            <td>{{ sale.created_at }}</td>
                            <td>
                                <a href="#" class="btn btn-success btn-sm" @click.prevent="generateReceipt({ id: sale.id })"
                                    role="button">
                                    <i class="fas fa-receipt"></i> Recibo
                                </a>

                                <a href="#" class="btn btn-danger btn-sm" @click.prevent="modalDeleteSale({ id: sale.id })"
                                    role="button" data-toggle="modal" data-target="#delete_sale" title="Eliminar">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </td>
                        </tr>
                        <tr v-for="product_sale in sale.product_sales" :key="product_sale.id" :id="'sale' + sale.id"
                            class="collapse">
                            <td style="width: 25%">{{ product_sale.product.name }}</td>
                            <td style="width: 10%">{{ sale.payment.name }}</td>
                            <td>{{ product_sale.quantity }}</td>
                            <td>${{ product_sale.neto }}</td>
                            <td>${{ product_sale.total }}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-10">
                        <nav>
                            <ul class="pagination">
                                <li class="page-item" v-if="pagination.current_page > 1">
                                    <a class="page-link" href="#" @click.prevent="changePageSales({ page: 1 })">
                                        <span>Primera</span>
                                    </a>
                                </li>

                                <li class="page-item" v-if="pagination.current_page > 1">
                                    <a class="page-link" href="#"
                                        @click.prevent="changePageSales({ page: pagination.current_page - 1 })">
                                        <span>Atrás</span>
                                    </a>
                                </li>

                                <li class="page-item" v-for="page in pagesNumber"
                                    v-bind:class="[page == isActived ? 'active' : '']" :key="page">
                                    <a class="page-link" href="#" @click.prevent="changePageSales({ page })">
                                        {{ page }}
                                    </a>
                                </li>

                                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                                    <a class="page-link" href="#"
                                        @click.prevent="changePageSales({ page: pagination.current_page + 1 })">
                                        <span>Siguiente</span>
                                    </a>
                                </li>

                                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                                    <a class="page-link" href="#"
                                        @click.prevent="changePageSales({ page: pagination.last_page })">
                                        <span>Última</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-success btn-block btn-sm" @click.prevent="boxClosureZ()"><i
                                class="fas fa-file-invoice-dollar"></i> Cierre de caja Z</button>
                    </div>
                </div>
            </div>
        </div>
        <CreateSaleComponent></CreateSaleComponent>
        <DeleteSaleComponent></DeleteSaleComponent>
    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'
import CreateSaleComponent from './CreateSaleComponent'
import DeleteSaleComponent from './DeleteSaleComponent'
import Datepicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/es';

export default {
    components: { CreateSaleComponent, DeleteSaleComponent, Datepicker },
    computed: {
        ...mapState(['sales', 'calendar', 'pagination', 'offset', 'searchProduct']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods: {
        ...mapActions(['allSales', 'changePageSales', 'generateReceipt', 'modalDeleteSale', 'boxClosureZ'])
    },
    created() {
        loadProgressBar();
        this.$store.dispatch('allSales', { page: 1 })
    }
}

</script>
<style>
.mx-calendar {
    width: 100%;
}
</style>