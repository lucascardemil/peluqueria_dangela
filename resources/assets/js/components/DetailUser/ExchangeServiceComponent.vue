<template>

    <form action="POST" v-on:submit.prevent="updateScoreExchange">
        <div id="exchange" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Canjear Servicio</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <h5>¿Estás seguro de que deseas Canjear el siguiente servicio? :</h5>

                        <h6>Servicio : {{ service.name }}, costo de puntos: {{ service.score_exchange }}</h6>

                        <h6>Cliente : {{ user.name }}, puntos acumulados: {{ user.score }}</h6>

                        <h6>Puntaje luego del canje : {{ user.score - service.score_exchange }}</h6>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success">
                            <i class="fas fa-plus-square"></i> Canjear
                        </button>

                        <button type="submit" class="btn btn-info" data-dismiss="modal">
                            <i class="fas fa-minus-square"></i> Cancelar
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
        ...mapState(['user', 'service'])
    },
    methods:{
        ...mapActions(['updateScoreExchange'])
    },
}
</script>

