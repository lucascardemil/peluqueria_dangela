<template>
    <div class="col-lg-12 mx-auto">
        <h2>Team {{ type }}</h2>
        <ul>
            <li v-for="(member, index) in team" :key="member.id">
                {{ member.name }}
                <button class="btn btn-sm" @click="removeFromTeam({type, index, member})">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['type'],
    methods: {
        ...mapActions(['removeFromTeam'])
    },
    computed:{
        team(){
            return this.type ==='A' ? this.$store.state.teamA : this.$store.state.teamB;
        }
    }
}
</script>

<style>

</style>
