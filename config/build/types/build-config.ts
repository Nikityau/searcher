export type BuildMode = 'development' | 'production'

export type Device = 'mobile' | 'browser'

export interface BuildPaths {
    base: string,
    devServerBuild: string,
    src: string
    entry: string,
    output: string,
    html: {
        template: string,
        favicon: string
    }
}


export interface BuildConfig {
    mode: BuildMode,
    paths: BuildPaths
    isDev: boolean
    port: number,
    device: Device
}