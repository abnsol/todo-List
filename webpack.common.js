const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/modules/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/page/template.html', 
      filename: 'index.html',
    }),
  ],
  module: {
        rules:[
            {
                test:/\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};


