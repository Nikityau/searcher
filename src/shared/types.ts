import {TFilterType} from "./filters";

export type TMediaType = TFilterType;

export type TSearcher = (query: string) => Promise<Array<TMedia> | null>

export interface TMedia {
    id: string,
    type: TMediaType,
    preview?: string,
    title?: string,
    subTitle?: string,
    date?: string,
    url: string,
    license: string
}