<template>
    <form action="POST" v-on:submit.prevent="updateProduct({ page: current_page })">
        <div id="edit_product" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Producto</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Nombre*</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('name') || errorsLaravel.errors?.name }"
                                type="text" name="name" class="form-control" v-model="fillProduct.name">
                            <p v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</p>
                            <div v-for="(errorss, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errorss.name" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="code">Codigo*</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('code') || errorsLaravel.errors?.code }"
                                type="text" name="code" class="form-control" v-model="fillProduct.code">
                            <p v-show="errors.has('code')" class="text-danger">{{ errors.first('code') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.code" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="utility">Utilidad</label>
                            <input v-validate="'min:0'"
                                :class="{ 'input': true, 'is-invalid': errors.has('utility') || errorsLaravel.errors?.utility }"
                                type="text" name="utility" class="form-control" v-model="fillProduct.utility">
                            <p v-show="errors.has('utility')" class="text-danger">{{ errors.first('utility') }}</p>

                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.utility">{{ error.utility }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="flete">Flete</label>
                            <input v-validate="'min:0'"
                                :class="{ 'input': true, 'is-invalid': errors.has('flete') || errorsLaravel.errors?.flete }"
                                type="text" name="flete" class="form-control" v-model="fillProduct.flete">
                            <p v-show="errors.has('flete')" class="text-danger">{{ errors.first('flete') }}</p>

                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.flete">{{ error.flete }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="attribute">Atributo</label>
                            <input v-validate="'min:0'"
                                :class="{ 'input': true, 'is-invalid': errors.has('attribute') || errorsLaravel.errors?.attribute }"
                                type="text" name="attribute" class="form-control" v-model="fillProduct.attribute">
                            <p v-show="errors.has('attribute')" class="text-danger">{{ errors.first('attribute') }}</p>

                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.attribute">{{ error.attribute }}</p>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="detail">Detalle</label>
                            <textarea name="detail" class="form-control" rows="10" v-model="fillProduct.detail"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeProductEdit">
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
        ...mapState(['fillProduct', 'errorsLaravel', 'current_page']),
        ...mapGetters(['completeProductEdit'])
    },
    watch: {
        'fillProduct.name': function () {
            delete this.$store.state.errorsLaravel.errors?.name
        },
        'fillProduct.code': function () {
            delete this.$store.state.errorsLaravel.errors?.code
        },
        'fillProduct.utility': function () {
            delete this.$store.state.errorsLaravel.errors?.utility
        },
    },
    methods: {
        ...mapActions(['updateProduct'])
    },
}
</script>