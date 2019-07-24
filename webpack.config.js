var path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        // filename: './public/bundle.js'
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};
