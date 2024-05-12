import axios from "axios";
import {MediaAdapter, TShutterStockImageRes} from "./types";
import {TMedia} from "../../shared/types";


const TOKEN = 'v2/N3FPMjJ6Rktod04wUWQxU1pxanZHNUsyT1dHRkFUVWEvNDMwNTI0MjUxL2N1c3RvbWVyLzQvdUw2SHkzZVloRk1KeV9kYUpxMkxRUmdHR0thbTJZenZPb0ZteXM5SThzTHNhTk1fWlZQaFlJNDhxWmVXUG5ZWHlhZnFJWUotSFhwYWFxa1FCNGNFS01YaE5HTHRLSVRyX2M4RmYwUnh1b3cwREI2VnpkWVpReWlwWDdTdXduSy1iNmRjMnhOSGszczVGS21YVGRCb3ctVWRfZmFIRnJQangxRmxveW1nekljcmJvbDRQRDJBMTZEOTZ3MXJyZGhRU0t3MzBqZ05WZzN4bUk2YWFaVllMZy9DaTYzdlRtcmtIRXVQZ2w4SzhhM3hR'


export class ShutterstockAdapter extends MediaAdapter {
    token = TOKEN
    url = 'https://api.shutterstock.com/v2/'

    async searchImage(query: string): Promise<Array<TMedia> | null> {
        try {
            const {data} = await axios.get<TShutterStockImageRes>(`${this.url}images/search`,  {
                params: {
                    query
                },
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })

            if(!data.data || data.data.length === 0) return null

            const resData: Array<TMedia> = []

            for (let res of data.data) {
                resData.push({
                    id: res.id,
                    url: res.assets.preview.url,
                    license: 'cc0',
                    preview: res.assets.preview.url,
                    type: 'image'
                })
            }

            return resData;

        } catch (e) {
            console.error(e)
        }


        return null
    }
    async searchVideo(query: string): Promise<Array<TMedia> | null> {
        try {
            const {data} = await axios.get('https://api.flickr.com/services/rest/', {
                params: {
                    method: 'flickr.photos.search',
                    api_key: '29f0954eaffb6860da1b3718d7587ece',
                    media: 'video',
                    format: 'json',
                    extras: 'url_n, media',
                    nojsoncallback: 1,
                    video_content_types: 0,
                    text: query
                }
            })

            if(!data['photos'] || data['photos']['photo'].length === 0) return null

            const resDataAxios = data['photos']['photo']
            const resData: Array<TMedia> = []

            for(let v of resDataAxios) {
                resData.push({
                    id: v['id'],
                    url: v['url_n'],
                    license: 'cc0',
                    preview: v['url_n'],
                    type: 'video'
                })
            }

            return resData;

            /*const {data} = await axios.get<TShutterStockImageRes>(`https://api.shutterstock.com/v2/videos/search`,  {
                params: {
                    query
                },
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })

            if(!data.data || data.data.length === 0) return null

            const resData: Array<TMedia> = []

            for (let res of data.data) {
                resData.push({
                    id: res.id,
                    url: res.assets.preview.url,
                    license: 'cc0',
                    preview: res.assets.preview.url,
                    type: 'video'
                })
            }

            return resData;*/

        } catch (e) {
            console.error(e)
        }

        return null
    }
    async searchAudio(query: string): Promise<Array<TMedia> | null> {
        try {
            const {data} = await axios.get<TShutterStockImageRes>(`${this.url}audio/search`,  {
                params: {
                    query
                },
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })

            if(!data.data || data?.data?.length === 0) return null

            const resData: Array<TMedia> = []

            for (let res of data.data) {
                resData.push({
                    id: res.id,
                    url: res.assets['preview_mp3'].url,
                    license: 'cc0',
                    preview: res.assets['preview_mp3'].url,
                    type: 'audio',
                    title: res['title']
                })
            }

            return resData;

        } catch (e) {
            console.error(e)
        }

        return null
    }
}
