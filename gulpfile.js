const { src, dest, watch, parallel, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const del = require('del');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp')
const replace = require('gulp-replace');
const webpHTML = require('gulp-webp-html-nosvg');
const webpcss = require("gulp-webp-css");
const changed = require('gulp-changed');
const minSvg = require('gulp-svgmin');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
// const gulpIf = require('gulp-if');

// import imagemin from 'gulp-imagemin';

const fs = require('fs');

const dist = "./dist";


function browsersync() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  })
}

function html() {
  return src(['src/*.html', '!src/_*.html'])
    .pipe(fileinclude())
    .pipe(webpHTML())
    // .pipe(cheerio({
    //     decodeEntities: false // Вимкнути екранизацію символів
    //   },($) => {
    //   $('img').each((_, element) => {
    //     const $element = $(element);
    //     const src = $element.attr('src');
    //     if (src && !src.endsWith('.svg')) {
    //       $element.replaceWith(`<picture><source srcset="${src}" type="image/webp"><img src="${src}" alt=""></picture>`);
    //     }
    //   });
    // }))
    // Жимаємо файл html
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(dist + '/'))
    .pipe(browserSync.stream());
}

function styles() {
  return src('src/scss/main.scss')

    .pipe(sass({ outputStyle: 'expanded' }))
    // Додаємо автопрефікси
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      cascade: true,
      grid: true
    }))
    .pipe(webpcss())
    // Виводимо файл main.css
    .pipe(dest(dist + '/css'))
    .pipe(dest('src/css'))

    /*
    // Жимаємо файл main.css
      .pipe(cleanCSS())
    // Переміновуїм фойл в main.min.css
      .pipe(concat('main.min.css'))
    // Виводимо зжатий файл main.min.css
      .pipe(dest('./'+ dist + '/css'))
    */

    // Перезагружаємо сторінку
    .pipe(browserSync.stream().on('change', browserSync.reload));
};


function scripts() {
  return src([
    // Підключаємо jQuery
    // 'node_modules/jquery/dist/jquery.min.js',

    'src/js/script.js'
  ])
    .pipe(concat('script.js'))
    // Виводимо файл main.css
    .pipe(dest(dist + '/js'))

    /*
    // Переміновуїм фойл в main.min.css
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    // Виводимо зжатий файл main.min.css
    .pipe(dest(dist + '/js'))
    */

    // Перезагружаємо сторінку
    .pipe(browserSync.stream().on('change', browserSync.reload));
};

function images() {
  return src('src/img/*')
    .pipe(imagemin())
    .pipe(dest('dist/img'))
    .pipe(webp())
    .pipe(dest('dist/img'))
}

function optimizeSvg() {
  return src('src/img/**/*.svg')
    .pipe(minSvg())
    .pipe(dest('dist/img'))
    .pipe(cheerio({
      run: ($, file) => {
        $('[fill]').removeAttr('fill')
        $('[stroke]').removeAttr('stroke')
        $('[style]').removeAttr('style')
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '.',
          example: true,
          sprite: 'sprite.svg',
        }
      },
    }))
    .pipe(replace(/id="svg--/g, 'id="icon-'))
    .pipe(dest('dist/img/svg'))
}

function fonts() {
  src('src/font/*')
    .pipe(dest(dist + '/font/'))
  src('src/font/*')
    .pipe(ttf2woff())
    .pipe(dest(dist + '/font/'))
    .pipe(dest('src/font/'))
  return src('src/font/*')
    .pipe(ttf2woff2())
    .pipe(dest(dist + '/font/'))
    .pipe(dest('src/font/'))
}

function fontsStyle(params) {

  let file_content = fs.readFileSync('src/scss/_fonts.scss');
  if (file_content == '') {
    fs.writeFile('src/scss/_fonts.scss', '', cb);
    return fs.readdir('src/font/', function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile('./src/scss/_fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}


function cb() { }

// Робими файли для роботи з слайдером Swiper.
function vendorJS() {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.js',
  ];

  return src(modules)
    .pipe(dest('dist/js'))
    .pipe(dest('src/js'));
};

function vendorCSS() {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.css',
  ];

  return src(modules)
    .pipe(dest('dist/css'))
    .pipe(dest('src/css'));
};


function client() {
  return del('./dist');
}

function watching() {
  watch(['src/scss/**/*.scss'], styles);
  watch(['src/js/**/*.js'], scripts);
  watch(["src/*.html"], html);
  watch(["src/img/**/*"], images);
}

let build = series(client, parallel(html, scripts, styles, fonts, images, optimizeSvg, vendorJS, vendorCSS), fontsStyle)

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.optimizeSvg = optimizeSvg;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
exports.build = build;
exports.watching = watching;
exports.browsersync = browsersync;
exports.vendorJS = vendorJS;
exports.vendorCSS = vendorCSS;

exports.default = parallel(build, browsersync, watching);
