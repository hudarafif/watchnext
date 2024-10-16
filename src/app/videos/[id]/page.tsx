import { apiKey } from "@/constan"

async function fetchVideo(id: string) {
    let url = new URL(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`)
    
    url.searchParams.set('part', 'snippet')
    url.searchParams.set('type', 'video')
  

    try {
        const video = await fetch(url)
        return video.json() 
    } catch (error) {
        console.log(error)
    }
}

export default async function VideoDetail ({ params }: { params: { id: string } }) {
    const videoSrc = `https://www.youtube.com/embed/${params.id}`
    const video = await fetchVideo(params.id)
    return (

        <div className=" px-8 grid grid-cols-10 gap-4">
        <div className="col-span-7">
            <div className="w-[100%]">
                <iframe 
                src={videoSrc} 
                className="w-[100%] h-[35rem]"
                />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-lg">{video.items[0].snippet.title}</h2>
                <h5 className="font-bold text-m">{video.items[0].snippet.channelTitle}</h5>
                <p className="text-base">{video.items[0].snippet.description}</p>
            </div>
        </div>
        
    </div>
)
}