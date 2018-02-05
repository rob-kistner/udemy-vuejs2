import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Notes from './components/Notes.vue';


export const routes = [
	{
		path: "",
		name: 'home',
		components: {
			default: Home,
			//
			// Named view-router directive:
			// on the home components, the header-top
			// area will have the navigation
			//
			'header-top': Header
		}
	},
	{
		path: "/user",
		props: true,
			//
			// header-bottom router-view on that 
			// component allows it to appear at the bottom
			//
		components: {
			default: User,
			'header-bottom': Header
		},
		children: [
			{ path: "", component: UserStart }, 
			{ path: ":id", component: UserDetail }, 
			{ path: ":id/edit", component: UserEdit, name: 'userEdit' }
		]
	},
	{
		path: "/notes",
		components: {
			default: Notes,
			'header-top': Header
		}
	}
];