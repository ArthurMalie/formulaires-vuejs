<template>
    <div class="home">
            <h1>Accueil</h1>
            <p>
                Bienvenue dans les formulaires !
            </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home {
    display: flex;    
    justify-content: center;
    align-items: center;
    height: 300px;
    flex-direction: column;
    justify-content: space-evenly;
}

h1{
    color: orangered;
    font-size: 300%;
    font-weight: 600;
}

p {
    color: whitesmoke;
    font-size: 150%;
}
</style>