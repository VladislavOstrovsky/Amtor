"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.25rem", // gutter width - 30px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "4.375rem" // side fields - 70px
        },
        breakPoints: {
            xs: {
                width: "20rem" // 320px
            },
            sm: {
                width: "36rem" // 576px
            },
            md: {
                width: "48rem" // 768px
            },
            lg: {
                width: "62rem" // 992px
            },
            xl: {
                width: "81.25rem" // 1300px
            }
        }
    });
    cb();
});
