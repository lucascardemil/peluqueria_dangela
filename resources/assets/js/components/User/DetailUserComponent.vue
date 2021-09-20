<template>

<div id="detail" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h6>Detalle Usuario</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span>&times;</span>
                </button>
            </div>
            <div class="modal-body pt-2">

                <table class="table table-hover table-striped mt-5 table-sm bg-primary text-white rounded"
                        v-show="getUser.name">
                    <tbody>
                        <tr>
                            <td>Nombre: </td>
                            <td class="text-right"><b>{{ getUser.name }}</b></td>
                        </tr>
                        <tr>
                            <td>Rut: </td>
                            <td class="text-right"><b>{{ getUser.rut }}</b></td>
                        </tr>
                        <tr>
                            <td>Correo Electrónico: </td>
                            <td class="text-right"><b>{{ getUser.email }}</b></td>
                        </tr>
                        <tr>
                            <td>Dirección: </td>
                            <td class="text-right"><b>{{ getUser.address }}</b></td>
                        </tr>
                        <tr>
                            <td>Teléfono: </td>
                            <td class="text-right"><b>{{ getUser.phone }}</b></td>
                        </tr>
                        <tr>
                            <td>Fecha de Nacimiento: </td>
                            <td class="text-right"><b>{{ getUser.birthdate }}</b></td>
                        </tr>
                        <tr>
                            <td>Sexo: </td>
                            <td class="text-right" v-if="getUser.sex == 1"><b>Masculino</b></td>
                            <td class="text-right" v-if="getUser.sex == 2"><b>Femenino</b></td>
                        </tr>
                        <tr>
                            <td>Estado Civil: </td>
                            <td class="text-right" v-if="getUser.civil == 1"><b>Soltero(a)</b></td>
                            <td class="text-right" v-if="getUser.civil == 2"><b>Casado(a)</b></td>
                            <td class="text-right" v-if="getUser.civil == 3"><b>Comprometido(a)</b></td>
                            <td class="text-right" v-if="getUser.civil == 4"><b>Divorciado(a)</b></td>
                        </tr>
                        <tr>
                            <td>Hijos: </td>
                            <td class="text-right" v-if="getUser.children == 0"><b>No</b></td>
                            <td class="text-right" v-else><b>Si</b></td>
                        </tr>
                        <tr>
                            <td>Código: </td>
                            <td class="text-right"><b>{{ getUser.barcode }}</b></td>
                        </tr>
                        <tr>
                            <td>Convenio con Empresa:</td>
                            <td class="text-right" v-if="getUser.is_convenio"><b>Si</b></td>
                            <td class="text-right" v-else><b>No</b></td>
                        </tr>
                        <tr>
                            <td><h4>Puntaje: </h4></td>
                            <td class="text-right"><h4><b>{{ getUser.score }}</b></h4></td>
                        </tr>
                    </tbody>
                </table>



            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { loadProgressBar } from 'axios-progress-bar'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed:{
        //...mapState(['users', 'userServices', 'searchUser', 'pagination', 'offset', 'selectedItem']),
        ...mapGetters(['getUser'])
    },
    methods:{
        //...mapActions(['getUser'])
    },
    created(){
        loadProgressBar();
    }
}
</script>

