module.exports = {
  entry: './dist/index.ts',
  output: {
    filename: './[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      loader: 'ts-loader'
    }]
  }
}