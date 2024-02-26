<template>
    <div>
        <h5>
            Inventario
            <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#upload_invoice"
                title="Cargar">
                <i class="fas fa-plus-circle"></i>
            </a>
        </h5>
        <input type="text" name="searchInventory" class="form-control my-2" placeholder="Filtrar Producto..." v-model="searchInventory.name" @keyup="getInventories">
        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Codigo</th>
                    <th>Proveedor</th>
                    <th>Fecha Factura</th>
                    <th>Precio</th>
                    <th>Unidades</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody v-for="product in inventories" :key="product.id">
                <tr class="accordion-toggle" data-toggle="collapse" :data-target="'#product' + product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.code }}</td>
                    <td>{{ product.supplier }}</td>
                    <td></td>
                    <td></td>
                    <td>{{ totalUnidades(product) }}</td>
                    <td :class="getCellColor(product)">${{ totalPrecio(product) }}</td>
                </tr>
                <tr v-for="inventory in product.inventories" :key="inventory.id" :id="'product' + inventory.product_id" class="accordian-body collapse">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td v-if="inventory.fecha_fact != null">{{ inventory.fecha_fact }}</td>
                    <td v-else></td>
                    <td>${{ inventory.price }}</td>
                    <td>{{ inventory.quantity }}</td>
                    <td>${{ totalInventario(inventory) }}</td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageinventory({ page: 1 })">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageinventory({ page: pagination.current_page - 1 })">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber" v-bind:class="[page == isActived ? 'active' : '']"
                    :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageinventory({ page })">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageinventory({ page: pagination.current_page + 1 })">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageinventory({ page: pagination.last_page })">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <UploadInvoiceComponent></UploadInvoiceComponent>
    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import UploadInvoiceComponent from './UploadInvoiceComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { UploadInvoiceComponent },
    computed: {
        ...mapState(['inventories', 'pagination', 'offset', 'searchInventory']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods: {
        ...mapActions(['getInventories', 'getUtilities', 'getFletes', 'changePageinventory']),
        totalInventario(item) {
            return item.price * item.quantity
        },
        totalUnidades(item) {
            let total = 0
            for (let i = 0; i < item.inventories.length; i++) {
                if (item.inventories[i].product_id == item.id) {
                    total += parseInt(item.inventories[i].quantity)
                }
            }
            return total
        },
        totalPrecio(item) {
            let total = 0

            for (let i = 0; i < item.inventories.length; i++) {
                if (item.inventories[i].product_id == item.id) {
                    total += parseInt(item.inventories[i].price * item.inventories[i].quantity)
                }
            }

            return total
        },
        getCellColor(item) {
            let uniquePrices = new Set();

            if (item.inventories.length > 1) {
                for (let i = 0; i < item.inventories.length; i++) {
                    if (item.inventories[i].product_id == item.id) {
                        uniquePrices.add(item.inventories[i].price);
                    }
                }

                if (uniquePrices.size === 1) {
                    return 'even-cell-color';
                } else {
                    return 'odd-cell-color';
                }
            }
        },
    },
    created() {
        loadProgressBar();
        this.$store.dispatch('getInventories', { page: 1 })
        this.$store.dispatch('getUtilities')
        this.$store.dispatch('getFletes')
    }
}

</script>
<style>
.even-cell-color {
    background-color: green;
}

.odd-cell-color {
    background-color: red;
}
</style>