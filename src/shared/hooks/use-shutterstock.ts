import {TMedia} from "../types";

export const useShutterstock = () => {

    const searchVideo = async (query: string): Promise<Array<TMedia> | null> => {

        return null
    }

    const searchAudio = async (query: string): Promise<Array<TMedia> | null> => {

        return null
    }

    return {
        searchVideo,
        searchAudio
    }
}