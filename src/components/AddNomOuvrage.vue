<template>
    <div class="container">
        
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formulaire">

            <legend class="legend">Ajout d'un nom d'ouvrage</legend>

            <b-form-group label="Nom">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="nom" placeholder="Nom de l'ouvrage" class="form-control" type="text" v-model="nomOuvrage.nom" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Abbreviation">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="abbreviation" placeholder="Abbreviation du nom de l'ouvrage" class="form-control" type="text" v-model="nomOuvrage.abbreviation" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Type d'ouvrage">
                <b-form-radio-group v-model="nomOuvrage.type" :options="types" name="radio-types" required></b-form-radio-group>
            </b-form-group>

            <b-button type="submit" variant="primary" class="bouton">Ajouter</b-button>
            <b-button type="reset" variant="danger" class="bouton reset">Reset</b-button>

        </b-form>

    </div>
</template>

<script>

    import axios from "axios";

    export default {
        data () {
            return {
                nomOuvrage: {
                    'nom': '',
                    'abbreviation': '',
                    'type': null,
                },
                types: [
                    { text: 'Livre', value: 'livre'},
                    { text: 'Journal', value: 'journal'},
                    { text: 'Conference', value: 'conference'}
                ],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                let data = new FormData();
                data.set("nom", this.nomOuvrage.nom);
                data.set("abbreviation", this.nomOuvrage.abbreviation);
                data.set("type", this.nomOuvrage.type);
                axios({
                    method : 'post',
                    url: 'ajoutNomOuvrage.php',
                    data: data,
                    config: { headers: {'Content-Type': 'multipart/form-data'}}
                });
                this.onReset(evt)
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.nomOuvrage.nom = ''
                this.nomOuvrage.abbreviation = ''
                this.nomOuvrage.type = null
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>