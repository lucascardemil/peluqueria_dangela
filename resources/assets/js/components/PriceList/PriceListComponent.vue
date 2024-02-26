<template>
    <div>
        <h5>Lista de Precios</h5>
        <input type="text" name="searchInventory" class="form-control my-2" placeholder="Filtrar Producto..." v-model="searchInventory.name" @keyup="getInventories">
        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Código</th>
                    <th>Proveedor</th>
                    <th>Fecha Factura</th>
                    <th>Precio</th>
                    <th>Unidades</th>
                    <th>Precio Promedio</th>
                    <th>Precio Mas Alto</th>
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
                    <td>${{ calcularPromedioPreciosCompra(product) }}</td>
                    <td v-if="calcularPrecioCompraMasAlto(product) !== calcularPromedioPreciosCompra(product)">${{
                        calcularPrecioCompraMasAlto(product) }}</td>
                    <td v-else></td>
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
                    <td></td>
                    <td></td>
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
    </div>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: {},
    computed: {
        ...mapState(['inventories', 'pagination', 'offset', 'searchInventory']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods: {
        ...mapActions(['getInventories', 'getUtilities', 'getFletes', 'changePageinventory']),
        totalUnidades(item) {
            let total = 0;
            for (let i = 0; i < item.inventories.length; i++) {
                if (item.inventories[i].product_id == item.id) {
                    total += parseInt(item.inventories[i].quantity);
                }
            }
            return total;
        },
        calcularPromedioPreciosCompra(item) {
            let sumatoriaPrecios = 0;
            let cantidadProductos = 0;

            if (item.inventories.length > 0) {
                for (let i = 0; i < item.inventories.length; i++) {
                    if (item.inventories[i].product_id === item.id && item.inventories[i].quantity > 0) {
                        sumatoriaPrecios += parseInt(item.inventories[i].price * item.inventories[i].quantity);
                        cantidadProductos += item.inventories[i].quantity;
                    }
                }
            }

            let flete = parseInt(item.flete);
            let utilidad = (parseInt(item.utility) / 100) + 1;


            if (cantidadProductos === 0) {
                return 0;
            }

            let price_total = ((((sumatoriaPrecios / cantidadProductos) * 1.19) * utilidad) + flete)
            let price_round = this.roundedPrice(price_total)

            return price_round;
        },
        calcularPrecioCompraMasAlto(item) {

            let uniquePrices = new Set();
            let flete = parseInt(item.flete);
            let utilidad = (parseInt(item.utility) / 100) + 1;

            if (item.inventories.length > 0) {
                for (let i = 0; i < item.inventories.length; i++) {
                    if (item.inventories[i].product_id == item.id && item.inventories[i].quantity > 0) {
                        uniquePrices.add(item.inventories[i].price);
                    }
                }
            }

            if (uniquePrices.size === 0) {
                return 0;
            }

            const valorMasAlto = Math.max(...[...uniquePrices].map(Number));
            let price_formatted = (((valorMasAlto * 1.19) * utilidad) + flete)

            let price_round = this.roundedPrice(price_formatted)

            return price_round;
        },
        roundedPrice(price) {
            const rounded = Math.ceil(price / 10) * 10;
            return rounded;
        }
    },
    created() {
        loadProgressBar();
        this.$store.dispatch('getInventories', { page: 1 })
        this.$store.dispatch('getUtilities')
        this.$store.dispatch('getFletes')
    }
}

</script>