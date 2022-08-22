import {
  dehydrate, hydrate, QueryClient, VueQueryPlugin,
  VueQueryPluginOptions
} from 'vue-query'

export default defineNuxtPlugin((nuxtApp) => {
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 } }
  })
  const options: VueQueryPluginOptions = { queryClient }

  nuxtApp.vueApp.use(VueQueryPlugin, options)

  if (process.server) {
    nuxtApp.hooks.hook('app:rendered', () => {
      nuxtApp.vueQueryState = dehydrate(queryClient)
    })
  }

  if (process.client) {
    nuxtApp.hooks.hook('app:created', () => {
      if (nuxtApp.vueQueryState && nuxtApp.isHydrating) {
        hydrate(queryClient, nuxtApp.vueQueryState)
      }
    })
  }
})
