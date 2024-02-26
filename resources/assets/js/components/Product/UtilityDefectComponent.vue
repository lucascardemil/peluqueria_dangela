<template>
    <form action="POST" v-on:submit.prevent="createUtility">
        <div id="create_utility" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Utilidad por defecto</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="utility">Utilidad</label>
                            <input v-validate="'required'"
                                :class="{ 'input': true, 'is-invalid': errors.has('utility') || errorsLaravel.errors?.utility }"
                                type="number" utility="utility" class="form-control" v-model="newUtility.utility">
                            <p v-show="errors.has('utility')" class="text-danger">{{ errors.first('utility') }}</p>
                            <div v-for="(errorss, index) in errorsLaravel" class="text-danger" :key="index">
                                <p v-for="error in errorss.utility" :key="error">{{ error }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeUtilityCreate">
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
        ...mapState(['newUtility', 'errorsLaravel']),
        ...mapGetters(['completeUtilityCreate'])
    },
    watch: {
        'newUtility.utility': function () {
            delete this.$store.state.errorsLaravel.errors?.utility
        },
    },
    methods: {
        ...mapActions(['createUtility'])
    },
}
</script>