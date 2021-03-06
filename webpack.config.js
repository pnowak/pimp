module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/dist', 
        filename: '/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest']
                }
            }
        ]
    },
    stats: {
        // Nice colored output
        colors: true
    }
};