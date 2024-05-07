import {useEffect, useState} from "react";
import produce from "immer";
import {TFilter} from "../../shared/filters";
import {TMedia, TSearcher} from "../../shared/types";
import {useOpenverse} from "../../shared/hooks/use-openverse";
import {useShutterstock} from "../../shared/hooks/use-shutterstock";
import {useUnsplash} from "../../shared/hooks/use-unsplash";
import {mediaData} from "../../shared/data";

export const useSearcher = () => {
    const [query, setQuery] = useState<string>("")
    const [filters, setFilters] = useState<Array<TFilter>>([])
    const [data, setData] = useState<Array<TMedia> | null>(mediaData)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const openverse = useOpenverse();
    const shutterstock = useShutterstock();
    const unsplash = useUnsplash()

    const videoSearcher: Array<TSearcher> = [
        shutterstock.searchVideo
    ]

    const audioSearcher: Array<TSearcher> = [
        openverse.searchAudio,
    ]

    const imageSearcher: Array<TSearcher> = [
        unsplash.searchImage,
        openverse.searchImage
    ]

    useEffect(() => {
        search()
    }, [filters, query])

    const onChangeFilter = (filter: TFilter) => {
        if (filters.find(f => f.type === filter.type)) {
            setFilters(prev => {
                return produce(prev, draft => {
                    draft = draft.filter(f => f.type !== filter.type)
                    return draft
                })
            })

            return
        }

        setFilters(prev => {
            return produce(prev, draft => {
                draft.push(filter)
            })
        })
    }

    const search = async () => {
        if (!query) return
        console.log('search')

        setIsLoading(true)

        let findData: Array<TMedia> = [];

        if(filters.length === 0) {
            const finded = await searchByFilter(query, { type: null, id: null, title: null });
            if (finded !== null)
                findData = findData.concat(finded);
        } else {
            for (let i = 0; i < filters.length; ++i) {
                const finded = await searchByFilter(query, filters[i]);
                if (finded === null) continue
                findData = findData.concat(finded);
            }
        }

        if (findData.length !== 0) {
            setData(findData)
        }

        setIsLoading(false)
    }

    const searchByFilter = async (query: string, filter: TFilter): Promise<Array<TMedia> | null> => {
        switch (filter.type) {
            case "video":
                console.log('video search')
                return searchWithSearcher(query, videoSearcher)
            case "audio":
                console.log('audio search')
                return searchWithSearcher(query, audioSearcher)
            case "image":
                console.log('image search')
                return searchWithSearcher(query, imageSearcher)
            default:
                console.log('total search')
                let searchers: Array<TSearcher> = []
                searchers = searchers.concat(audioSearcher).concat(videoSearcher).concat(imageSearcher)

                return searchWithSearcher(query, searchers);
        }
    }

    const searchWithSearcher = async (query: string, searcher: Array<TSearcher>): Promise<Array<TMedia> | null> => {
        let res: Array<TMedia> = null

        for (let i = 0; i < searcher.length; ++i) {
            const r = await searcher[i](query);
            if (r === null) continue;

            if (res === null) {
                res = []
            }
            res.concat(r)
        }

        return res;
    }

    return {
        filters,
        onChangeFilter,
        setQuery,
        isLoading,
        data
    }
}