import React, {FC} from 'react';
import {TMedia} from "../../shared/types";

import './style.scss'
import cn from "classnames";
import Image from "./ui/image";
import Video from "./ui/video";
import Audio from "./ui/audio";

type Props = {

} & TMedia

const Media: FC<Props> = (
    {
        type,
        preview,
        url,
        title,
        license,
        id,
        subTitle,
        date
    }) => {
    return (
        <a href={url} target={'_blank'}>
            <div className={cn(
                'media',
                `media_${type}`
            )}>
                {
                    type === 'image' &&
                    <Image
                        preview={preview}
                        license={license}
                    />
                }
                {
                    type === 'video' &&
                    <Video
                        preview={preview}
                        license={license}
                    />
                }
                {
                    type === 'audio' &&
                    <Audio
                        title={title}
                        license={license}
                    />
                }
            </div>
        </a>
    );
};

export default Media;