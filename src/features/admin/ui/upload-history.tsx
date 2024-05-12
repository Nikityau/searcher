import React from 'react';
import {nanoid} from "nanoid";
import UploadData from "./upload-data";
import {usePopUp} from "../../../shared/hooks/use-pop-up";
import produce from "immer";

/*username,
    date,
    type,
    url,
    license,
    preview,
    title*/

const UploadHistory = () => {

    const [state, setState] = React.useState(
        [
            {
                id: nanoid(),
                username: 'jack-london',
                type: 'audio',
                url: 'https://youtube.com',
                license: 'нет',
                preview: null,
                title: 'unique'
            },
            {
                id: nanoid(),
                username: 'mark-tune',
                type: 'audio',
                url: 'https://youtube.com',
                license: 'нет',
                preview: null,
                title: 'auto-tune'
            },
            {
                id: nanoid(),
                username: 'patrik',
                type: 'audio',
                url: 'https://youtube.com',
                license: 'нет',
                preview: null,
                title: 'sponge'
            },
        ]);

    const {render, open} = usePopUp()

    const onClick = (id) => {
        setState(prev => {
            return produce(prev, draft => draft.filter(d => d.id !== id))
        })

        open('Успех', 'Файл удален')
    }

    return (
        <div className={'upload-history'}>
            {
                state.map(s => (
                    <UploadData
                        id={s.id}
                        key={s.id}
                        title={s.title}
                        preview={s.preview}
                        license={s.license}
                        type={s.type}
                        url={s.url}
                        username={s.username}
                        date={new Date()}
                        onClick={onClick}
                    />
                ))
            }
            {
                render()
            }
        </div>
    );
};

export default UploadHistory;