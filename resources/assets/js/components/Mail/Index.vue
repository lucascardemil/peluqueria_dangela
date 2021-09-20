<template>

<form action="POST" v-on:submit.prevent="createMail">
    <div>

        <label for="categoria">Usuario*</label>
        <select-user></select-user>

        <label for="asunto">Asunto</label>
        <input v-validate="'required|min:4|max:190'"
                :class="{'input': true, 'is-invalid': errors.has('asunto') }"
                type="text"
                name="asunto"
                class="form-control" v-model="newMail.subject">
        <p v-show="errors.has('asunto')" class="text-danger">{{ errors.first('asunto') }}</p>

        <label for="mensaje">Mensaje</label>
        <textarea name="mensaje" class="form-control" rows=10 v-model="newMail.message">
        </textarea>

        <div v-for="(error, index) in errorsLaravel" class="text-danger" :key="index">
            <p>{{ error.name }}</p>
        </div>


        <button type="submit" class="btn btn-lg btn-success mt-4 mb-4" :disabled="!completeMail">
            <i class="fas fa-plus-square"></i> Guardar
        </button>

        <input id="files" type="file" multiple class="form-control"
                @change="fileChange({ evt: $event})">

        <a href="#" class="btn btn-success mt-3"
            @click.prevent="uploadPhoto()"
            data-toggle="tooltip"
            data-placement="top"
            title="Subir las fotos">
            <i class="fas fa-camera-retro"></i> Subir Fotos
        </a>

    </div>

</form>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed:{
        ...mapState(['newMail', 'errorsLaravel']),
        ...mapGetters(['completeMail'])
    },
    methods:{
        ...mapActions(['createMail', 'fileChange', 'uploadPhoto'])
    },
}
</script>


