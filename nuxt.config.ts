import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/
        '@nuxt/content', // https://content.nuxtjs.org/
        '@nuxt/image-edge', // https://v1.image.nuxtjs.org/
        '@pinia/nuxt', // https://pinia.vuejs.org/
    ],
    content: {},
    typescript: {
        strict: true
    }
})
