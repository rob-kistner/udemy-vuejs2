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
		components: {
			default: User,
			'header-top': Header
		},
		children: [
			{
				path: "",
				component: UserStart
			}, 
			{
				path: ":id",
				component: UserDetail,
				beforeEnter: ( to, from, next ) => {
					console.log( 'inside route setup' );
					next();
				}
			},
			{
				path: ":id/edit",
				component: UserEdit,
				name: 'userEdit'
			}
		]
	},
	{
		path: "/notes",
		components: {
			default: Notes,
			'header-top': Header
		}
	},
	/* -----------------------------------------
		simple redirect for /redirect-me,
		goes to the /user uri
	------------------------------------------*/
	{
		path: '/redirect-me',
		redirect: '/user'
	},
	/* -----------------------------------------
		catch-all is the path: '*',
		sending anything not covered in this 
		routes file to a single location
	------------------------------------------*/
	{
		path: '*',
		redirect: '/'
	}
];