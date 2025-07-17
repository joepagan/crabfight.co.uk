import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const bandMembers = [
  {
    id: 1,
    name: "Rinder",
    instrument: "Lead Guitar",
    favoriteCrab: "King Crab",
    image: "rinder-crabman.png",
    initials: "MR"
  },
  {
    id: 2,
    name: "Jim Bob Gnarley",
    instrument: "Vox",
    favoriteCrab: "Blue Crab",
    image: "jim-crabman.png",
    initials: "JBG"
  },
  {
    id: 3,
    name: "Joe",
    instrument: "Vox",
    favoriteCrab: "Dungeness Crab",
    image: "joe-crabman.png",
    initials: "JP"
  },
  {
    id: 4,
    name: "Liam",
    instrument: "Drums",
    favoriteCrab: "Hermit Crab",
    image: "liam-crabman.png",
    initials: "LS"
  },
  {
    id: 5,
    name: "Sam",
    instrument: "Bass",
    favoriteCrab: "Fiddler Crab",
    image: "sam-crabman.png",
    initials: "ST"
  },
  {
    id: 6,
    name: "Hickey",
    instrument: "Keys",
    favoriteCrab: "Rock Crab",
    image: "hickey-crabman.png",
    initials: "MH"
  }
]

export default function BandMembers() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground font-heading">
            Meet the <span className="text-primary">Crew</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A six piece rap rock band from Leeds, UK. Sounds a bit like chillis with synths. But also kinda unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bandMembers.map((member) => (
            <div key={member.id} className="group perspective-1000 h-80">
              {/* Card Flip Container */}
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                
                {/* Front of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden border-2 border-transparent hover:border-primary/50 bg-card/80 backdrop-blur">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <Avatar className="w-24 h-24 border-4 border-primary/20 group-hover:border-primary transition-colors">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-heading">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="w-fit mx-auto mt-2">
                      {member.instrument}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                      <p className="text-sm text-muted-foreground mb-1">Favorite Crab:</p>
                      <p className="font-semibold text-accent text-lg">{member.favoriteCrab}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-2 border-primary/50 bg-card/90 backdrop-blur overflow-hidden">
                  <div className="relative w-full h-full flex flex-col">
                    {/* Large Image Background */}
                    <div 
                      className="flex-1 bg-cover bg-position-[center_top_15%] bg-no-repeat relative"
                      style={{ backgroundImage: `url(${member.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    
                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 font-heading">
                        {member.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                          {member.instrument}
                        </Badge>
                        <span className="text-sm opacity-90">{member.favoriteCrab}</span>
                      </div>
                    </div>
                  </div>
                </Card>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 