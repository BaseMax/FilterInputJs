const path = require("path");

module.exports = function(env, argv) {
  return {
    mode: argv.mode,
    devtool: argv.mode == "production" ? "source-maps" : "eval",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `index${argv.mode == "production" ? ".min" : ""}.js`
    },

    resolve: {
      extensions: [".js"]
    }
  };
};
