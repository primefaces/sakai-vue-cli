import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/formlayout',
        name: 'formlayout',
        component: () => import('./components/FormLayoutDemo.vue')
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('./components/InputDemo.vue')
    },
    {
        path: '/floatlabel',
        name: 'floatlabel',
        component: () => import('./components/FloatLabelDemo.vue')
    },
    {
        path: '/invalidstate',
        name: 'invalidstate',
        component: () => import('./components/InvalidStateDemo.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('./components/ButtonDemo.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('./components/TableDemo.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('./components/ListDemo.vue')
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('./components/TreeDemo.vue')
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import('./components/PanelsDemo.vue')
    },
    {
        path: '/overlay',
        name: 'overlay',
        component: () => import('./components/OverlayDemo.vue')
    },
    {
        path: '/media',
        name: 'media',
        component: () => import('./components/MediaDemo.vue')
    },
    {
        path: '/menu',
        component: () => import('./components/MenuDemo.vue'),
        children: [
            {
                path: '',
                component: () => import('./components/menu/PersonalDemo.vue')
            },
            {
                path: '/menu/seat',
                component: () => import('./components/menu/SeatDemo.vue')
            },
            {
                path: '/menu/payment',
                component: () => import('./components/menu/PaymentDemo.vue')
            },
            {
                path: '/menu/confirmation',
                component: () => import('./components/menu/ConfirmationDemo.vue')
            },
        ],
    },
    {
        path: '/messages',
        name: 'messages',
        component: () => import('./components/MessagesDemo.vue')
    },
    {
        path: '/file',
        name: 'file',
        component: () => import('./components/FileDemo.vue')
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('./components/ChartDemo.vue')
    },
    {
        path: '/misc',
        name: 'misc',
        component: () => import('./components/MiscDemo.vue')
    },
    {
        path: '/crud',
        name: 'crud',
        component: () => import('./pages/CrudDemo.vue')
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import('./pages/TimelineDemo.vue')
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('./components/EmptyPage.vue')
    },
    {
        path: '/documentation',
        name: 'documentation',
        component: () => import('./components/Documentation.vue')
    },
    {
        path: '/blocks',
        name: 'blocks',
        component: () => import('./components/BlocksDemo.vue')
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('./components/IconsDemo.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('./pages/LandingDemo.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
