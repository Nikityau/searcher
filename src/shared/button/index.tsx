import React from 'react';

import './style.scss'

const Button = ({onClick, text}) => {
    return (
        <div className={'button-ui'} onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;