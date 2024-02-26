<template>
    <form action="POST" v-on:submit.prevent="createClient" enctype="multipart/form-data">

        <div class="form-group">
            <label for="profesión">Profesión*</label>
            <select-profession></select-profession>
        </div>

        <div class="form-group">
            <label for="rut">Rut*</label>
            <input v-validate="'required|min:7'"
                :class="{ 'input': true, 'is-invalid': errors.has('rut') || errorsLaravel.errors?.rut }" type="text"
                name="rut" class="form-control form-control-sm" v-model="newClient.rut">
            <p v-show="errors.has('rut')" class="text-danger">{{ errors.first('rut') }}</p>
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.rut" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="name">Nombre*</label>
            <input v-validate="'required|min:6|max:190'"
                :class="{ 'input': true, 'is-invalid': errors.has('name') || errorsLaravel.errors?.name }" type="text"
                name="name" class="form-control form-control-sm" v-model="newClient.name">
            <p v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</p>
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.name" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="email">Email*</label>
            <input v-validate="'required|min:6|max:150|email'"
                :class="{ 'input': true, 'is-invalid': errors.has('email') || errorsLaravel.errors?.email }" type="text"
                name="email" class="form-control form-control-sm" v-model="newClient.email">
            <p v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</p>
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.email" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="city">Ciudad*</label>
            <input v-validate="'required|min:6|max:300|'"
                :class="{ 'input': true, 'is-invalid': errors.has('city') || errorsLaravel.errors?.city }" type="text"
                name="city" class="form-control form-control-sm" v-model="newClient.city">
            <p v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</p>
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.city" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="phone">Teléfono (+569)</label>
            <input v-validate="'required|min:8|max:8'" maxlength="8"
                :class="{ 'input': true, 'is-invalid': errors.has('phone') || errorsLaravel.errors?.phone }" type="text"
                name="phone" class="form-control form-control-sm" v-model="newClient.phone">
            <p v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</p>
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.phone" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="birthdate">Fecha de Nacimiento*</label>
            <input v-validate="'required'"
                :class="{ 'input': true, 'is-invalid': errors.has('birthdate') || errorsLaravel.errors?.birthdate }"
                type="date" name="birthdate" class="form-control form-control-sm" v-model="newClient.birthdate">
            <p v-show="errors.has('birthdate')" class="text-danger">{{ errors.first('birthdate') }}</p>
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.birthdate" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="sex">Sexo*</label>
            <select v-validate="'required'"
                :class="{ 'input': true, 'is-invalid': errors.has('sex') || errorsLaravel.errors?.sex }" name="sex"
                class="form-control form-control-sm" v-model="newClient.sex">
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro</option>
            </select>
            <input v-show="inputOther" :class="{ 'input': true, 'is-invalid': errors.has('other') }" type="text"
                name="other" class="form-control form-control-sm" v-model="newClient.other_sex">
            <p v-show="errors.has('sex')" class="text-danger">{{ errors.first('sex') }}</p>
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.other_sex" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <label for="puntaje">Imagen</label>
            <input v-validate="'required|mimes:jpeg,jpg,png|max:4096'"
                :class="{ 'input': true, 'is-invalid': errors.has('image') || errorsLaravel.errors?.image }" type="file"
                name="image" id="image" class="form-control form-control-sm" @change="fileChange({ evt: $event })">
            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                <p v-for="error in errors.image" :key="error">{{ error }}</p>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="is_convenio" v-model="newClient.is_convenio">
                <label class="form-check-label" for="is_convenio">Convenio con Empresa</label>
            </div>
        </div>
        <div class="form-group" v-show="selectCompany">
            <label for="empresa">Empresa*</label>
            <select-company></select-company>
        </div>

        <button type="submit" class="btn btn-success" :disabled="!completeClientCreate">
            <i class="fas fa-plus-square"></i> Guardar
        </button>
    </form>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { cleanRut } from '../../utils/rutUtils';
import { showInputOther } from '../../utils/inputOther';
import { showSelectCompany } from '../../utils/selectCompany';
export default {

    computed: {
        ...mapState(['newClient', 'errorsLaravel', 'options']),
        ...mapGetters(['completeClientCreate'])
    },
    watch: {
        'newClient.rut': function (newValue) {
            this.newClient.rut = this.cleanRut(newValue);
        },
        'newClient.sex': function (newValue) {
            this.inputOther = this.showInputOther(newValue);
        },
        'newClient.is_convenio': function (newValue) {
            this.selectCompany = this.showSelectCompany(newValue);
        },
    },
    methods: {
        ...mapActions(['createClient', 'fileChange']),
        showSelectCompany,
        showInputOther,
        cleanRut,
    },

}
</script>

