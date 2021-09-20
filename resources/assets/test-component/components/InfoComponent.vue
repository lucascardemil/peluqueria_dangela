<template>
    <div class="col-lg-12">
        <h2>Match Details</h2>
        <p v-if="teamACount > 2">
            {{ matchDate }}
        </p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapState({ matchDate : state => state.info.matchDate }),
        ...mapGetters('info', ['teamACount'])
    }
}
</script>

<style>

</style>
