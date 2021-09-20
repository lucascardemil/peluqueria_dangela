<template>

    <form>
        <div id="detail" class="modal fade">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 v-if="detailInventory != null">Detalle Código: {{ detailInventory.code.name }}</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div v-if="detailInventory != null" class="mt-1 mb-4">

                            <h5>
                                Producto: {{ detailInventory.product.name }} - {{ detailInventory.product.detail }}
                            </h5>

                            <h5>
                                Marca: {{ detailInventory.brandName }}
                            </h5>

                            <h5>
                                Laboratorio: {{ detailInventory.laboratoryName }}
                            </h5>

                        </div>

                        <div v-if="detailInventory != null">

                            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Precio Neto Compra</th>
                                        <th>Precio Compra + IVA</th>
                                        <th>Precio Neto Venta</th>
                                        <th>Precio Venta + IVA</th>
                                        <th>Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="inventory in detailInventory.inventories" :key="inventory.id">
                                        <td width="10px">{{ inventory.id }}</td>
                                        <td>{{ inventory.price_cost | currency }}</td>
                                        <td>{{ inventory.price_cost * 1.19 | currency }}</td>
                                        <td>{{ inventory.price_sale | currency }}</td>
                                        <td>{{ inventory.price_sale * 1.19 | currency }}</td>
                                        <td>{{ inventory.quantity }}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                    <div class="modal-footer">
                    </div>

                </div>
            </div>
        </div>
    </form>

</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['detailInventory']),
        ...mapGetters([])
    },
    methods:{
        ...mapActions([])
    },
}
</script>
