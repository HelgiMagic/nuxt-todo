// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/public/styles.css',
  ],
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
});
