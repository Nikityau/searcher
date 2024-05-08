import shuffle from 'shuffle-array'

import {debounce} from "../../shared/debounce";
import {TMediaAdapter, TMediaQuery} from "./types";
import {OpenverseAdapter} from "./openverse-adapter";
import {TFilter} from "../../shared/filters";
import {TMedia} from "../../shared/types";
import {UnsplashAdapter} from "./unsplash-adapter";
import {ShutterstockAdapter} from "./shutterstock-adapter";

export class MediaQuery {

    setState: (state: TMediaQuery) => void

    searchers: Array<TMediaAdapter> = [
        new OpenverseAdapter(),
        new UnsplashAdapter(),
        new ShutterstockAdapter(),
    ]

    constructor() {
        this.searchByFilter = debounce(this.searchByFilter.bind(this), 1000)
    }

    async searchByQuery(query: string, filters?: Array<TFilter>) {
        if (!query) {
            return
        }

        let newState: Array<TMedia> = null

        this.setState({
            status: 'loading',
            response: null
        })

        let isIgnoreFilter = false

        if (!filters) {
            isIgnoreFilter = true
        }
        if (filters?.find(f => f.type === 'image') || isIgnoreFilter) {
            const images = await this.searchImages(query)

            if(images !== null) {
                if(!newState) newState = []

                newState = newState.concat(images)
            }
        }
        if(filters?.find(f => f.type === 'audio') || isIgnoreFilter) {
            const audios = await this.searchAudios(query)

            if(audios !== null) {
                if(!newState) newState = []

                newState = newState.concat(audios)
            }
        }
        if(filters?.find(f => f.type === 'video') || isIgnoreFilter) {
            const videos = await this.searchVideos(query)

            if(videos !== null) {
                if(!newState) newState = []

                newState = newState.concat(videos)
            }
        }


        if (!newState) {
            this.setState({
                status: 'ok',
                response: null
            })

            return
        }

        newState = shuffle(newState)
        this.setState({
            status: 'ok',
            response: {
                filters: null,
                data: newState
            }
        })
    }

    async searchImages(query: string): Promise<Array<TMedia> | null> {
        let images: Array<TMedia> = null

        for (const s of this.searchers) {
            const res = await s.searchImage(query)

            if (!res) continue
            if (!images) {
                images = []
            }
            images = images.concat(res)
        }

        return images
    }
    async searchAudios(query: string): Promise<Array<TMedia> | null> {
        let audios: Array<TMedia> | null = null

        for (const s of this.searchers) {
            const res = await s.searchAudio(query)

            if (!res) continue
            if (!audios) {
                audios = []
            }

            audios = audios.concat(res)
        }

        return audios
    }
    async searchVideos(query: string): Promise<Array<TMedia> | null> {
        let videos: Array<TMedia> | null = null

        for (const s of this.searchers) {
            const res = await s.searchVideo(query)

            if (!res) continue
            if (!videos) {
                videos = []
            }

            videos = videos.concat(res)
        }

        return videos
    }


    searchByFilter(query: string, filters?: Array<TFilter>) {
        this.searchByQuery(query, filters)
    }
}