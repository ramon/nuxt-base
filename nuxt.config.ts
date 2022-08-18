import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/
        '@nuxt/content', // https://content.nuxtjs.org/
        // '@nuxt/image-edge', // https://v1.image.nuxtjs.org/
        '@pinia/nuxt', // https://pinia.vuejs.org/
        '@vueuse/nuxt', // https://vueuse.org/
        'nuxt-schema-org', // https://vue-schema-org.netlify.app/
    ],
    content: {},
    schemaOrg: {
        canonicalHost: 'https://localhost:3000/'
    },
    typescript: {
        strict: true
    }
})
