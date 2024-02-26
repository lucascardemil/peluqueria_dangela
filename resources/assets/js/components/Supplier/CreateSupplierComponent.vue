<template>
    <form action="POST" v-on:submit.prevent="createSupplier">
        <div id="create" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Nuevo Proveedor</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Nombre*</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('name') || errorsLaravel.errors?.name }"
                                type="text" name="name" class="form-control" v-model="newSupplier.name">
                            <p v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.name" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="rut">Rut*</label>
                            <input v-validate="'required|min:7'"
                                :class="{ 'input': true, 'is-invalid': errors.has('rut') || errorsLaravel.errors?.rut }"
                                type="text" name="rut" class="form-control" v-model="newSupplier.rut">
                            <p v-show="errors.has('rut')" class="text-danger">{{ errors.first('rut') }}</p>
                            <div v-for="(errorss, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errorss.rut" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone">Telefono</label>
                            <input v-validate="'min:9|max:9'"
                                :class="{ 'input': true, 'is-invalid': errors.has('phone') || errorsLaravel.errors?.phone }"
                                type="text" name="phone" class="form-control" v-model="newSupplier.phone" maxlength="9">
                            <p v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.phone" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="address">Direccion</label>
                            <input v-validate="'min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('address') || errorsLaravel.errors?.address }"
                                type="text" name="address" class="form-control" v-model="newSupplier.address">
                            <p v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.address" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="commercial_business">Giro</label>
                            <input v-validate="'min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('commercial_business') || errorsLaravel.errors?.commercial_business }"
                                type="text" name="commercial_business" class="form-control"
                                v-model="newSupplier.commercial_business">
                            <p v-show="errors.has('commercial_business')" class="text-danger">{{
                                errors.first('commercial_business') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.commercial_business" :key="error">{{ error }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeSupplierCreate">
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
import { cleanRut } from '../../utils/rutUtils';
export default {
    computed: {
        ...mapState(['newSupplier', 'errorsLaravel']),
        ...mapGetters(['completeSupplierCreate'])
    },
    watch: {
        'newSupplier.rut': function (newValue) {
            this.newSupplier.rut = this.cleanRut(newValue);
        },
    },
    methods: {
        ...mapActions(['createSupplier']),
        cleanRut
    },
    
}
</script>