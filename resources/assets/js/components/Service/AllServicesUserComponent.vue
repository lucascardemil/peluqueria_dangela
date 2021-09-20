<template>

    <div>
        <h2>
            Servicios
        </h2>
        <table class="table table-hover table-striped mt-3 table-sm">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Punto de Canje</th>
                    <th>Punto que Acumula</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" class="form-control form-control-sm"
                            placeholder="Nombre" v-model="searchService.name" @keyup="getServices">
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="serviceLocal in services" :key="serviceLocal.id">
                    <td>{{ serviceLocal.id }}</td>
                    <td>{{ serviceLocal.name }}</td>
                    <td>{{ serviceLocal.score_exchange }}</td>
                    <td>{{ serviceLocal.score_accumulated }}</td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageService({page: 1})">
                        <span>Primera</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="#" @click.prevent="changePageService({page: pagination.current_page - 1})">
                        <span>Atrás</span>
                    </a>
                </li>

                <li class="page-item" v-for="page in pagesNumber"
                    v-bind:class="[ page == isActived ? 'active' : '' ]" :key="page">
                    <a class="page-link" href="#" @click.prevent="changePageService({page})">
                        {{ page }}
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#" @click.prevent="changePageService({page: pagination.current_page + 1})">
                        <span>Siguiente</span>
                    </a>
                </li>

                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="#"  @click.prevent="changePageService({page:pagination.last_page})">
                        <span>Última</span>
                    </a>
                </li>
            </ul>
        </nav>

    </div>

</template>


<script>

import { loadProgressBar } from 'axios-progress-bar';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    computed:{
        ...mapState(['services', 'searchService', 'pagination', 'offset']),
        ...mapGetters(['isActived', 'pagesNumber'])
    },
    methods:{
        ...mapActions(['changePageService', 'getServices'])
    },
    created(){
        loadProgressBar();
        this.$store.dispatch('getServices', { page: 1 })
    }
}

</script>

<style>

</style>
