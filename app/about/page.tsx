import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CNY2YJLPGT"></script>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CNY2YJLPGT');`,
          }}
        />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              About Net Design Africa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              We are a passionate team of designers, developers, and digital strategists dedicated to empowering African
              businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img src="/african-tech-startup-office-modern-workspace.jpg" alt="Our story" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the digital divide across Africa, Net Design Africa has grown from a
                  small startup to a leading digital agency serving clients across the continent.
                </p>
                <p>
                  We believe that every organization, regardless of size or location, deserves access to world-class
                  digital solutions. Our team combines international expertise with deep local market knowledge to
                  deliver solutions that truly resonate with African audiences.
                </p>
                <p>
                  Over the years, we've had the privilege of working with businesses, institutions, and individuals
                  across 15+ African countries, helping them achieve their digital transformation goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-border">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower African businesses and institutions with innovative digital solutions that drive growth,
                  enhance efficiency, and create lasting impact in their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Eye size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's most trusted digital partner, recognized for delivering exceptional solutions that
                  transform businesses and contribute to the continent's digital revolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
              },
              {
                icon: Heart,
                title: "Passion",
                description: "We are passionate about technology and its power to transform businesses.",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We embrace innovation and stay ahead of the latest digital trends.",
              },
              {
                icon: Eye,
                title: "Integrity",
                description: "We operate with transparency, honesty, and respect in all our relationships.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: "Amara Okafor", role: "CEO & Founder", image: "african business woman professional portrait" },
              { name: "Kwame Mensah", role: "Lead Developer", image: "african male software developer portrait" },
              { name: "Zainab Hassan", role: "Design Director", image: "african female designer portrait" },
              { name: "Thabo Ndlovu", role: "Project Manager", image: "african male project manager portrait" },
            ].map((member, index) => (
              <Card key={index} className="border-border overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img
                    src={`/.jpg?height=400&width=400&query=${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Ready to start your digital transformation journey? Get in touch with our team today.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
