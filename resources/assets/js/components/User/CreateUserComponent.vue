<template>

<form action="POST" v-on:submit.prevent="createUser">
    <div id="create" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h6>Nuevo Usuario</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">

                    <label for="empresa">Empresa*</label>
                    <!--<select-service></select-service>-->
                    <select-company></select-company>


                    <label for="profesión">Profesión*</label>
                    <!--<select-service></select-service>-->
                    <select-profession></select-profession>

                    <label for="rut">Rut*</label>
                    <input v-validate="'required|min:7|max:25'"
                            :class="{'input': true, 'is-invalid': errors.has('rut') }"
                            type="text"
                            name="rut"
                            class="form-control form-control-sm"
                            v-model="newUser.rut">
                    <p v-show="errors.has('rut')" class="text-danger">{{ errors.first('rut') }}</p>

                    <label for="nombre">Nombre*</label>
                    <input v-validate="'required|min:6|max:190'"
                            :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                            type="text"
                            name="nombre"
                            class="form-control form-control-sm"
                            v-model="newUser.name">
                    <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                    <label for="email">Email*</label>
                    <input v-validate="'required|min:6|max:150|email'"
                            :class="{'input': true, 'is-invalid': errors.has('email') }"
                            type="text"
                            name="email"
                            class="form-control form-control-sm"
                            v-model="newUser.email">
                    <p v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</p>

                    <label for="direccion">Dirección*</label>
                    <input v-validate="'min:6|max:300|'"
                            :class="{'input': true, 'is-invalid': errors.has('direccion') }"
                            type="text"
                            name="direccion"
                            class="form-control form-control-sm"
                            v-model="newUser.address">
                    <p v-show="errors.has('direccion')" class="text-danger">{{ errors.first('direccion') }}</p>

                    <label for="telefono">Teléfono (+569)</label>
                    <input v-validate="'min:8'"
                            :class="{'input': true, 'is-invalid': errors.has('telefono') }"
                            type="number"
                            name="telefono"
                            class="form-control form-control-sm"
                            v-model="newUser.phone">
                    <p v-show="errors.has('telefono')" class="text-danger">{{ errors.first('telefono') }}</p>

                    <label for="fecha">Fecha de Nacimiento*</label>
                    <input v-validate=""
                            :class="{'input': true, 'is-invalid': errors.has('fecha') }"
                            type="date"
                            name="fecha"
                            class="form-control form-control-sm"
                            v-model="newUser.birthdate">
                    <p v-show="errors.has('fecha')" class="text-danger">{{ errors.first('fecha') }}</p>

                    <label for="sexo">Sexo*</label>
                    <select  v-validate=""
                            :class="{'input': true, 'is-invalid': errors.has('sexo') }"
                            name="sexo"
                            class="form-control form-control-sm"
                            v-model="newUser.sex">
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                    </select>
                    <p v-show="errors.has('sexo')" class="text-danger">{{ errors.first('sexo') }}</p>

                    <label for="estado civil">Estado Civil*</label>
                    <select v-validate=""
                            :class="{'input': true, 'is-invalid': errors.has('estado civil') }"
                            name="estado civil"
                            class="form-control form-control-sm"
                            v-model="newUser.civil">
                        <option value="1">Soltero(a)</option>
                        <option value="2">Casado(a)</option>
                        <option value="3">Comprometido(a)</option>
                        <option value="4">Divorciado(a)</option>
                    </select>
                    <p v-show="errors.has('estado civil')" class="text-danger">{{ errors.first('estado civil') }}</p>

                    <label for="hijos">Hijos*</label>
                    <select v-validate=""
                            :class="{'input': false, 'is-invalid': errors.has('hijos') }"
                            name="hijos"
                            class="form-control form-control-sm"
                            v-model="newUser.children">
                        <option value=0>No</option>
                        <option value=1>Si</option>
                        
                    </select>
                    <p v-show="errors.has('hijos')" class="text-danger">{{ errors.first('hijos') }}</p>

                    <label for="puntaje">Puntaje</label>
                    <input v-validate=""
                            :class="{'input': true, 'is-invalid': errors.has('puntaje') }"
                            type="number"
                            name="puntaje"
                            class="form-control form-control-sm"
                            v-model="newUser.score">
                    <p v-show="errors.has('puntaje')" class="text-danger">{{ errors.first('puntaje') }}</p>

                    <label for="codigobarra">Código de barra*</label>
                    <input v-validate="'min:4'"
                            :class="{'input': true, 'is-invalid': errors.has('codigobarra') }"
                            type="text"
                            name="codigobarra"
                            class="form-control form-control-sm" v-model="newUser.barcode">
                    <p v-show="errors.has('codigobarra')" class="text-danger">{{ errors.first('codigobarra') }}</p>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="is_convenio" v-model="newUser.is_convenio">
                        <label class="form-check-label" for="is_convenio">Convenio con Empresa</label>
                    </div>

                    <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                        <p class="mb-0">{{ error.profession_id }}</p>
                        <p class="mb-0">{{ error.rut }}</p>
                        <p class="mb-0">{{ error.name }}</p>
                        <p class="mb-0">{{ error.email }}</p>
                        <p class="mb-0">{{ error.address }}</p>
                        <p class="mb-0">{{ error.phone }}</p>
                        <p class="mb-0">{{ error.birthdate }}</p>
                        <p class="mb-0">{{ error.sex }}</p>
                        <p class="mb-0">{{ error.civil }}</p>
                        <p class="mb-0">{{ error.barcode }}</p>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success" :disabled="!completeUserCreate">
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
        ...mapState(['newUser', 'errorsLaravel', 'options']),
        ...mapGetters(['completeUserCreate'])
    },
    methods:{
        ...mapActions(['createUser'])
    },
}
</script>

