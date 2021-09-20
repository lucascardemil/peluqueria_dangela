<template>

    <form action="POST" v-on:submit.prevent="createService">
        <div id="create" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Nuevo Servicio</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label for="categoria">Categoría*</label>
                        <select-category></select-category>

                        <label for="nombre">Nombre</label>
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control" v-model="newService.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <label for="puntos canje">Puntos Acumulados</label>
                        <input v-validate="'required|min:1|max:11'"
                                :class="{'input': true, 'is-invalid': errors.has('puntos canje') }"
                                type="number"
                                name="puntos canje"
                                class="form-control" v-model="newService.score_accumulated">
                        <p v-show="errors.has('puntos canje')" class="text-danger">{{ errors.first('puntos canje') }}</p>

                        <label for="puntos acumulados">Puntos de Canje</label>
                        <input v-validate="'required|min:1|max:11'"
                                :class="{'input': true, 'is-invalid': errors.has('puntos acumulados') }"
                                type="number"
                                name="puntos acumulados"
                                class="form-control" v-model="newService.score_exchange">
                        <p v-show="errors.has('puntos acumulados')" class="text-danger">{{ errors.first('puntos acumulados') }}</p>

                        <label for="precio">Precio</label>
                        <input  type="number"
                                name="precio"
                                class="form-control" v-model="newService.price">

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" :disabled="!completeServiceCreate">
                            <i class="fas fa-plus-square"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed:{
        ...mapState(['newService', 'errorsLaravel']),
        ...mapGetters(['completeServiceCreate'])
    },
    methods:{
        ...mapActions(['createService'])
    },
}
</script>

