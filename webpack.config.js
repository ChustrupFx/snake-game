const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
    stats: {
        errorDetails: true,
    },
};
