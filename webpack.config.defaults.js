var NpmInstallPlugin = require("npm-install-webpack-plugin");
const HelloWorldPlugin = require('./hello-world');
var path = require("path");

module.exports = {
    context: process.cwd(),

    externals: [],

    module: {
        loaders: [{
                test: /\.(js)$/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                },
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'bower_components')]
            },
            {
                test: /\.(jsx)$/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                },
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'bower_components')]
            },
            {
                test: /\.coffee$/,
                loader: "coffee-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader!style-loader!autoprefixer-loader",
                options: {
                    localIdentName: "[name]-[local]--[hash:base64:5]"
                }
            },
            {
                test: /\.eot$/,
                loader: "file-loader"
            },
            {
                test: /\.scss$/,
                loader: "css-loader!sass-loader"
            },
            {
                test: /\.less$/,
                loader: "css-loader!less-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8192
                }
            }, // Inline base64 URLs for <= 8K images
            {
                test: /\.svg$/,
                loader: "url-loader",
                options: {
                    mimetype: "image/svg+xml"
                }
            },
            {
                test: /\.ttf$/,
                loader: "url-loader",
                options: {
                    mimetype: "application/octet-stream"
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader",
                options: {
                    mimetype: "application/font-woff"
                }
            },
        ],
    },

    output: {
        chunkFilename: "[id].[hash:5]-[chunkhash:7].js",
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
        filename: "[name].js",
    },

    plugins: [

        new HelloWorldPlugin(),

        new NpmInstallPlugin({
            dev: function (module, path) {
                return [
                    "babel-preset-react-hmre",
                    "webpack-dev-middleware",
                    "webpack-hot-middleware",
                ].indexOf(module) !== -1;
            },
            npm: 'yarn',
            npmSaveDev: '--dev',
            npmSave : '',
            npmInstall: 'add'
        }),
    ],

    resolve: {        
        modules: [
            path.join(process.cwd(), "lib"),
            "node_modules",
        ],
        extensions: ['.json', '.js', '.jsx', '.css', '.coffee', ],
    },
    
};