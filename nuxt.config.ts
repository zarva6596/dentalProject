// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  srcDir: 'src/.',
  components: {
    dirs: [
      {
        path: '~/components/general',
        global: true,
      }
    ]
  }
})