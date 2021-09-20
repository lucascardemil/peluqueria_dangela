<template>

    <form action="POST" v-on:submit.prevent="updateProduct({ id: fillProduct.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Producto</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label for="unidad">Unidad de Medida*</label>
                        <select-unit></select-unit>

                        <label for="nombre">Nombre</label>
                        <input v-validate="'required|min:4|max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                type="text"
                                name="nombre"
                                class="form-control" v-model="fillProduct.name">
                        <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>

                        <label for="detalle">Detalle</label>
                        <input v-validate="'max:190'"
                                :class="{'input': true, 'is-invalid': errors.has('detalle') }"
                                type="text"
                                name="detalle"
                                class="form-control" v-model="fillProduct.detail">
                        <p v-show="errors.has('detalle')" class="text-danger">{{ errors.first('detalle') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.detail }}</p>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" :disabled="!completeProductEdit">
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
        ...mapState(['fillProduct', 'errorsLaravel']),
        ...mapGetters(['completeProductEdit'])
    },
    methods:{
        ...mapActions(['updateProduct'])
    },
}
</script>
