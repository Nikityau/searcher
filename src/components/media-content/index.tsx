import React, {FC} from 'react';
import StackGrid from "react-stack-grid";
import {TMedia} from "../../shared/types";

import './style.scss'
import Media from "../media";

type Props = {
    media: Array<TMedia>
}

const MediaContent: FC<Props> = (
    {
        media
    }) => {



    return (
        <div className={'media-content'}>
            {
                !media &&
                <h2>Пусто</h2>
            }
            {
                media &&
                <StackGrid
                    columnWidth={150}
                >
                    {
                       media.map(m => (
                            <Media
                                key={m.id}
                                id={m.id}
                                type={m.type}
                                url={m.url}
                                license={m.license}
                                title={m?.title}
                                preview={m?.preview}
                            />
                        ))
                    }
                </StackGrid>
            }
        </div>
    );
};

export default MediaContent;