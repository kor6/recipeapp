
const path = require('path'); //
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'], //my entry point
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: { //loadereknek
        rules: [
            {
                test: /\.js$/, //megnezi hogy a file vege .js-e, ha ay apply babael loader
                exclude: /node_modules/, //itt ne keressen js fileokat
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
    
};

//webpack 4 concepts: entry point, output, loaders, plugins

/*
plugins complete processing of files
*/
//Babel ES6 bol ES5 ot keszit
/*
Preset: collection of code transform plugins, aplly transformation to my code
env--> envireonment

*/