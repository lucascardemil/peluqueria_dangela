<template>

    <form action="POST" v-on:submit.prevent="createCode">
        <div id="create" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Nuevo Código</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label for="marca">Marca*</label>
                        <select-brand></select-brand>

                        <label for="laboratorio">Laboratorio*</label>
                        <select-laboratory></select-laboratory>

                        <label for="producto">Producto*</label>
                        <select-product></select-product>

                        <label for="detalle">Detalle</label>
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('detalle') }"
                                type="text"
                                name="detalle"
                                class="form-control" v-model="newCode.detail">
                        <p v-show="errors.has('detalle')" class="text-danger">{{ errors.first('detalle') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.detail }}</p>
                        </div>

                        <label for="nombre">Nombre (Código)</label>
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control" v-model="newCode.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                         <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>

                        <label for="compra">Valor Estimado Compra Neto</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('compra') }"
                                type="number"
                                name="compra"
                                class="form-control" v-model="newCode.price_cost">
                        <p v-show="errors.has('compra')" class="text-danger">{{ errors.first('compra') }}</p>

                         <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.price_cost }}</p>
                        </div>

                        <label for="venta">Valor Estimado Venta Neto</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('venta') }"
                                type="number"
                                name="venta"
                                class="form-control" v-model="newCode.price_sale">
                        <p v-show="errors.has('venta')" class="text-danger">{{ errors.first('venta') }}</p>

                         <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.price_sale }}</p>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeCodeCreate">
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
    computed:{
        ...mapState(['newCode', 'errorsLaravel']),
        ...mapGetters(['completeCodeCreate'])
    },
    methods:{
        ...mapActions(['createCode'])
    },
}
</script>

