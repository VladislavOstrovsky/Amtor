"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: [
                "./src/styles/main.{scss,sass}",
                "./src/styles/home.{scss,sass}",
                "./src/styles/original-catalogs.{scss,sass}",
                "./src/styles/catalog-to.{scss,sass}",
                "./src/styles/catalog-tec-doc.{scss,sass}",
                "./src/styles/body-parts.{scss,sass}",
                "./src/styles/passenger-tires.{scss,sass}",
                "./src/styles/lamp-catalog.{scss,sass}",
                "./src/styles/engine-oils.{scss,sass}",
                "./src/styles/search-results.{scss,sass}",
                "./src/styles/errors.{scss,sass}",
                "./src/styles/basket.{scss,sass}",
                "./src/styles/contacts.{scss,sass}",
                "./src/styles/lc.{scss,sass}",
                "./src/styles/lc-balance.{scss,sass}",
            ],
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff,webp}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,webp}"
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"]));

export default development;
