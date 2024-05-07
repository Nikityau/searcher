import React, {FC} from 'react';

import './style.scss'

import {filters, TFilter} from "../../shared/filters";
import Filter from "../filter";

type Props = {
    chosenFilters: Array<TFilter>
    onClickFilter: (filter: TFilter) => void
}

const Filters: FC<Props> = ({onClickFilter, chosenFilters}) => {
    return (
        <div className={'filters'}>
            <div className={'filters__list'}>
                {
                    filters.map(f => (
                        <Filter
                            isActive={chosenFilters?.find(fc => fc.type == f.type) !== undefined}
                            onClick={onClickFilter}
                            id={f.id}
                            type={f.type}
                            title={f.title}
                            key={f.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Filters;