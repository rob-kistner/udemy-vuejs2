import User from './components/user/User.vue';
import Home from './components/Home.vue';
import ConfigNotes from './components/ConfigNotes.vue';

export const routes = [
	{ path: '', component: Home }, 
	{ path: '/user/:id', component: User, props: true }, 
	{ path: '/config-notes', component: ConfigNotes }
];