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
            publicPath: '/',
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
