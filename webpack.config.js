const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [ 
        new webpack.ProvidePlugin({ 
            "jQuery": "jquery", 
            "window.jQuery": "jquery", 
            "jquery": "jquery", 
            "window.jquery": "jquery", 
            "$": "jquery", 
            "window.$": "jquery" 
        }) 
    ],
    
    entry: {
        main: "./src/js/index.js",
        home: "./src/js/import/pages/home.js",
        sign_up: "./src/js/import/pages/sign_up.js",
        original_catalogs: "./src/js/import/pages/original_catalogs.js",
        catalog_to: "./src/js/import/pages/catalog_to.js",
        catalog_tec_doc: "./src/js/import/pages/catalog_tec_doc.js",
        body_parts: "./src/js/import/pages/body_parts.js",
        passenger_tires: "./src/js/import/pages/passenger_tires.js",
        lamp_catalog: "./src/js/import/pages/lamp_catalog.js",
        engine_oils: "./src/js/import/pages/engine_oils.js",
        basket: "./src/js/import/pages/basket.js",
        contacts: "./src/js/import/pages/contacts.js",
        lc: "./src/js/import/pages/lc.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components"),
        }
    }
};
