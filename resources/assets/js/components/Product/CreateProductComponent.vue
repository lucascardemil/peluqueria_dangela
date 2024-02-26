<template>
    <form action="POST" v-on:submit.prevent="createProduct">
        <div id="create" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Nuevo Producto</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Nombre*</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('name') || errorsLaravel.errors?.name }"
                                type="text" name="name" class="form-control" v-model="newProduct.name">
                            <p v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</p>
                            <div v-for="(errorss, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errorss.name" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="code">Codigo*</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('code') || errorsLaravel.errors?.code }"
                                type="text" name="code" class="form-control" v-model="newProduct.code">
                            <p v-show="errors.has('code')" class="text-danger">{{ errors.first('code') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.code" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="supplier">Proveedor</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('supplier') || errorsLaravel.errors?.supplier }"
                                type="text" name="supplier" class="form-control" v-model="newProduct.supplier">
                            <p v-show="errors.has('supplier')" class="text-danger">{{ errors.first('supplier') }}</p>

                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.supplier">{{ error.supplier }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="detail">Detalle</label>
                            <textarea name="detail" class="form-control" rows="10" v-model="newProduct.detail"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeProductCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['newProduct', 'errorsLaravel']),
        ...mapGetters(['completeProductCreate'])
    },
    watch: {
        'newProduct.name': function () {
            delete this.$store.state.errorsLaravel.errors?.name
        },
        'newProduct.code': function () {
            delete this.$store.state.errorsLaravel.errors?.code
        },
        'newProduct.supplier': function () {
            delete this.$store.state.errorsLaravel.errors?.supplier
        },
    },
    methods: {
        ...mapActions(['createProduct'])
    },
}
</script>