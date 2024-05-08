import React from 'react';

import './style.scss'

import loader from './assets/img_1.png'

const Loader = () => {
    return (
        <div className={'loader'}>
            <img src={loader} alt={'loading...'}/>
        </div>
    );
};

export default Loader;