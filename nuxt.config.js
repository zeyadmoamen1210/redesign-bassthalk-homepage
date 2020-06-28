export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: 'logo.png',
        },
        {
            rel:'stylesheet',
            href:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        }
     ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff',
    },
    /*
     ** Global CSS
     */
    css: ['./assets/circle.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        './plugins/swiper.js',
        './plugins/vselect.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
    ],
    auth: {
        // Options
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'login',
                        method: 'post',
                        propertyName: 'token',
                    },
                    user: {
                        url: 'me',
                        method: 'get',
                        propertyName: '',
                    },
                    logout: false,
                },
                // tokenRequired: true,
                tokenType: 'Bearer',
            },
        },
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'https://basthalk-be.herokuapp.com/api/v1/',
        common: {
            Accept: 'application/json',
        },
    },
    /*
     ** Build configuration
     */
    build: {
        extend(config, ctx) {},
    },
}