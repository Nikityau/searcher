import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {BuildConfig} from "./types/build-config";

export const pluginsConf = ({mode, paths, isDev}: BuildConfig):webpack.WebpackPluginInstance[] => {
    const plugins: webpack.WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            minify: isDev,
            favicon: paths.html.favicon,
            template: paths.html.template
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash].css',
            ignoreOrder: true,
        })
    ]


    return plugins
}