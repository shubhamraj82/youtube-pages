import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <main>
      <Appbar/>
      <div className="flex">
      <LeftBar/>
      <VideoGrid/>
      </div>
 </main>
  )
}
