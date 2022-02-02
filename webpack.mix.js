let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('assets/sass/main.scss', 'dist/css')
    .js('src/main.js', 'dist/js').vue()
    .copy('assets/images', 'dist/images')
    .copy('assets/favicon.png/', 'dist')
    .copy('assets/index.html/', 'dist')
    .copy('assets/manifest.json', 'dist')
    .options({
        processCssUrls: false
    });