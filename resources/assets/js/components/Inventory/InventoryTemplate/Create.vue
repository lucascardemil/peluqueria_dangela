<template>

<form action="POST" v-on:submit.prevent="createTemplate">
    <div class="modal fade modal-fullscreen"  id="create" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>Nueva Plantilla de Inventario</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="row">

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
                                    class="form-control" v-model="newTemplate.name">
                            <p v-show="errors.has('nombre')" class="text-danger">{{ errors.first('nombre') }}</p>

                            <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
                                <p>{{ error.name }}</p>
                            </div>
                        </div>

                    </div>

                    <div>

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
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <input type="text" class="form-control form-control-sm"
                                                v-model="searchCode.name" @keyup="getAllCodes">
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr v-for="codeLocal in codes" :key="codeLocal.id">
                                    <td width="10px">
                                        <input type="checkbox" v-model="codeLocal.isActivate">
                                    </td>
                                    <td width="10px">{{ codeLocal.cont }}</td>
                                    <td>{{ codeLocal.brandName }}</td>
                                    <td>{{ codeLocal.laboratoryName }}</td>
                                    <td>{{ codeLocal.productName }}</td>
                                    <td>{{ codeLocal.codeName }}</td>
                                    <td>{{ codeLocal.created_at |  moment('DD/MM/YYYY hh:mm') }}</td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-warning btn-sm"
                                            @click.prevent="editCode( { codeLocal } )"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Editar">
                                            <i class="far fa-edit"></i>
                                        </a>
                                    </td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-danger btn-sm"
                                            @click.prevent="deleteCode( { id: codeLocal.id } )"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Eliminar">
                                            <i class="fas fa-ban"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success">
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
    computed:{
        ...mapState(['newTemplate', 'errorsLaravel', 'codes', 'searchCode']),
        ...mapGetters(['completeTemplateCreate'])
    },
    methods:{
        ...mapActions(['getAllCodes', 'createTemplate'])
    },
    created(){
        this.$store.dispatch('allSucursals', { page: 1 })
        this.$store.dispatch('getAllCodes')
    }
}
</script>

