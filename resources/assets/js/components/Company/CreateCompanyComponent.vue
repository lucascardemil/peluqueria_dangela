<template>

    <form action="POST" v-on:submit.prevent="createCompany">
        <div id="create" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Nueva Empresa</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label for="nombre">Nombre</label>
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control" v-model="newCompany.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <label for="fecha">Fecha*</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('fecha') }"
                                type="date"
                                name="fecha"
                                class="form-control form-control-sm"
                                v-model="newCompany.date">
                        <p v-show="errors.has('fecha')" class="text-danger">{{ errors.first('fecha') }}</p>

                        <label for="descuento">Descuento</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="number"
                                name="descuento"
                                class="form-control" v-model="newCompany.discount">
                        <p v-show="errors.has('descuento')" class="text-danger">{{ errors.first('descuento') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                            <p>{{ error.date }}</p>
                            <p>{{ error.discount }}</p>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeCompanyCreate">
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
        ...mapState(['newCompany', 'errorsLaravel']),
        ...mapGetters(['completeCompanyCreate'])
    },
    methods:{
        ...mapActions(['createCompany'])
    },
}
</script>

