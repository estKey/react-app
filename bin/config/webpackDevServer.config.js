const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        app: ['@babel/polyfill', path.resolve(__dirname, '../../src/index.js')],
        vendor: ['react', 'react-dom', '@babel/polyfill'],
    },
    output: {
        path: path.resolve(__dirname, '../../public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        "@babel/plugin-transform-runtime",
                        "@babel/plugin-proposal-class-properties"
                    ]
                },
                exclude: /node_modules/
            }
        ]
    }
};
