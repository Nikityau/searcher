import {useEffect, useState} from "react";
import produce from "immer";
import {TFilter} from "../../shared/filters";
import {debounce} from "../../shared/debounce";
import {MediaQuery} from "../model/media-query";
import {TMediaQuery} from "../model/types";

const mq = new MediaQuery()

export const useMediaQuery = () => {
    const [queryStr, setQueryStr] = useState<string>("")
    const [filters, setFilters] = useState<Array<TFilter>>(null)
    const [query, setQuery] = useState<TMediaQuery>({
        status: null,
        response: null
    })

    useEffect(() => {
        mq.setState = setQuery;
    }, []);

    useEffect(() => {
        search()
    }, [queryStr])

    useEffect(() => {
        searchByFilters()
    }, [filters]);


    const searchByFilters = () => {
        mq.searchByFilter(queryStr, filters)
    }

    const search = () => {
        mq.searchByQuery(queryStr, filters)
    }

    const onChangeFilter = (filter: TFilter) => {
        if (filters?.find(f => f.type === filter.type)) {
            setFilters(prev => {
                return produce(prev, draft => {
                    draft = draft.filter(f => f.type !== filter.type)
                    if (draft.length === 0)
                        draft = null

                    return draft
                })
            })
            return
        }

        setFilters(prev => {
            return produce(prev, draft => {
                if (!draft)
                    draft = []
                draft.push(filter)
                return draft
            })
        })
    }

    return {
        query,
        filters,
        onChangeFilter,
        setQueryStr: debounce(setQueryStr, 1000)
    }
}