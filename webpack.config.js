const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
	    {
	    	test: /\.(png|svg|jpg|jpeg|gif)$/,
		    use: [
		    	'url-loader'
		    ]
	    }
    ]
  },

  // Dev tools are provided by webpack
  // Source maps help map errors to original react code
  devtool: 'cheap-module-eval-source-map',

  // Configuration for webpack-dev-server
  devServer: {
    hot: true,
    port: 8080
  },
};
