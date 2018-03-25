const path = require('path');
// entry -> output

//console.log("dirname:",__dirname);
//console.log("joined path:",path.join(__dirname,'public'));
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    // loader - lets u customize the behavior when it loads a file
    // how we can transfom a file when webpack sees it - jsx, scss etc
    // setting up of loader happens via the module property on our object 
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]

    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
}

