<template>
    <form action="POST" v-on:submit.prevent="createVoucher">
        <div id="confirmVoucher" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Confirmar Servicios</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <h2>
                            ¿Estás Seguro de que desea confirmar?
                        </h2>

                        <h3>Total: {{ totalPost }}</h3>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success btn-lg">
                            <i class="fas fa-plus-square"></i> Confirmar
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
    computed: {
        ...mapState(['totalPost']),
        ...mapGetters([])
    },
    methods: {
        ...mapActions(['createVoucher'])
    },
}
</script>

