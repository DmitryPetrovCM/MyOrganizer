const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.bundle.js',
    chunkFilename: "main.chunk.js",
    path: path.join(__dirname, '../build')
  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
    inject: 'body'
  })],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
      containers: path.resolve(__dirname, '../src/containers'),
      views: path.resolve(__dirname, '../src/views'),
      utils: path.resolve(__dirname, '../src/utils'),
      assets: path.resolve(__dirname, '../src/assets'),
      constants: path.resolve(__dirname, '../src/constants'),
      styles: path.resolve(__dirname, '../src/styles'),
      store: path.resolve(__dirname, '../src/store')
    },
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
              options: {
                injectType: 'styleTag'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]'
              },
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: 'url-loader'
      }
    ]
  }
};
