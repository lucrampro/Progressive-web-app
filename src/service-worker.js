/* eslint-disable */

self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({
	debug: true
})

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
	new RegExp('https://jsonplaceholder.typicode.com/(.*)'),
	new workbox.strategies.CacheFirst({
		cacheName: 'jsonplaceholder',
		method: 'GET',
		cacheableResponse: { statuses: [0, 200] },
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30
			})
		]
	})
)

workbox.routing.registerRoute(
	new RegExp('https://fonts.(?:googleapies|gstatic).com/(.*)'),
	new workbox.strategies.CacheFirst({
		cacheName: 'googleapis',
		method: 'GET',
		cacheableResponse: { statuses: [0, 200] },
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30
			})
		]
	})
)