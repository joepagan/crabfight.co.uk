import Hero from "@/components/hero"
import BandMembers from "@/components/band-members"
import YouTubeEmbed from "@/components/youtube-embed"
import MailchimpSignup from "@/components/mailchimp-signup"

export default function Home() {
  return (
    <main className="dark min-h-screen bg-background text-foreground ">
      <Hero />
      <MailchimpSignup />
      {/* <BandMembers /> */}
      {/* <YouTubeEmbed /> */}
      </main>
  )
}
