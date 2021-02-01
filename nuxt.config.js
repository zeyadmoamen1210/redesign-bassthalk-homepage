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
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
            },
        ],
        script: [
            { src: '/js/fb-sdk.js' }
        ]
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
    css: ['./assets/circle.css', './assets/all.min.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        './plugins/swiper.js',
        './plugins/vselect.js',
        './plugins/moment.js',
        './plugins/snotify.js',
        './plugins/vuesax.js',
        './plugins/countdown.js',
        './plugins/vue-awesome-swiper.js'
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
            facebook: {
                client_id: '709818006573529',
                userinfo_endpoint: false,
                scope: ['public_profile', 'email'],
                redirect_uri: 'https://bassthalk.com/callback',
            },
            google: {
                client_id: '1017089558534-sg5lphbqs179g9fm3b5qcrigl6l2br20.apps.googleusercontent.com',
                user: false,
                redirect_uri: 'https://bassthalk.com/callback',
            },
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
        plugins: [{
            src: '~plugins/auth.js',
            ssr: false,
        }, ],
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        // baseURL: 'https://basthalk-be.herokuapp.com/api/v1/',
        // baseURL: 'https://bsthalk.herokuapp.com/api/v1',
        baseURL: 'https://api-client.bassthalk.com/api/v1',
        common: {
            Accept: 'application/json',
            Authorization: '',
        },
    },
    /*
     ** Build configuration
     */
    build: {
        loaders: {
            vue: {
              transformAssetUrls: {
                audio: 'src'
              }
            }
        },
        transpile: [
            "vee-validate/dist/rules"
          ],
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                  name: '@/assets/sounds/success-sound.mp3'
                }
              })
        },
    },
}