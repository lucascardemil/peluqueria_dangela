let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
    'resources/assets/js/front.js'
    //'resources/assets/js/jquery-3.3.1.js',
    //'resources/assets/js/popper.min.js',
    //'resources/assets/js/bootstrap-4.1.1.js',
    //'resources/assets/js/toastr.js',
    //'resources/assets/js/vue.js',
    //'resources/assets/js/axios.js',
    //'node_modules/axios-progress-bar/dist/index.js',
    ],'public/js/app-principal.js')
.js(['resources/assets/js/app.js'], 'public/js').vue()
.styles([
    'resources/assets/css/bootstrap-4.1.1.css',
    'resources/assets/css/style.violet.css',
    'resources/assets/css/custom.css',
    //'resources/assets/css/fontastic.css',
    'resources/assets/css/toastr.css',
    //'resources/assets/css/style.css',
    'node_modules/bootstrap4-fullscreen-modal/dist/bootstrap4-modal-fullscreen.css',
    'node_modules/axios-progress-bar/dist/nprogress.css',
], 'public/css/app-principal.css')
.sass('resources/assets/sass/app.scss', 'public/css')
