"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { use, useState } from "react"
import { useRouter } from "next/navigation"
export function Search() {
    const [search, setSearch] = useState<string>('')
    const router = useRouter()
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input 
      value={search} onChange={(e) => setSearch(e.target.value)} 
      type="text" placeholder="search" />
      <Button onClick={() => router.push(`/videos?q=${search}`)} type="submit">Search</Button>
    </div>
  )
}
