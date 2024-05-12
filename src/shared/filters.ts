import {nanoid} from "nanoid";

export type TFilterType = 'image' | 'video' | 'audio' | null | string

export interface TFilter {
    id: string,
    type: TFilterType,
    title: string
}

export const filters: Array<TFilter> = [
    {
        id: nanoid(),
        type: 'video',
        title: 'видео'
    },
    {
        id: nanoid(),
        type: 'audio',
        title: 'аудио'
    },
    {
        id: nanoid(),
        type: 'image',
        title: 'изображения'
    }
]