import webpack  from 'webpack'

import {BuildConfig} from "./types/build-config";
import {pluginsConf} from "./plugins-conf";
import {rulesConfig} from "./rules-config";
import {resolveConf} from "./resolve-conf";
import {devServer} from "./dev-server";

export const buildConfig = (conf:BuildConfig): webpack.Configuration => {

    const {paths, mode, isDev} = conf

    return {
        entry: paths.entry,
        mode,
        resolve: resolveConf(),
        output: {
            path: paths.output,
            filename: 'js/[contenthash].js',
            assetModuleFilename: "assets/[name][ext]",
            publicPath: './',
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? devServer(conf) : undefined,
        plugins: pluginsConf(conf),
        module: {
            rules: rulesConfig(conf)
        }
    }
}

/*
* entry: path.resolve(__dirname, 'src', 'index.tsx'),
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                app: path.resolve(__dirname, 'src', 'app'),
                pages: path.resolve(__dirname, 'src', 'pages'),
                widgets: path.resolve(__dirname, 'src','widgets'),
                features: path.resolve(__dirname, 'src', 'features'),
                entities: path.resolve(__dirname, 'src', 'entities'),
                shared: path.resolve(__dirname, 'src', 'shared')
            },
        },
        output: {
            filename: "js/[name].[contenthash].bundle.js",
            assetModuleFilename: "assets/[name][ext]",
            sourceMapFilename: "[name].js.map",
            path: outputPathByDevice(device),
            publicPath: device === "WEBVIEW" ? "./" : "/",
            clean: true
        },
        mode: mode === "PROD" ? "production" : "development",
        optimization: {
            minimize: mode === "PROD",
            minimizer: mode === "PROD" ? [
                new TerserPlugin({
                    minify: TerserPlugin.uglifyJsMinify
                })
            ] : []
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'src')
            },
            historyApiFallback: true,
            compress: false,
            port: 3000,
            open: true,
            hot: true,
            client: {
                reconnect: true
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                favicon: path.resolve(__dirname, 'public', 'assets', 'favicon.svg'),
                minify: false,
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].bundle.css',
                ignoreOrder: true
            }),
        ],
        module: {
            rules: [
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
                    include: path.resolve(__dirname, 'src'),
                    exclude: exclude_var,
                    use: ['swc-loader']
                },
                {
                    test: /\.tsx?/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: exclude_var,
                    use: ['swc-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    type: 'asset/resource'
                },
            ]
        }
*
* */