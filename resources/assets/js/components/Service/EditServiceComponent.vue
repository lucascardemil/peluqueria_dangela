<template>
    <form action="POST" v-on:submit.prevent="updateService({ id: fillService.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Servicio</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="categoria">Categoría*</label>
                            <select-category></select-category>
                        </div>

                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input v-validate="'required|min:4|max:190'"
                                :class="{ 'input': true, 'is-invalid': errors.has('name') }" type="text" name="name"
                                class="form-control" v-model="fillService.name">
                            <p v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</p>
                        </div>
                        <div class="form-group">
                            <label for="score_accumulated">Puntos Acumulados</label>
                            <input v-validate="'required|min:1|max:11'"
                                :class="{ 'input': true, 'is-invalid': errors.has('score_accumulated') }" type="number"
                                name="score_accumulated" class="form-control" v-model="fillService.score_accumulated">
                            <p v-show="errors.has('score_accumulated')" class="text-danger">{{
                                errors.first('score_accumulated') }}
                            </p>
                        </div>
                        <div class="form-group">
                            <label for="score_exchange">Puntos de Canje</label>
                            <input v-validate="'required|min:1|max:11'"
                                :class="{ 'input': true, 'is-invalid': errors.has('score_exchange') }" type="number"
                                name="score_exchange" class="form-control" v-model="fillService.score_exchange">
                            <p v-show="errors.has('score_exchange')" class="text-danger">{{ errors.first('score_exchange')
                            }}</p>
                        </div>
                        <div class="form-group">
                            <label for="price">Precio</label>
                            <input v-validate="'required|min:1'"
                                :class="{ 'input': true, 'is-invalid': errors.has('price') }" type="number" name="price"
                                class="form-control" v-model="fillService.price">
                            <p v-show="errors.has('price')" class="text-danger">{{ errors.first('price') }}</p>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="fillService.redeemable_service">
                                <label class="form-check-label">Servicio canjeable</label>
                            </div>
                        </div>
                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" :disabled="!completeServiceEdit">
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
    computed: {
        ...mapState(['fillService', 'errorsLaravel']),
        ...mapGetters(['completeServiceEdit'])
    },
    methods: {
        ...mapActions(['updateService'])
    },
}
</script>
