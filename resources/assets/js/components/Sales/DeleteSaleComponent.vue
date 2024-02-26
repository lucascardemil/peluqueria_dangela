<template>
    <div id="delete_sale" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>Eliminar Venta</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h5>¿Esta seguro de eliminar la venta permanentemente?</h5>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-danger form-control"  @click.prevent="deleteSale({ id: sale_id})">Eliminar</button>
                    <button class="btn btn-secondary form-control">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    omponents: {},
    computed: {
        ...mapState(['sale_id']),
    },
    methods: {
        ...mapActions(['deleteSale'])
    },
}
</script>