<template>
    <div class="container">

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formulaire">

            <legend class="legend">Ajout d'une publication</legend>

            <b-form-group label="Titre">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="titre" placeholder="Titre de l'ouvrage" class="form-control" type="text" v-model="publication.titre" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Résumé">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="resume" placeholder="Résumé de l'ouvrage" class="form-control" type="text" v-model="publication.resume" />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Ouvrage">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <b-form-select :options="ouvrages" name="nom" class="form-control" type="text" v-model="publication.ouvrage" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Pages">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="pages" placeholder="Pages" class="form-control" type="number" v-model="publication.pages" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Numéro">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="numero" placeholder="Numéro" class="form-control" type="number" v-model="publication.numero" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Volume">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="volume" placeholder="Volume" class="form-control" type="number" v-model="publication.volume" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Lien article">
                <div class="col-md-8 inputGroupContainer">
                    <div class="input-group">
                        <input name="lien" placeholder="Lien de l'article" class="form-control" type="text" v-model="publication.lien" required />
                    </div>
                </div>
            </b-form-group>

            <b-form-group label="Photo">
                <div class="col-md-8 inputGroupContainer">
                    <div v-if="!publication.photo">
                        <input class="form-control" type="file" @change="onFileChange" required />
                    </div>
                    <div v-else>
                        <img :src="publication.photo" /><br/>
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
                publications: [],
                publication: {
                    'titre': '',
                    'resume': '',
                    'photo': null,
                    'ouvrage': null,
                    'pages': null,
                    'numero': null,
                    'volume': null,
                    'lien': ''
                },
                ouvrages: ['le petit prince', 'les 101 dalmatiens'],
                show: true
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.publication.photo=URL.createObjectURL(files[0]);
            },
            removeImage: function () {
                this.publication.photo = null;
            },
            onSubmit(evt) {evt.preventDefault();
                let data = new FormData();
                data.set("titre", this.publications.titre);
                data.set("resume", this.publications.resume);
                data.set("photo", this.publications.photo);
                data.set("id_ouvrage", this.publications.ouvrage);
                data.set("nb_pages", this.publications.pages);
                data.set("numero", this.publications.numero);
                data.set("volume", this.publications.volume);
                data.set("url", this.publications.url);
                axios({
                    method: 'post',
                    url: 'ajoutPublication.php',
                    data: data,
                    config: { headers: {'Content-Type': 'multipart/form-data'}}
                });
                this.onReset(evt);
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.publication.titre = ''
                this.publication.resume = ''
                this.publication.photo = null
                this.publication.ouvrage = null
                this.publication.pages = null
                this.publication.numero = null
                this.publication.volume = null
                this.publication.lien = ''
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
		max-width: 128px;
		max-height: 128px;
	}
</style>