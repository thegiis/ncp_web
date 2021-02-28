export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ncp_web',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" }
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/BaseStyles.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}