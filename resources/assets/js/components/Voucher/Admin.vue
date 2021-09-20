<template>

    <div>
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
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="100px">
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchVoucher.id" @keyup="getVouchers({page: 1})">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr v-for="voucherLocal in vouchers" :key="voucherLocal.id">
                    <td>{{ voucherLocal.id }}</td>
                    <td>{{ voucherLocal.name }}</td>
                    <td>{{ voucherLocal.payment }}</td>
                    <td>{{ voucherLocal.total }}</td>
                    <td>{{ voucherLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                    <!--<td width="10px">
                        <a href="#" class="btn btn-warning btn-sm"
                            @click.prevent="editVoucher( { voucherLocal } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar">
                            <i class="far fa-edit"></i>
                        </a>
                    </td>-->
                    <td width="20px">
                        <a href="#" class="btn btn-danger btn-sm"
                            @click.prevent="showModalDeleteVoucher( { id: voucherLocal.id } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Eliminar">
                            <i class="fas fa-ban"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageVoucher({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageVoucher({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageVoucher({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageVoucher({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageVoucher({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <Delete></Delete>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar'
import Delete from './Delete'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { Delete },
    computed:{
        ...mapState(['vouchers', 'searchVoucher', 'pagination', 'offset']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getVouchers', 'showModalDeleteVoucher', 'changePageVoucher'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getVouchers', { page: 1 })
    }
}

</script>

<style>

</style>
