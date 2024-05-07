import {BuildMode} from "./build-config";

export interface EnvVars {
    mode: BuildMode
    port: number
}