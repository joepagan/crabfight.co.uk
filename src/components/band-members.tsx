import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const bandMembers = [
  {
    id: 1,
    name: "Rinder",
    instrument: "Lead Guitar",
    favoriteCrab: "King Crab",
    image: "/rinder-crabman.png",
    initials: "MR"
  },
  {
    id: 2,
    name: "Jim Bob Gnarley",
    instrument: "Vox",
    favoriteCrab: "Blue Crab",
    image: "/jim-crabman.png",
    initials: "JBG"
  },
  {
    id: 3,
    name: "Joe",
    instrument: "Vox",
    favoriteCrab: "Dungeness Crab",
    image: "/joe-crabman.png",
    initials: "JP"
  },
  {
    id: 4,
    name: "Liam",
    instrument: "Drums",
    favoriteCrab: "Hermit Crab",
    image: "/liam-crabman.png",
    initials: "LS"
  },
  {
    id: 5,
    name: "Sam",
    instrument: "Bass",
    favoriteCrab: "Fiddler Crab",
    image: "/sam-crabman.png",
    initials: "ST"
  },
  {
    id: 6,
    name: "Hickey",
    instrument: "Keys",
    favoriteCrab: "Rock Crab",
    image: "/hickey-crabman.png",
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
            Six crustacean rockers from the depths, ready to shell out some serious metal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bandMembers.map((member) => (
            <Card key={member.id} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/50 bg-card/80 backdrop-blur">
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
          ))}
        </div>
      </div>
    </section>
  )
} 