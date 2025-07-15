import Hero from "@/components/hero"
import BandMembers from "@/components/band-members"
import YouTubeEmbed from "@/components/youtube-embed"

export default function Home() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <Hero />
      <BandMembers />
      <YouTubeEmbed 
        videoId="dQw4w9WgXcQ" 
        title="CrabFight - Kingu (Official Music Video)"
      />
      </main>
  )
}
