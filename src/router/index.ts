// import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory, Router } from 'vue-router';
import routes from './routes';
// import { useAuthStore } from 'stores/auth';
// import { Dark } from 'quasar';
// import { appRoute } from 'src/helpers/utility';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// const createHistory = process.env.SERVER
// 	? createMemoryHistory
// 	: process.env.VUE_ROUTER_MODE === 'history'
// 	? createWebHistory
// 	: createWebHashHistory;

const router: Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  // Leave this as is and make changes in quasar.conf.js instead!
  history: createWebHistory() //process.env.VUE_ROUTER_BASE
});

// export default route(function (/* { store, ssrContext } */) {
// 	const createHistory = process.env.SERVER
// 		? createMemoryHistory
// 		: process.env.VUE_ROUTER_MODE === 'history'
// 		? createWebHistory
// 		: createWebHashHistory;

// 	router = createRouter({
// 		scrollBehavior: () => ({ left: 0, top: 0 }),
// 		routes,

// 		// Leave this as is and make changes in quasar.conf.js instead!
// 		// quasar.conf.js -> build -> vueRouterMode
// 		// quasar.conf.js -> build -> publicPath
// 		history: createHistory(process.env.VUE_ROUTER_BASE),
// 	});

// 	// router.beforeEach(async (to, from, next) => {
// 	//   const { isAuthenticated } = useAuthStore();
// 	//   const record = to.matched.some((record) => record.meta.requiresAuth);

// 	//   if (record) {
// 	//     const status = await isAuthenticated();
// 	//     if (status) {
// 	//       next();
// 	//     } else {
// 	//       if (to.query.app === '1') {
// 	//         next(appRoute('/appLogin', to.query));
// 	//       } else {
// 	//         next('/login');
// 	//       }
// 	//     }
// 	//   } else {
// 	//     if (to.path === '/login' && to.query.app === '1') {
// 	//       next(appRoute('/appLogin', to.query));
// 	//     }
// 	//     Dark.set(false);
// 	//     next();
// 	//   }
// 	// });

// 	return router;
// });

export default router;

// export { router };
