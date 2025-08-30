"use client"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export default function YouTubeEmbed({ 
  className = "" 
}: Pick<YouTubeEmbedProps, 'className'>) {
  return (
    <section id="music-video" className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-heading">
            Latest <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {/* Experience the crushing power of Crab Fight&apos;s signature sound */}
            We&apos;re working on new stuff, stay tuned!
          </p>
        </div>

        {/* <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20 hover:border-primary/50 transition-colors group">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
              <svg className="w-full h-full p-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
              <svg className="w-full h-full p-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
              </svg>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">{title}</h3>
            <p className="text-muted-foreground">
              Subscribe to our channel for more music from the murky depths!
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
} 