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
                <div class="modal-body">

                    <div class="form-group">
                        <label for="nombre">Nombre*</label>
                        <input v-validate="'required|min:6|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control form-control-sm"
                                v-model="newUser.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>
                    </div>

                    <div class="form-group">
                        <label for="rut">Rut*</label>
                        <input v-validate="'required|min:7|max:25'"
                                :class="{'input': true, 'is-invalid': errors.has('rut') }"
                                type="text"
                                name="rut"
                                class="form-control form-control-sm"
                                v-model="newUser.rut">
                        <p v-show="errors.has('rut')" class="text-danger">{{ errors.first('rut') }}</p>
                    </div>

                    <div class="form-group">

                        <label for="email">Email*</label>
                        <input v-validate="'required|min:6|max:150|email'"
                                :class="{'input': true, 'is-invalid': errors.has('email') }"
                                type="text"
                                name="email"
                                class="form-control form-control-sm"
                                v-model="newUser.email">
                        <p v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</p>

                    </div>

                    <div class="form-group">

                        <label for="password">Contraseña*</label>
                        <input v-validate="'required|min:6|max:150|'"
                                :class="{'input': true, 'is-invalid': errors.has('password') }"
                                type="password"
                                name="password"
                                class="form-control form-control-sm"
                                v-model="newUser.password">
                        <p v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</p>

                    </div>

                    <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                        <p class="mb-0">{{ error.name }}</p>
                        <p class="mb-0">{{ error.email }}</p>

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
import { loadProgressBar } from 'axios-progress-bar';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapState(['newUser', 'errorsLaravel', 'options']),
        ...mapGetters(['completeUserCreate'])
    },
    methods:{
        ...mapActions(['createUser'])
    }
}
</script>

