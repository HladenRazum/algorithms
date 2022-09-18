const path = require("path");

module.exports = {
   devtool: "inline-source-map",
   mode: "development",
   entry: "./src/index.ts",
   module: {
      rules: [
         {
            // for files with extension .ts
            test: /\.ts$/,
            // tranform them with ts-loader
            use: "ts-loader",
            // for all files located in "currentDirectory/src"
            include: [path.resolve(__dirname, "src")],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               // Creates `style` nodes from JS strings
               "style-loader",
               // Translates CSS into CommonJS
               "css-loader",
               // Compiles Sass to CSS
               "sass-loader",
            ],
         },
      ],
   },
   // resolve pathing for ts files
   resolve: {
      extensions: [".ts", ".js"],
   },
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "public"),
   },
};
