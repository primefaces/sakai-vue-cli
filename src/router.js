import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/Dashboard.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/sample',
			name: 'sample',
			component: () => import('./components/SampleDemo.vue')
		},
		{
			path: '/forms',
			name: 'forms',
			component: () => import('./components/FormsDemo.vue')
		},
		{
			path: '/data',
			name: 'data',
			component: () => import('./components/DataDemo.vue')
		},
		{
			path: '/panels',
			name: 'panels',
			component: () => import('./components/PanelsDemo.vue')
		},
		{
			path: '/overlays',
			name: 'overlays',
			component: () => import('./components/OverlaysDemo.vue')
		},
		{
			path: '/menus',
			name: 'menus',
			component: () => import('./components/MenusDemo.vue')
		},
		{
			path: '/messages',
			name: 'messages',
			component: () => import('./components/MessagesDemo.vue')
		},
		{
			path: '/charts',
			name: 'charts',
			component: () => import('./components/ChartsDemo.vue')
		},
		{
			path: '/misc',
			name: 'misc',
			component: () => import('./components/MiscDemo.vue')
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
	],
	scrollBehavior() {
		return {x: 0, y: 0};
	}
});