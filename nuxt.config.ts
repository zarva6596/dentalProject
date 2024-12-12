// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-swiper'],
  srcDir: 'src/.',
  components: {
    dirs: [
      {
        path: '~/components/general',
        global: true,
      },
      {
        path: '~/components/universal',
        global: true,
      },
    ]
  }
})