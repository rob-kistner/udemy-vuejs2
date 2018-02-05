import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Notes from './components/Notes.vue';


export const routes = [
	{ path: "", component: Home }, 
	{ path: "/user", component: User, props: true, children: [
			/* -----------------------------------------
			Starting subroutes with '/' will append 
			the path directly after the domain

			Without the '/', they get appended to the 
			parent route, i.e.: after '/notes'
			------------------------------------------*/
			{ path: "", component: UserStart }, 
			{ path: ":id", component: UserDetail }, 
			{ path: ":id/edit", component: UserEdit }
		]
	},
	{ path: "/notes", component: Notes }
];