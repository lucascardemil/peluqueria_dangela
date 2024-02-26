<template>
    <form action="POST" v-on:submit.prevent="createFlete">
        <div id="create_flete" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Flete por defecto</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="flete">Flete</label>
                            <input v-validate="'required'"
                                :class="{ 'input': true, 'is-invalid': errors.has('flete') || errorsLaravel.errors?.flete }"
                                type="number" flete="flete" class="form-control" v-model="newFlete.flete">
                            <p v-show="errors.has('flete')" class="text-danger">{{ errors.first('flete') }}</p>
                            <div v-for="(errorss, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errorss.flete" :key="error">{{ error }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeFleteCreate">
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
    computed: {
        ...mapState(['newFlete', 'errorsLaravel']),
        ...mapGetters(['completeFleteCreate'])
    },
    watch: {
        'newFlete.flete': function () {
            delete this.$store.state.errorsLaravel.errors?.flete
        },
    },
    methods: {
        ...mapActions(['createFlete'])
    },
}
</script>