import React, {FC} from 'react';
import cn from 'classnames'
import {TFilter} from "../../shared/filters";

import './style.scss'

type Props = {
    isActive: boolean
    onClick: (filter: TFilter) => void
} & TFilter

const Filter: FC<Props> = (
    {
        type,
        title,
        id,
        onClick,
        isActive
    }) => {
    return (
        <div
            className={cn(
                'filter',
                isActive && 'filter_active'
            )}
            onClick={() => onClick({type, title, id})}
        >
            {title}
        </div>
    );
};

export default Filter;