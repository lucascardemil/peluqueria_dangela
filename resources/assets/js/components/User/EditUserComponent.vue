<template>

    <form action="POST" v-on:submit.prevent="updateUser({ id: fillUser.id })">
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
                        <label for="nombre">Nombre*</label>
                        <input v-validate="'required|min:6|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control form-control-sm"
                                v-model="fillUser.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>
                    </div>

                    <div class="form-group">

                        <label for="email">Email*</label>
                        <input v-validate="'required|min:6|max:150|email'"
                                :class="{'input': true, 'is-invalid': errors.has('email') }"
                                type="text"
                                name="email"
                                class="form-control form-control-sm"
                                v-model="fillUser.email">
                        <p v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</p>
                    </div>

                    <div class="form-group">

                        <label for="password">Contraseña*</label>
                        <input v-validate="'required|min:6|max:150|'"
                                :class="{'input': true, 'is-invalid': errors.has('password') }"
                                type="password"
                                name="password"
                                class="form-control form-control-sm"
                                v-model="fillUser.password">
                        <p v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</p>
                    </div>


                    <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                        <p class="mb-0">{{ error.name }}</p>
                        <p class="mb-0">{{ error.email }}</p>
                        <p class="mb-0">{{ error.password }}</p>
                    </div>

                </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" :disabled="!completeUserUpdate">
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
        ...mapState(['fillUser', 'errorsLaravel']),
        ...mapGetters(['completeUserUpdate'])
    },
    methods:{
        ...mapActions(['updateUser'])
    }
}
</script>
