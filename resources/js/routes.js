//importamois los componentes

const Raza = ()=> import('./components/Raza.vue');
const Vaca = ()=> import('./components/Vaca.vue');
const Becerro = ()=> import('./components/Becerro.vue');
const Novilla = ()=> import('./components/Novilla.vue');
const Parto = ()=> import('./components/Parto.vue');
const Botella = ()=> import('./components/Botella.vue');
const Fallecida = ()=> import('./components/Fallecida.vue');
const Novedad = ()=> import('./components/Novedad.vue');

export const routes = [
    {
        name: 'raza',
        path: '/raza',
        component: Raza
    },
    {
        name: 'vaca',
        path: '/vaca',
        component: Vaca
    },
    {
        name: 'becerro',
        path: '/becerro',
        component: Becerro
    },
    {
        name: 'novilla',
        path: '/novilla',
        component: Novilla
    },
    {
        name: 'parto',
        path: '/parto',
        component: Parto
    },
    {
        name: 'botella',
        path: '/botella',
        component: Botella
    },
    {
        name: 'fallecida',
        path: '/fallecida',
        component: Fallecida
    },
    {
        name: 'novedad',
        path: '/novedad',
        component: Novedad
    },
]