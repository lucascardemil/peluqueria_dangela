<template>
    <div id="generate_sales" class="modal fade modal-fullscreen">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>Nueva Venta</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="POST" v-on:submit.prevent="addCart">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">Producto*</label>
                                    <SelectProductComponent></SelectProductComponent>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="code">Codigo*</label>
                                    <input v-validate="'required|min:4|max:190'"
                                        type="text" name="code" class="form-control" v-model="newSale.code">
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-end">
                            <div class="col">
                                <div class="form-group">
                                    <label for="quantity">Cantidad</label>
                                    <input v-validate="'required'"
                                        type="text" name="quantity" class="form-control" v-model="newSale.quantity"
                                        @keyup="sumQuantity">
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="price_sale">Precio Venta</label>
                                    <input v-validate="'required'"
                                        type="text" name="price_sale" class="form-control" v-model="newSale.price_sale"
                                        disabled>
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success" :disabled="!newSale.price_sale">
                                        <i class="fas fa-plus-square"></i> Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Valor Neto</th>
                                <th>Valor Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in cart" :key="product.id">
                                <td>{{ product.name }}</td>
                                <td>{{ product.quantity }}</td>
                                <td>${{ product.totalNeto }}</td>
                                <td>${{ product.total }}</td>
                                <td>
                                    <a href="#" class="btn btn-danger btn-sm"
                                        @click.prevent="removeCart({ id: product.id })" data-toggle="tooltip"
                                        data-placement="top" title="Eliminar">
                                        <i class="fas fa-ban"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>${{ cartNeto }}</td>
                                <td>${{ cartTotal }}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <th>Forma de Pago:</th>
                                <td>
                                    <SelectPaymentComponent></SelectPaymentComponent>
                                </td>
                                <td></td>
                            </tr>
                            <!-- <tr>
                                <td></td>
                                <td></td>
                                <th>Descuento:</th>
                                <td>{{ aplicardescuento }}%</td>
                                <td>
                                    <a href="#" class="btn btn-danger btn-sm" @click.prevent="removeDescuento()"
                                        data-toggle="tooltip" data-placement="top" title="Eliminar">
                                        <i class="fas fa-ban"></i>
                                    </a>
                                </td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <!-- <button :disabled="cartValue === 0 || newDescuento.contar_descuentos === 0"
                        v-on:click="aplicarDescuento" class="col-lg-2 btn btn-success form-control"><i
                            class="fas fa-tags"></i> Aplicar
                        Descuento</button> -->
                    <button :disabled="cartNeto === 0" v-on:click="createSale"
                        class="col-lg-1 btn btn-success form-control"><i class="fas fa-check"></i> Venta</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import SelectProductComponent from '../Product/SelectProductComponent'
import SelectPaymentComponent from '../POST/Payment/Select'
export default {
    components: { SelectProductComponent, SelectPaymentComponent },
    computed: {
        ...mapState(['newSale', 'errorsLaravel', 'cart', 'cartNeto', 'cartTotal', 'selectedPayment']),
        ...mapGetters(['completeProductCreate'])
    },
    watch: {
        'newSale.name': function () {
            delete this.$store.state.errorsLaravel.errors?.name
        },
        'newSale.code': function () {
            delete this.$store.state.errorsLaravel.errors?.code
        },
        'newSale.quantity': function () {
            delete this.$store.state.errorsLaravel.errors?.quantity
        },
    },
    methods: {
        ...mapActions(['addCart', 'sumQuantity', 'removeCart', 'createSale'])
    },
}
</script>