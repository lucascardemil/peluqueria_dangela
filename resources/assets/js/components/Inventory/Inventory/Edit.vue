<template>

    <form action="POST" v-on:submit.prevent="updateInventory({ id: fillInventory.id })">
        <div id="edit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Inventariado</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <label for="codigo">Código*</label>
                        <select-code></select-code>

                        <label for="precio">Precio</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('precio') }"
                                type="number"
                                name="precio"
                                class="form-control" v-model="fillInventory.price">
                        <p v-show="errors.has('precio')" class="text-danger">{{ errors.first('precio') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.price }}</p>
                        </div>

                        <label for="cantidad">Cantidad</label>
                        <input v-validate="'required'"
                                :class="{'input': true, 'is-invalid': errors.has('cantidad') }"
                                type="number"
                                name="cantidad"
                                class="form-control" v-model="fillInventory.quantity">
                        <p v-show="errors.has('cantidad')" class="text-danger">{{ errors.first('cantidad') }}</p>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.quantity }}</p>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning">
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
        ...mapState(['fillInventory', 'errorsLaravel']),
        ...mapGetters(['completeInventoryEdit'])
    },
    methods:{
        ...mapActions(['updateInventory'])
    },
}
</script>
