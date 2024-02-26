<template>
    <div id="edit_inventory" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>Gestión de Inventario</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="accordion">
                        <div class="card">
                            <div class="card-header p-4" id="headingOne">
                                <h5 class="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Nuevo Inventario <i class="fas fa-arrows-alt-v"></i>
                                </h5>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                data-parent="#accordion">
                                <div class="card-body">
                                    <form action="POST" v-on:submit.prevent="createInventory">
                                        <div class="form-group">
                                            <label for="price">Precio</label>
                                            <input v-validate="'required'"
                                                :class="{ 'input': true, 'is-invalid': errors.has('price') || errorsLaravel.errors?.price }"
                                                type="number" name="price" class="form-control"
                                                v-model="newInventory.price">
                                            <p v-show="errors.has('price')" class="text-danger">{{ errors.first('price')
                                            }}</p>
                                            <div v-for="(errorss, index) in errorsLaravel" class="text-danger" :key="index">
                                                <p v-for="error in errorss.price" :key="error">{{ error }}</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="quantity">Cantidad</label>
                                            <input v-validate="'required'"
                                                :class="{ 'input': true, 'is-invalid': errors.has('quantity') || errorsLaravel.errors?.quantity }"
                                                type="number" name="quantity" class="form-control"
                                                v-model="newInventory.quantity">
                                            <p v-show="errors.has('quantity')" class="text-danger">{{
                                                errors.first('quantity')
                                            }}</p>
                                            <div v-for="(errorss, index) in errorsLaravel" class="text-danger" :key="index">
                                                <p v-for="error in errorss.quantity" :key="error">{{ error }}</p>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-success" :disabled="!completeInventoryCreate">
                                            <i class="fas fa-plus-square"></i> Guardar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table class="table table-hover table-striped mt-3 bg-primary text-white">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="inventory in inventories" :key="inventory.id">
                                <td>{{ inventory.id }}</td>
                                <td>${{ inventory.price }}</td>
                                <td>{{ inventory.quantity }}</td>
                                <td>${{ inventory.price * inventory.quantity}}</td>
                                <td>
                                    <a href="#" class="btn btn-danger pull-right btn-sm" data-toggle="modal"
                                        data-target="#delete" title="Eliminar" @click.prevent="deleteInventory({ id: inventory.id })">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['newInventory', 'errorsLaravel', 'inventories']),
        ...mapGetters(['completeInventoryCreate'])
    },
    watch: {
        'newInventory.price': function () {
            delete this.$store.state.errorsLaravel.errors?.price
        },
        'newInventory.quantity': function () {
            delete this.$store.state.errorsLaravel.errors?.quantity
        },
    },
    methods: {
        ...mapActions(['createInventory', 'deleteInventory'])
    },
}
</script>