import {Search} from "@/components/Search";
import VideoList from "@/components/videos/VideoList";
import {apiKey} from "@/constan"

async function fetchVideos(q: string) {
    let url = new URL(`https://www.googleapis.com/youtube/v3/search?q=${q}&key=${apiKey}`)
    
    url.searchParams.set('part', 'snippet')
    url.searchParams.set('type', 'video')
    url.searchParams.set('maxResults', '50')
    url.searchParams.set('order', 'date')

    try {
        const videos = await fetch(url)
        return videos.json() 
    } catch (error) {
        console.log(error)
    }
}
export default async function Videos({
    searchParams,
    }:{
    searchParams: {[key: string]: string};
})   
{
    const videos = await fetchVideos(searchParams.q)
    console.log(videos)
    return (
        <div>
            <div className="w-[100%]">
                <Search />
            </div>
        <div className="mt-7 justify-between ">
            <VideoList videos={videos} />
        </div>
    </div>
    )
}