<template>

    <form action="POST" v-on:submit.prevent="updateTemplate({ id: fillTemplate.id })">
        <div class="modal fade modal-fullscreen"  id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar Plantilla de Inventario</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body row">

                        <div class="col-4">
                            <label for="codigo">Sucursal*</label>
                            <select-sucursal-inventory></select-sucursal-inventory>
                        </div>

                        <div class="col-4">
                            <label for="nombre">Nombre</label>
                            <input v-validate="'required'"
                                    :class="{'input': true, 'is-invalid': errors.has('nombre') }"
                                    type="text"
                                    name="nombre"
                                    class="form-control" v-model="fillTemplate.name">
                            <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                            <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                                <p>{{ error.name }}</p>
                            </div>
                        </div>

                        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                            <p>{{ error.name }}</p>
                        </div>

                        <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>ID</th>
                                    <th>Marca</th>
                                    <th>Laboratorio</th>
                                    <th>Producto</th>
                                    <th>Código</th>
                                    <th>Fecha Generación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr v-for="codeLocal in codesEdit" :key="codeLocal.cont">
                                    <td width="10px">
                                        <input type="checkbox" v-model="codeLocal.isActivate">
                                    </td>
                                    <td width="10px">{{ codeLocal.cont }}</td>
                                    <td>{{ codeLocal.brandName }}</td>
                                    <td>{{ codeLocal.laboratoryName }}</td>
                                    <td>{{ codeLocal.productName }}</td>
                                    <td>{{ codeLocal.codeName }}</td>
                                    <td>{{ codeLocal.created_at |  moment('DD/MM/YYYY hh:mm') }}</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-warning" :disabled="!completeTemplateEdit">
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
        ...mapState(['fillTemplate', 'codesEdit', 'errorsLaravel']),
        ...mapGetters(['completeTemplateEdit'])
    },
    methods:{
        ...mapActions(['updateTemplate'])
    },
    created(){
        this.$store.dispatch('allSucursals', { page: 1 })
    }
}
</script>
