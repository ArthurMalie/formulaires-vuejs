<template>
    <div id="app">
        <div>
            <b-navbar type="dark" variant="dark">
                <b-navbar-nav class="menu">

                    <b-nav-item to='/' exact class="menuitem">Accueil</b-nav-item>
                    
                    <b-nav-item-dropdown text="Formulaires d'ajout" right>
                        <b-dropdown-item to='/chercheur' class="">Ajout chercheur</b-dropdown-item>
                        <b-dropdown-item to='/nomouvrage' class="">Ajout nom d'ouvrage</b-dropdown-item>
                        <b-dropdown-item to='/ouvrage' class="">Ajout ouvrage</b-dropdown-item>
                        <b-dropdown-item to='/publication' class="">Ajout publication</b-dropdown-item>
                        <b-dropdown-item to='/systeme' class="">Ajout systeme</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-navbar>
        </div>

        <router-view />
        
    </div>
</template>


<script>
    export default {}
</script>



<style>
    .navbar.navbar-dark.navbar-expand {
        background: transparent !important;
    }

    .menuitem {
        margin-right: 1px;
    }

    .dropdown-item:hover{
        background-color: rgba(255, 68, 0, 0.1) !important;
    }

    .menubar {
        padding-bottom: 0px;
        font-weight: 200;
    }

    .separator {
        background-color: greenyellow;
        height: 5px;
        margin-bottom: 10px;
    }

    .nav-link {
        color: lightgrey;
        background-color: rgb(90, 90, 90);
    }

    .nav-link:hover {
        color: rgb(65, 82, 36);
        border-color: orangered;
    }

    .router-link-active {
        opacity: 100%;
        color: olivedrab;
        background-color: rgb(42, 42, 42);
        border-bottom: none;
        border-color: orangered;
    }

    body {
        color: white;
    }

    #app {
        background-color: rgb(49, 49, 49);
        min-height: 100vh;
    }

    .formulaire {
        color: rgba(255,255,255,0.7);
        font-size: 130%;
    }

    .bouton {
        margin: 10px;
        width: 100px;
    }

    .bouton.reset {
        background-color: orangered;
    }

    .legend {
        color: orangered;
        font-weight: 650;
    }
</style>
