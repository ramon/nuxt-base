import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const router = useRouter()

  const gtm = createGtm({
    id: runtimeConfig.public.gtmId,
    defer: true,
    compatibility: false,
    vueRouter: router,
    enabled: true,
    debug: true,
    loadScript: true,
    trackOnNextTick: false
  })

  nuxtApp.vueApp.use(gtm)
})
