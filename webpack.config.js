import webpack from 'webpack';
import path from 'path';

const config = {
    entry: './react/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style-loader', 'css-loader'], exclude: /node_modules/},
            {test: /\.js$/, loaders: ['babel-loader']}
        ]
    }
};

export default config;