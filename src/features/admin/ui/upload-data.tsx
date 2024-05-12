import React from 'react';
import Media from "../../../components/media";
import {nanoid} from "nanoid";
import Button from "../../../shared/button";

const UploadData = (
    {
        id,
        username,
        date,
        type,
        url,
        license,
        preview,
        title,
        onClick
    }) => {
    return (
        <div className={'upload-data'}>
            <span>имя пользователя - {username}</span>
            <span>дата загрузки - {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</span>
            <Media
                id={nanoid()}
                type={type}
                url={url}
                license={license}
                preview={preview}
                title={title}
            />
            <Button
                text={'удалить с бд'}
                onClick={() => onClick(id)}
            />
        </div>
    );
};

export default UploadData;