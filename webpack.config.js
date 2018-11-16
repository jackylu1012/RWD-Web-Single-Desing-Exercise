const ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: './dist/css/main.css',
});

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './dist/js/bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../images/'
                    }
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                    }
                  }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: {
                loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "../fonts/"
                    }
                }
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            }
        ]
    },
    plugins:[
        extractPlugin,
        new CopyWebpackPlugin([
            { from: 'src/images/', to: 'dist/images/' },
            { from: 'src/fonts', to: 'dist/fonts/' }
        ])
    ]
};