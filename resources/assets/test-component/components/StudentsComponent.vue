<template>

    <div>
        <h2>Student - Total is {{ studentsCount }}</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="(student, index) in students" :key="student.id">
                {{ student.name }}
                <i>{{ student.games.length }} games he play</i>
                <button :disabled="student.selected"
                        @click="addTeamMember({type: 'A', index})"
                        class="btn btn-sm">Team A</button>
                <button :disabled="student.selected"
                        @click="addTeamMember({type: 'B', index})"
                        class="btn btn-sm">Team B</button>
            </li>
        </ul>
        <hr>

        <TeamComponent type='A'>Team A</TeamComponent>
        <TeamComponent type='B'>Team B</TeamComponent>
        <InfoComponent></InfoComponent>

    </div>

</template>


<script>
import TeamComponent from './TeamComponent';
import InfoComponent from './InfoComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    components: { TeamComponent, InfoComponent },
    computed:{
        ...mapState(['students']),
        ...mapGetters(['studentsCount'])
    },
    methods:{
        ...mapActions(['addTeamMember'])
    },
    created(){
       this.$store.dispatch('getStudents')
    }
}

</script>

<style>

</style>
