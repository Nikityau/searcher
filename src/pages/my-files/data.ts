import {nanoid} from "nanoid";

import img from './assets/film.png'
import video from './assets/image.png'

export const myFileData = [
    {
        id: nanoid(),
        type: 'image',
        url: 'https://www.youtube.com',
        preview: img
    },
    {
        id: nanoid(),
        type: 'video',
        url: 'https://www.youtube.com/',
        preview: video,
    },
    {
        id: nanoid(),
        type: 'audio',
        url: 'https://www.youtube.com/',
        title: 'fast'
    }
]