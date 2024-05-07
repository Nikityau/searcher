import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildConfig} from "./types/build-config";

export const rulesConfig = ({}:BuildConfig): webpack.RuleSetRule[] => {
    const exclude_var = /node_modules/

    return [
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        },
        {
            test: /\.s[ac]ss$/,
            exclude: exclude_var,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
        },
        {
            test: /\.[cm]js?x?$/,
            exclude: exclude_var,
            use: ['swc-loader']
        },
        {
            test: /\.tsx?/,
            exclude: exclude_var,
            use: ['swc-loader']
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            type: 'asset/resource'
        },
    ]
}