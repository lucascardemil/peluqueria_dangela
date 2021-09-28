<template>

    <form action="POST" v-on:submit.prevent="updateClient({ id: fillClient.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6>Editar Usuario</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    
                    <div class="form-group">
                        <label for="empresa">Empresa*</label>
                        <!--<select-service></select-service>-->
                        <select-company></select-company>
                    </div>

                    <div class="form-group">
                        <label for="profesión">Profesión*</label>
                        <!--<select-service></select-service>-->
                        <select-profession></select-profession>
                    </div>

                    <div class="form-group">
                            <label for="rut">Rut*</label>
                            <input v-validate="'required|min:7|max:25'"
                                    :class="{'input': true, 'is-invalid': errors.has('rut') }"
                                    type="text"
                                    name="rut"
                                    class="form-control form-control-sm"
                                    v-model="fillClient.rut">
                            <p v-show="errors.has('rut')" class="text-danger">{{ errors.first('rut') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre*</label>
                        <input v-validate="'required|min:6|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control form-control-sm"
                                v-model="fillClient.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input v-validate="'required|min:6|max:150|email'"
                                :class="{'input': true, 'is-invalid': errors.has('email') }"
                                type="text"
                                name="email"
                                class="form-control form-control-sm"
                                v-model="fillClient.email">
                        <p v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="direccion">Dirección*</label>
                        <input v-validate="'min:6|max:300|'"
                                :class="{'input': true, 'is-invalid': errors.has('direccion') }"
                                type="text"
                                name="direccion"
                                class="form-control form-control-sm"
                                v-model="fillClient.address">
                        <p v-show="errors.has('direccion')" class="text-danger">{{ errors.first('direccion') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono (+569)</label>
                        <input v-validate="'min:8'"
                                :class="{'input': true, 'is-invalid': errors.has('telefono') }"
                                type="number"
                                name="telefono"
                                class="form-control form-control-sm"
                                v-model="fillClient.phone">
                        <p v-show="errors.has('telefono')" class="text-danger">{{ errors.first('telefono') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="fecha">Fecha de Nacimiento*</label>
                        <input v-validate=""
                                :class="{'input': true, 'is-invalid': errors.has('fecha') }"
                                type="date"
                                name="fecha"
                                class="form-control form-control-sm"
                                v-model="fillClient.birthdate">
                        <p v-show="errors.has('fecha')" class="text-danger">{{ errors.first('fecha') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="sexo">Sexo*</label>
                        <select  v-validate=""
                                :class="{'input': true, 'is-invalid': errors.has('sexo') }"
                                name="sexo"
                                class="form-control form-control-sm"
                                v-model="fillClient.sex">
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                        </select>
                        <p v-show="errors.has('sexo')" class="text-danger">{{ errors.first('sexo') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="estado civil">Estado Civil*</label>
                        <select v-validate=""
                                :class="{'input': true, 'is-invalid': errors.has('estado civil') }"
                                name="estado civil"
                                class="form-control form-control-sm"
                                v-model="fillClient.civil">
                            <option value="1">Soltero(a)</option>
                            <option value="2">Casado(a)</option>
                            <option value="3">Comprometido(a)</option>
                            <option value="4">Divorciado(a)</option>
                        </select>
                        <p v-show="errors.has('estado civil')" class="text-danger">{{ errors.first('estado civil') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="hijos">Hijos*</label>
                        <select v-validate=""
                                :class="{'input': false, 'is-invalid': errors.has('hijos') }"
                                name="hijos"
                                class="form-control form-control-sm"
                                v-model="fillClient.children">
                            <option value=0>No</option>
                            <option value=1>Si</option>
                            
                        </select>
                        <p v-show="errors.has('hijos')" class="text-danger">{{ errors.first('hijos') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="puntaje">Puntaje</label>
                        <input v-validate=""
                                :class="{'input': true, 'is-invalid': errors.has('puntaje') }"
                                type="number"
                                name="puntaje"
                                class="form-control form-control-sm"
                                v-model="fillClient.score">
                        <p v-show="errors.has('puntaje')" class="text-danger">{{ errors.first('puntaje') }}</p>
                    </div>
                    <div class="form-group">
                        <label for="codigobarra">Código de barra*</label>
                        <input v-validate="'min:4'"
                                :class="{'input': true, 'is-invalid': errors.has('codigobarra') }"
                                type="text"
                                name="codigobarra"
                                class="form-control form-control-sm" v-model="fillClient.barcode">
                        <p v-show="errors.has('codigobarra')" class="text-danger">{{ errors.first('codigobarra') }}</p>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="is_convenio" v-model="fillClient.is_convenio">
                            <label class="form-check-label" for="is_convenio">Convenio con Empresa</label>
                        </div>
                    </div>

                    <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
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

export default {
    computed:{
        ...mapState(['fillClient', 'errorsLaravel', 'options', 'optionsProfession']),
        ...mapGetters(['completeClientUpdate'])
    },
    methods:{
        ...mapActions(['updateClient'])
    },
    created(){
        this.$store.dispatch('allCompanies')
        this.$store.dispatch('allProfessions')
    }
}
</script>
