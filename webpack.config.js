const path = require("path");

module.exports = {
  entry: "./assets/js/index.js",
  devtool: 'source-map',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
