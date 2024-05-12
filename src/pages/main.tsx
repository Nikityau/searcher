import React from 'react';

import Filters from "../components/filters";
import MediaContent from "../components/media-content";
import Loader from "../components/loader";
import {useMediaQuery} from "../app/hooks/use-media-query";
import Header from "../features/header";
import Nav from "../features/nav";

const Main = () => {

    const {
        query,
        filters,
        setQueryStr,
        onChangeFilter
    } = useMediaQuery()

    return (
        <div className={'main'}>
            <Header setQueryStr={setQueryStr}/>
            <Filters
                chosenFilters={filters}
                onClickFilter={onChangeFilter}
            />
            <MediaContent
                media={query?.response?.data}
            />
            {
                query.status === 'loading' &&
                <Loader/>
            }
        </div>
    );
};

export default Main;