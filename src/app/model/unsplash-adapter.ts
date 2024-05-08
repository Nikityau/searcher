import {MediaAdapter, TUnsplashImageRes} from "./types";
import {TMedia} from "../../shared/types";
import axios from "axios";

export class UnsplashAdapter extends MediaAdapter {

    clientId = 'n6LQrS6oNWd6DTkEy2s-maMZmuWSl71F-mFNhLvyRLs'
    url = 'https://api.unsplash.com'

    async searchImage(query: string): Promise<Array<TMedia> | null> {
        try {
            const {data} = await axios.get<TUnsplashImageRes>(`${this.url}/search/photos`, {
                params: {
                    query: query,
                    client_id: this.clientId
                }
            })
            if (!data?.results) {
                return null
            }

            const resData: Array<TMedia> = []

            for (let res of data.results) {
                resData.push({
                    id: res.id,
                    url: res.urls.regular,
                    license: 'cco',
                    preview: res.urls.regular,
                    type: 'image'
                })
            }

            return resData;

        } catch (e) {
            console.error(e)
        }

        return null
    }
}