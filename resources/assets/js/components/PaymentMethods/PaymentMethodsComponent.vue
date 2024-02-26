<template>
    <div>
        <h5>Formas de Pago</h5>
        <ul class="nav nav-pills">
            <li class="nav-item mr-1">
                <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create_payment_methods"
                    title="Agregar">
                    <i class="fas fa-plus-circle"></i> Crear Forma de Pagos
                </a>
            </li>
            <!-- <li class="nav-item mr-1">
                <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create_discount"
                    title="Agregar">
                    <i class="fas fa-plus-circle"></i> Descuento
                </a>
            </li> -->
        </ul>
        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>Forma de Pago</th>
                    <th>Utilidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="payment in payments" :key="payment.id">
                    <td>{{ payment.name }}</td>
                    <td>{{ payment.utility }}%</td>
                    <td>
                        <a href="#" class="btn btn-warning pull-right btn-sm" data-toggle="modal"
                            data-target="#edit_payment" title="Editar"
                            @click.prevent="editPayment({ payment, page: pagination.current_page })">
                            <i class="far fa-edit"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePagePayment({ page: 1 })">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePagePayment({ page: pagination.current_page - 1 })">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active' : '']"
                    :key="page">
                    <a class="page-link" href="#" @click.prevent="changePagePayment({ page })">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePagePayment({ page: pagination.current_page + 1 })">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePagePayment({ page: pagination.last_page })">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreatePaymentMethodsComponent></CreatePaymentMethodsComponent>
        <!-- <CreateDiscountsComponent></CreateDiscountsComponent> -->
        <EditPaymentMethodsComponent></EditPaymentMethodsComponent>
    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import CreatePaymentMethodsComponent from './CreatePaymentMethodsComponent'
import CreateDiscountsComponent from './CreateDiscountsComponent'
import EditPaymentMethodsComponent from './EditPaymentMethodsComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { CreatePaymentMethodsComponent, CreateDiscountsComponent, EditPaymentMethodsComponent },
    computed: {
        ...mapState(['payments', 'pagination', 'offset', 'searchProduct']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods: {
        ...mapActions(['getPayments', 'editPayment', 'changePagePayment'])
    },
    created() {
        loadProgressBar();
        this.$store.dispatch('getPayments', { page: 1 })
    }
}

</script>