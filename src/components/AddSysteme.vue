<template>
    <div class="container">

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formulaire">

            <legend class="legend">Ajout d'un système</legend>

            <b-form-group label="Nom">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="nom" placeholder="Nom du système" class="form-control" type="text" v-model="systeme.nom" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Description">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="description" placeholder="Description" class="form-control" type="text" v-model="systeme.description" required />
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
                systeme: {
                    'nom': '',
                    'description': ''
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                let data = new FormData();
                data.set("nom", this.systeme.nom);
                data.set("description", this.systeme.description);
                axios({
                    method: 'post',
                    url: 'ajoutSysteme.php',
                    data: data,
                    config: { headers: {'Content-Type': 'multipart/form-data'}}
                });
                this.onReset(evt);
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.systeme.nom = ''
                this.systeme.description = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>