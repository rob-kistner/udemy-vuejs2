import User from './components/user/User.vue';
import Home from './components/Home.vue';
import ConfigNotes from './components/ConfigNotes.vue';

const setid = route => {
	return {
		id: route.params.id
	};
}

export const routes = [
	{ path: '', component: Home }, 
	{ path: '/user/:id', component: User, props: {id: 0} }, 
	{ path: '/config-notes', component: ConfigNotes }
];