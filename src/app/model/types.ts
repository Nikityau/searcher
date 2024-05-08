import {TMedia} from "../../shared/types";

export type TMediaQuery = {
    status: 'loading' | 'ok' | null,
    response: TMediaQueryResponse | null,
    error?: string
}

export type TMediaQueryResponse = {
    filters: any[],
    data: Array<TMedia>
}

export interface TMediaAdapter {
    searchImage(query: string): Promise<Array<TMedia> | null>

    searchVideo(query: string): Promise<Array<TMedia> | null>

    searchAudio(query: string): Promise<Array<TMedia> | null>
}

export abstract class MediaAdapter implements TMediaAdapter {
    async searchImage(query: string): Promise<Array<TMedia> | null> {
        return null
    }

    async searchAudio(query: string): Promise<Array<TMedia> | null> {
        return null
    }

    async searchVideo(query: string): Promise<Array<TMedia> | null> {
        return null
    }
}

export type TOpenverseImageRes = {
    page_count: number,
    page_size: number,
    page: number,
    results: Array<{
        id: string,
        url: string,
        license: string,
        title: string
    }>
}

export type TShutterStockImageRes = {
    data: Array<{
        id: string,
        assets: {
            preview: {
                url: string
            }
        }
    }>
    page: number,
    per_page: number,
    total_count: number
}

export type TUnsplashImageRes = {
    results: Array<{
        id: string,
        urls: {
            regular: string
        },
    }>
}