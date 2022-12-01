const path = require("path");

module.exports = {
  name: "chattingApp",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./src/index"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};