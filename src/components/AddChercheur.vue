<template>
    <div class="container">

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formulaire">

            <legend class="legend">Ajout d'un chercheur</legend>

            <b-form-group label="Prénom">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="prenom" placeholder="Prénom" class="form-control" type="text" v-model="chercheur.prenom" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Nom">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="nom" placeholder="Nom" class="form-control" type="text" v-model="chercheur.nom" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Url du site">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="url" placeholder="https://www.exemple.com (optionnel)" class="form-control" type="text" v-model="chercheur.url" />
                    </div>
                </div>
            </b-form-group>
            
            <b-form-group label="Photo de profil">
                <div class="col-md-8 inputGroupContainer">
                    <div v-if="!chercheur.photo">
                        <input class="form-control" type="file" @change="onFileChange" required />
                    </div>
                    <div v-else>
                        <img :src="chercheur.photo" /><br/>
                        <button @click="removeImage">Supprimer photo</button>
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
                chercheur: {
                    'prenom': '',
                    'nom': '',
                    'url': '',
                    'photo': null
                },
                show: true
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.chercheur.photo=URL.createObjectURL(files[0]);
            },
            removeImage: function () {
                this.chercheur.photo = null;
            },            
            onSubmit(evt) {
                evt.preventDefault();
                let data = new FormData();
                data.set("prenom", this.chercheur.prenom);
                data.set("nom", this.chercheur.nom);
                data.set("url", this.chercheur.url);
                data.set("photo", this.chercheur.photo);
                axios({
                    method: 'post',
                    url: 'ajoutChercheur.php',
                    data: data,
                    config: { headers: {'Content-Type': 'multipart/form-data'}}
                });
                this.onReset(evt);
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset form values
                this.chercheur.nom = ''
                this.chercheur.prenom = ''
                this.chercheur.url = ''
                this.chercheur.photo = null
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>


<style scoped>
	img {
		max-width: 256px;
		max-height: 256px;
	}
</style>