import {useState} from "react";
import {TMedia} from "../types";
import axios from "axios";

export const useOpenverse = () => {
    const [clientId] = useState<string>('ycWwsK6FEQs8Hn1qDJoSDrijVqYQdSXM4QxNCmPD')
    const [clientSecret] = useState<string>('jdQCned634Zeq1rZic3NQGrkemSRUoTmQkgfAiSV7HP4qc8yMFu4sXflMmBVKoP6o0JML2SKbjXYHxDH5Y9Iqw5JpS46v17rj79e7s0CTXk4HgB2e80qAkAuEIVm9uO2')
    const [token] = useState<string>('jEOadSDlJBDtCWprLWkZNPcaDieLrC')

    const url = 'https://api.openverse.engineering/v1/'


    const searchImage = async (query: string): Promise<Array<TMedia> | null> => {
        try {
            /*const {data} = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: query
                }
            })*/
        } catch (e) {
            console.error(e)

            return null
        }
    }

    const searchAudio = async (query: string): Promise<Array<TMedia> | null> => {
        return null
    }

    return {
        searchAudio,
        searchImage
    }
}