<template>

    <form action="POST" v-on:submit.prevent="updateCategory({ id: fillCategory.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Categoría</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">

                            <label for="nombre">Nombre</label>
                            <input v-validate="'required|min:4|max:190'"
                                    :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                    type="text"
                                    name="nombre"
                                    class="form-control" v-model="fillCategory.name">
                            <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                            <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                                <p>{{ error.name }}</p>
                                <p>{{ error.date }}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input"  
                                        type="checkbox" 
                                        v-model="fillCategory.isSession">
                                <label class="form-check-label">Agregar</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" :disabled="!completeCategoryEdit">
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
        ...mapState(['fillCategory', 'errorsLaravel']),
        ...mapGetters(['completeCategoryEdit'])
    },
    methods:{
        ...mapActions(['updateCategory'])
    },
}
</script>
