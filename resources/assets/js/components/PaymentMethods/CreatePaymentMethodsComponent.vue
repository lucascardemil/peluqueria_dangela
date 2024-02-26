<template>
    <form action="POST" v-on:submit.prevent="createPaymentMethods">
        <div id="create_payment_methods" class="modal fade">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Crear Formas de Pagos</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="paymentMethod">Forma de Pago</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('name') || errorsLaravel.errors?.name }"
                                type="text" name="name" class="form-control" v-model="newPaymentMethod.name">
                            <p v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.name" :key="error">{{ error }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="utility">Utilidad</label>
                            <input v-validate="'required|min:1'"
                                :class="{ 'input': true, 'is-invalid': errors.has('utility') }" type="number" min="1"
                                max="100" name="utility" class="form-control" v-model="newPaymentMethod.utility">
                            <p v-show="errors.has('utility')" class="text-danger">{{ errors.first('utility') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.utility" :key="error">{{ error }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-success" :disabled="!completePaymentMethodCreate">
                                <i class="fas fa-plus-square"></i> Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>

import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: {},
    computed: {
        ...mapState(['newPaymentMethod', 'errorsLaravel']),
        ...mapGetters(['completePaymentMethodCreate'])
    },
    watch: {
        'newPaymentMethod.name': function () {
            delete this.$store.state.errorsLaravel.errors?.name
        },
        'newPaymentMethod.utility': function () {
            delete this.$store.state.errorsLaravel.errors?.utility
        },
    },
    methods: {
        ...mapActions(['createPaymentMethods'])
    }
}

</script>

