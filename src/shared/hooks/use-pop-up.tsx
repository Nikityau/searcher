import React from "react";
import {useState} from "react";
import {createPortal} from "react-dom";

import './pop-up.scss'
import Button from "../button";

export const usePopUp = () => {
    const [state, setState] = useState<boolean>(false)
    const [el, setEl] = React.useState(
        <div className={'pop-up'}>
            <h3>{'title'}</h3>
            <p>{'description'}</p>
            <Button
                text={'закрыть'}
                onClick={() => setState(false)}
            />
        </div>
    );

    const open = (title = 'title', description = 'description') => {
        setEl(
            <div className={'pop-up'}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button
                    text={'закрыть'}
                    onClick={() => setState(false)}
                />
            </div>
        )
        setState(true)
    }

    const render = () => {
        return state && createPortal(
            el,
            document.querySelector("#root")
        )
    }


    return {
        open,
        render
    }
}