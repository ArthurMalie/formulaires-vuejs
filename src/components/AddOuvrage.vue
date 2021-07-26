<template>
    <div class="container">

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formulaire">

            <legend class="legend">Ajout d'un ouvrage</legend>

            <b-form-group label="Nom">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <b-form-select :options="nomsOuvrages" name="nom" class="form-control" type="text" v-model="ouvrage.nom" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Année">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="annee" placeholder="Année" class="form-control" type="number" min="1000" max="2099" v-model="ouvrage.annee" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Lieu">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="lieu" placeholder="Lieu" class="form-control" type="text" v-model="ouvrage.lieu" />
                    </div>
                </div>
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
                ouvrage: {
                    'nom': null,
                    'annee': null,
                    'lieu': ''
                },
                nomsOuvrages: ['le petit prince', 'les 101 dalmatiens'],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                let data = new FormData();
                data.set("nom", this.ouvrage.nom);
                data.set("annee", this.ouvrage.annee);
                data.set("lieu", this.ouvrage.lieu);
                axios({
                    method: 'post',
                    url: 'ajoutOuvrage.php',
                    data: data,
                    config: { headers: {'Content-Type': 'multipart/form-data'}}
                });
                this.onReset(evt);
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.ouvrage.nom = null
                this.ouvrage.annee = null
                this.ouvrage.lieu = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },
        computed: {
        }
    }
</script>