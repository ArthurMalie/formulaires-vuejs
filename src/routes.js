import Accueil from './components/Accueil.vue';
import AddChercheur from './components/AddChercheur.vue';
import AddNomOuvrage from './components/AddNomOuvrage.vue';
import AddOuvrage from './components/AddOuvrage.vue';
import AddPublication from './components/AddPublication.vue';
import AddSysteme from './components/AddSysteme.vue';

const routes = [
    {
        path: '/',
        component: Accueil
    },
    {
        path: '/chercheur',
        component: AddChercheur
    },
    {
        path: '/nomouvrage',
        component: AddNomOuvrage
    },
    {
        path: '/ouvrage',
        component: AddOuvrage
    },
    {
        path: '/publication',
        component: AddPublication
    },
    {
        path: '/systeme',
        component: AddSysteme
    }
];

export default routes;