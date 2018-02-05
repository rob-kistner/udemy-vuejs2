import Home from './components/Home.vue';
import Header from './components/Header.vue';

/*----------------------------------------
	lazy loading, syntax webpack recognizes only

	couldn't see a different in Chrome dev tools,
	not sure what's going on here
------------------------------------------*/
const User = resolve => {
	require.ensure(['./components/user/User.vue'], () => {
		resolve(require('./components/user/User.vue'));
	}, "user");
}
const UserStart = resolve => {
	require.ensure(["./components/user/UserStart.vue"], () => {
      resolve(require("./components/user/UserStart.vue"));
    }, "user");
}
const UserEdit = resolve => {
	require.ensure(["./components/user/UserEdit.vue"], () => {
      resolve(require("./components/user/UserEdit.vue"));
    }, "user");
}
const UserDetail = resolve => {
	require.ensure(["./components/user/UserDetail.vue"], () => {
      resolve(require("./components/user/UserDetail.vue"));
    }, "user");
}
const Notes = resolve => {
  require.ensure(["./components/Notes.vue"], () => {
    resolve(require("./components/Notes.vue"));
  });
};


export const routes = [
	{
		path: "",
		name: 'home',
		components: {
			default: Home,
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
	{
		path: '/redirect-me',
		redirect: '/user'
	},
	{
		path: '*',
		redirect: '/'
	}
];