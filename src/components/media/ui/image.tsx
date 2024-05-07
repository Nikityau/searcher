import React, {FC} from 'react';
import {TMedia} from "../../../shared/types";

type Props = {
    
} & Pick<TMedia, 'preview' | 'license'>

const Image: FC<Props> = (
    {
        preview,
        license
    }) => {
    return (
        <div className={'media__image'}
            style={{
                backgroundImage: `url(${preview})`
            }}
        >
            <div className={'media__image-license'}>
                Лицензия: {license}
            </div>
        </div>
    );
};

export default Image;