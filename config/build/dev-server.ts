import {Configuration as DevServerConf} from 'webpack-dev-server'
import {BuildConfig} from "./types/build-config";

export const devServer = ({port, paths}:BuildConfig): DevServerConf => {
    return {
        static: {
            directory: paths.src
        },
        historyApiFallback: true,
        port: port,
        open: true,
    }
}