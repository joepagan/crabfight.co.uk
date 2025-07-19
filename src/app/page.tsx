import Hero from "@/components/hero"
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
