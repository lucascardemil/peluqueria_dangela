<template>

    <div>

        <h5>
            Nueva Promoción
            <a href="#" class="btn btn-success pull-right btn-sm" data-toggle="modal" data-target="#create"
                title="Agregar">
                <i class="fas fa-plus-circle"></i>
            </a>
        </h5>
            <table class="table table-hover table-striped mt-3 table-sm bg-primary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Total</th>
                    <th>Fecha</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                                v-model="searchPromotion.name" @keyup="getPromotions">
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr v-for="promotionLocal in promotions" :key="promotionLocal.id">
                    <td width="10px">{{ promotionLocal.id }}</td>
                    <td>{{ promotionLocal.name }}</td>
                    <td>{{ promotionLocal.total | currency }}</td>
                    <td>{{ promotionLocal.created_at |  moment('DD/MM/YYYY') }}</td>
                    <td width="10px">
                        <button class="btn btn-warning btn-sm"  data-toggle="modal" data-target="#edit"
                                @click.prevent="editPromotion({ id: promotionLocal.id})"
                                title="Editar">
                                <i class="far fa-edit"></i>
                        </button>
                    </td>
                             
                    <td width="10px">
                        <a href="#" class="btn btn-danger btn-sm"
                            @click.prevent="deletePromotion( { id: promotionLocal.id } )"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Eliminar">
                            <i class="fas fa-ban"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePagePromotion({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePagePromotion({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePagePromotion({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePagePromotion({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePagePromotion({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

        <CreatePromotion></CreatePromotion>
        <EditPromotionComponent></EditPromotionComponent>
    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar'
import CreatePromotion from './CreatePromotionComponent'
import EditPromotionComponent from './EditPromotionComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: { CreatePromotion, EditPromotionComponent },
    computed:{
        ...mapState(['promotions', 'pagination', 'offset','searchPromotion']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['getPromotions', 'editPromotion', 'deletePromotion', 'changePagePromotion'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getPromotions', { page: 1 })
    }
}

</script>

<style>

</style>
