const path = require("path");
const copy = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/script/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new copy([
      {"from": "src/html/*", "flatten": true},
    ])
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
      // TODO: Add configuration for production builds.
      "vue$": "vue/dist/vue.esm.js",
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
