import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Notes from './components/Notes.vue';


export const routes = [
	{ path: "", component: Home, name: 'home' }, 
	{ path: "/user", component: User, props: true, children: [
			{ path: "", component: UserStart }, 
			{ path: ":id", component: UserDetail }, 
				//
				// this is the named route, can be used in
				// the other components instead of assembling
				// dynamic routes manually
				//
			{ path: ":id/edit", component: UserEdit, name: 'userEdit' }
		]
	},
	{ path: "/notes", component: Notes }
];