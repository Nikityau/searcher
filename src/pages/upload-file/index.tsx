import React, {useRef} from 'react';

import './style.scss'

import Button from "../../shared/button";
import {usePopUp} from "../../shared/hooks/use-pop-up";

const UploadFile = () => {

    const [name, setName] = React.useState("")
    const [descr, setDescr] = React.useState("")
    const [file, setFile] = React.useState("")

    const {open, render} = usePopUp()

    const onClick = () => {
        if(file.includes('.mp4')) {
            open('Ошибка', "Файл не проходит проверку по Авторскому Праву")

            return
        }

        setName("")
        setDescr("")
        setFile("")


        open('Успех', 'файл загружен успешно')
    }

    return (
        <div className={'upload-file'}>
            <h2>Здесь вы можете загрузить файл</h2>
            <div className={'upload-file__form'}>
                <input
                    value={name}
                    onChange={({target: {value}}) => setName(value)}
                    type={'text'}
                    placeholder={'name'}
                />
                <textarea
                    value={descr}
                    onChange={({target: {value}}) => setDescr(value)}
                    placeholder={'description'}
                />
                <input
                    value={file}
                    onChange={({target: {value}}) => setFile(value)}
                    type={'file'}
                    accept={'image/*, audio/*, video/*'}
                />
                <Button
                    text={'Загрузить'}
                    onClick={onClick}
                />
            </div>
            {render()}
        </div>
    );
};

export default UploadFile;