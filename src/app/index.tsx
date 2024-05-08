import React from "react";

import './style/index.scss'

import InputQuery from "../components/input-query";

import Filters from "../components/filters";
import Loader from "../components/loader";
import MediaContent from "../components/media-content";
import {useMediaQuery} from "./hooks/use-media-query";

const App = () => {
    const {
        query,
        filters,
        setQueryStr,
        onChangeFilter
    } = useMediaQuery()

    return (
       <div className={'app'}>
           <InputQuery
               onChange={setQueryStr}
           />
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

export default App;