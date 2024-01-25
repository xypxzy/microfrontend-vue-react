import { LifeCycles, registerApplication, start } from 'single-spa'

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
	name: '@my-app/react-app',
	app: () => System.import<LifeCycles>('@my-app/react-app'),
	activeWhen: ['/'],
})

registerApplication({
	name: '@my-app/vue-app',
	app: () => System.import<LifeCycles>('@my-app/vue-app'),
	activeWhen: ['/vue'],
})

start({
	urlRerouteOnly: true,
})
