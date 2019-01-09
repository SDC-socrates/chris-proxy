const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
  },
};
