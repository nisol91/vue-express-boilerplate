import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagina from '@/components/Pagina'
import Elenco from '@/components/Elenco'
import Form from '@/components/Form'
import Posts from '@/components/Posts'
import Edit from '@/components/Edit'
import Notes from '@/components/Notes'
import FormNotes from '@/components/FormNotes'
import ElementoSingolo from '@/components/ElementoSingolo'



Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/form',
			name: 'Form',
			component: Form
		},
		{
			path: '/pagina',
			name: 'Pagina',
			component: Pagina
		},
		{
			path: '/elenco',
			name: 'Elenco',
			component: Elenco
		},
		{
			path: '/posts',
			name: 'Posts',
			component: Posts
		},
		{
			path: '/notes',
			name: 'Notes',
			component: Notes
		},
		{
			path: '/form-notes',
			name: 'FormNotes',
			component: FormNotes
		},
		{
			path: '/edit/:id',
			name: 'Edit',
			component: Edit,
			props: true,
		},
		{
			path: '/elementosingolo/:elementoId',
			name: 'ElementoSingolo',
			component: ElementoSingolo,
			props: true,
		},
	]
})


export default router