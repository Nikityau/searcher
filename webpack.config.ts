import path from 'path'

import {buildConfig} from "./config/build/build-config";
import {EnvVars} from "./config/build/types/env-vars";
import {BuildMode} from "./config/build/types/build-config";

export default (env: EnvVars) => {

    const mode: BuildMode = env.mode || 'development'
    const port: number = env.port || 3000

    const base = path.resolve(__dirname)
    const src = path.resolve(__dirname, 'src')
    const entry = path.resolve(__dirname, 'src', 'index.tsx')
    const output = path.resolve(__dirname, 'docs')
    const html = path.resolve(__dirname, 'public', 'index.html')
    const favicon = path.resolve(__dirname, 'public', 'assets', 'favicon.svg')
    const devServerBuild = path.resolve(__dirname, 'dev-server')

    return buildConfig({
        mode,
        isDev: mode == 'development',
        port,
        paths: {
            base,
            entry,
            output,
            devServerBuild,
            src,
            html: {
                favicon,
                template: html
            }
        },
        device: 'browser'
    })
}