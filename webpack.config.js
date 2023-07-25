const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";
const isMicroFE = process.env.IS_MICRO_FE === "true";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  target: isDevelopment ? "web" : "browserslist",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(s[ac]|c)ss$/i, //support sass,scss,css
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean
                ),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin("./public/neko.png"),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ].filter(Boolean),
  optimization: {
    // don't minimize so we can debug
    minimize: false,
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devtool: "source-map",
  devServer: {
    port: 3006,
    static: "./dist",
    hot: !isMicroFE,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
