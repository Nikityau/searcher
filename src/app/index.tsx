import React from "react";

import './style/index.scss'

import InputQuery from "../components/input-query";

import {debounce} from "../shared/debounce";
import {useSearcher} from "./hooks/use-searcher";
import Filters from "../components/filters";
import Loader from "../components/loader";
import MediaContent from "../components/media-content";

const App = () => {
    const {
        onChangeFilter,
        filters,
        setQuery,
        isLoading,
        data
    } = useSearcher()

    return (
       <div className={'app'}>
           <InputQuery
               onChange={debounce(setQuery, 500)}
           />
           <Filters
               chosenFilters={filters}
               onClickFilter={onChangeFilter}
           />
           <MediaContent
            media={data}
           />
           {
               isLoading &&
               <Loader/>
           }
       </div>
    );
};

export default App;