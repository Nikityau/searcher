import React from 'react';
import InputQuery from "../../components/input-query";
import User from "../user";

import './style.scss'

const Header = ({setQueryStr}) => {
    return (
        <div className={'header'}>
            <InputQuery
                onChange={setQueryStr}
            />
            <User/>
        </div>
    );
};

export default Header;