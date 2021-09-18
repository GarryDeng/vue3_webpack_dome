const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: "development",
    entry: {
        main: './main.ts',
    },
    devServer: {
        static: './dist'
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Output Management'
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['vue-style-loader','css-loader'] },
            { 
                test: /\.ts$/, 
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/.vue$/]
                    }
                }] 
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts','.vue', '.js', '.json'],
        alias: {
            '@src': path.join(__dirname, 'src'),
        },
    }
    // watch: true
}