<template>
    <form action="POST" v-on:submit.prevent="updateClient({ id: fillClient.id })" enctype="multipart/form-data">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6>Editar Cliente</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="profesión">Profesión*</label>
                            <select-profession></select-profession>
                        </div>

                        <div class="form-group">
                            <label for="rut">Rut*</label>
                            <input v-validate="'required|min:7'"
                                :class="{ 'input': true, 'is-invalid': errors.has('rut') || errorsLaravel.errors?.rut }"
                                type="text" name="rut" class="form-control form-control-sm" v-model="fillClient.rut">
                            <p v-show="errors.has('rut')" class="text-danger">{{ errors.first('rut') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.rut" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Nombre*</label>
                            <input v-validate="'required|min:6|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('name') || errorsLaravel.errors?.name }"
                                type="text" name="name" class="form-control form-control-sm" v-model="fillClient.name">
                            <p v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.name" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email*</label>
                            <input v-validate="'required|min:6|max:150|email'"
                                :class="{ 'input': true, 'is-invalid': errors.has('email') || errorsLaravel.errors?.email }"
                                type="text" name="email" class="form-control form-control-sm" v-model="fillClient.email">
                            <p v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.email" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="city">Ciudad*</label>
                            <input v-validate="'min:6|max:300|'"
                                :class="{ 'input': true, 'is-invalid': errors.has('city') || errorsLaravel.errors?.city }"
                                type="text" name="city" class="form-control form-control-sm" v-model="fillClient.city">
                            <p v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.city" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone">Teléfono (+569)</label>
                            <input v-validate="'min:8|max:8'" maxlength="8"
                                :class="{ 'input': true, 'is-invalid': errors.has('phone') || errorsLaravel.errors?.phone }"
                                type="text" name="phone" class="form-control form-control-sm" v-model="fillClient.phone">
                            <p v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.phone" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="birthdate">Fecha de Nacimiento*</label>
                            <input v-validate="'required'"
                                :class="{ 'input': true, 'is-invalid': errors.has('birthdate') || errorsLaravel.errors?.birthdate }"
                                type="birthdate" name="birthdate" class="form-control form-control-sm"
                                v-model="fillClient.birthdate">
                            <p v-show="errors.has('birthdate')" class="text-danger">{{ errors.first('birthdate') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.birthdate" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="sex">Sexo*</label>
                            <select v-validate="'required'"
                                :class="{ 'input': true, 'is-invalid': errors.has('sex') || errorsLaravel.errors?.sex }"
                                name="sex" class="form-control form-control-sm" v-model="fillClient.sex">
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                                <option value="3">Otro</option>
                            </select>
                            <input v-show="inputOther" :class="{ 'input': true, 'is-invalid': errors.has('otro') }"
                                type="text" name="otro" class="form-control form-control-sm" v-model="fillClient.other_sex">
                            <p v-show="errors.has('sex')" class="text-danger">{{ errors.first('sex') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.other_sex" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="score">Puntaje</label>
                            <input
                                :class="{ 'input': true, 'is-invalid': errors.has('score') || errorsLaravel.errors?.score }"
                                type="number" name="score" class="form-control form-control-sm" v-model="fillClient.score">
                            <p v-show="errors.has('score')" class="text-danger">{{ errors.first('score') }}</p>
                            <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errors.score" :key="error">{{ error }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <div v-if="fillClient.image === null">
                                <label for="image">Imagen</label>
                                <input v-validate="'required|mimes:jpeg,jpg,png|max:4096'"
                                    :class="{ 'input': true, 'is-invalid': errors.has('image') || errorsLaravel.errors?.image }"
                                    type="file" name="image" id="image" class="form-control form-control-sm"
                                    @change="handleFileUpload">
                                <p v-show="errors.has('image')" class="text-danger">{{ errors.first('image') }}</p>
                                <div v-for="(errors, index) in errorsLaravel" class="text-danger" :key="index">
                                    <p v-for="error in errors.image" :key="error">{{ error }}</p>
                                </div>
                            </div>
                            <div class="w-50" v-if="fillClient.image !== null">
                                <div class="image-container-delete">
                                    <img :src="fillClient.image" alt="Imagen del Cliente" class="img-thumbnail">
                                    <div class="overlay">
                                        <button class="button"
                                            @click.prevent="deleteImage({ id: fillClient.id, image: fillClient.image })"><i
                                                class="fas fa-trash"></i> Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="is_convenio"
                                    v-model="fillClient.is_convenio">
                                <label class="form-check-label" for="is_convenio">Convenio con Empresa</label>
                            </div>
                        </div>

                        <div class="form-group" v-show="selectCompany">
                            <label for="empresa">Empresa*</label>
                            <select-company></select-company>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" :disabled="!completeClientUpdate">
                            <i class="fas fa-edit"></i> Editar
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
import { showInputOther } from '../../utils/inputOther';
import { showSelectCompany } from '../../utils/selectCompany';
export default {
    computed: {
        ...mapState(['fillClient', 'errorsLaravel', 'options']),
        ...mapGetters(['completeClientUpdate'])
    },
    watch: {
        'fillClient.rut': function (newValue) {
            this.fillClient.rut = this.cleanRut(newValue);
            delete this.$store.state.errorsLaravel.errors?.name
        },
        'fillClient.sex': function (newValue) {
            this.inputOther = this.showInputOther(newValue);
        },
        'fillClient.is_convenio': function (newValue) {
            this.selectCompany = this.showSelectCompany(newValue);
        },
    },
    methods: {
        ...mapActions(['updateClient', 'deleteImage']),
        handleFileUpload(event) {
            this.$store.dispatch('setSelectedImage', event.target.files[0]);
        },
        showSelectCompany,
        showInputOther,
        cleanRut,
    },
}
</script>
