<template>

    <form action="POST" v-on:submit.prevent="updateProfession({ id: fillProfession.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Profesión</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label for="nombre">Nombre</label>
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control" v-model="fillProfession.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <label for="fecha">Fecha*</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('fecha') }"
                                type="date"
                                name="fecha"
                                class="form-control form-control-sm"
                                v-model="fillProfession.date">
                        <p v-show="errors.has('fecha')" class="text-danger">{{ errors.first('fecha') }}</p>

                        <label for="porcentaje">Porcentaje</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="number"
                                name="porcentaje"
                                class="form-control" v-model="fillProfession.percentage">
                        <p v-show="errors.has('porcentaje')" class="text-danger">{{ errors.first('porcentaje') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                            <p>{{ error.date }}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" :disabled="!completeProfessionEdit">
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
        ...mapState(['fillProfession', 'errorsLaravel']),
        ...mapGetters(['completeProfessionEdit'])
    },
    methods:{
        ...mapActions(['updateProfession'])
    },
}
</script>
