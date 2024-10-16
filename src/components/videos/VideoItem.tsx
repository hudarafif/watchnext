import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from "next/link"
  import Image from "next/image"
  

export default function VideoItem({video}:{video:any}) {
    return (
        <Card>
            <CardContent>
                <Link href={`/videos/${video.id.videoId}`}>
                <Image 
                src={video.snippet.thumbnails.high.url} 
                width={500}
                height={500} alt=""/>
                </Link>
            </CardContent>
            <CardFooter>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-lg">{video.snippet.title}</h2>
                <h5 className="font-bold text-sm">{video.snippet.channelTitle}</h5>
                
            </div>
            </CardFooter>
        </Card>

    )}