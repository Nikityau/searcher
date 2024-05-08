import {MediaAdapter, TOpenverseImageRes} from "./types";
import {TMedia} from "../../shared/types";
import axios from "axios";

export class OpenverseAdapter extends MediaAdapter {
    clientId = 'ycWwsK6FEQs8Hn1qDJoSDrijVqYQdSXM4QxNCmPD'
    clientSecret = 'jdQCned634Zeq1rZic3NQGrkemSRUoTmQkgfAiSV7HP4qc8yMFu4sXflMmBVKoP6o0JML2SKbjXYHxDH5Y9Iqw5JpS46v17rj79e7s0CTXk4HgB2e80qAkAuEIVm9uO2'
    grantType = 'client_credentials'
    contentType = 'application/x-www-form-urlencoded'
    token = 'SchwVXAwUPPKNS84NcNmFZ7rM1lO52'
    url = 'https://api.openverse.engineering/v1/'

    async searchImage(query: string): Promise<Array<TMedia> | null> {
        try {
            const {data} = await axios.get<TOpenverseImageRes>(`${this.url}images/`, {
                params: {
                    q: query,
                },
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })

            if (!data?.results) {
                return null
            }

            const resData: Array<TMedia> = []

            for (let res of data.results) {
                resData.push({
                    id: res.id,
                    url: res.url,
                    license: res.license,
                    preview: res.url,
                    type: 'image'
                })
            }

            return resData;

        } catch (e) {
            console.error(e)
        }

        return null
    }
    async searchAudio(query: string): Promise<Array<TMedia> | null> {
        try {
            const {data} = await axios.get(`${this.url}audio/`, {
                params: {
                    q: query
                },
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })

            if (!data?.results) {
                return null
            }

            const resData: Array<TMedia> = []

            for (let res of data.results) {
                resData.push({
                    id: res.id,
                    url: res.url,
                    title: res.title,
                    license: res.license,
                    preview: res.url,
                    type: 'audio'
                })
            }

            return resData;
        } catch (e) {
            console.error(e)
        }

        return null
    }
}