import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Palette, Zap, Globe, Users } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
              Transforming Ideas into <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              We design and develop exceptional websites and custom software solutions for businesses, institutions, and
              individuals across Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Code,
                title: "Website Design",
                description: "Beautiful, responsive websites that engage your audience and drive results.",
              },
              {
                icon: Smartphone,
                title: "Custom Software",
                description: "Tailored software solutions built to solve your specific business challenges.",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Intuitive interfaces that deliver exceptional user experiences.",
              },
              {
                icon: Zap,
                title: "Web Applications",
                description: "Powerful web apps that streamline operations and boost productivity.",
              },
              {
                icon: Globe,
                title: "E-Commerce",
                description: "Complete online stores that convert visitors into customers.",
              },
              {
                icon: Users,
                title: "Consulting",
                description: "Strategic guidance to help you navigate the digital landscape.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors group">
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon size={24} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Why Choose Net Design Africa?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine technical expertise with creative innovation to deliver digital solutions that drive real
                business results across the African continent.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert team with years of experience",
                  "Tailored solutions for African markets",
                  "Cutting-edge technology and design",
                  "Dedicated support and maintenance",
                  "Proven track record of success",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img
                  src="/modern-office-team-collaboration-african-professio.jpg"
                  alt="Net Design Africa team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-[image:var(--primary-gradient)] bg-cover bg-center text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "15+", label: "Countries Served" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">{stat.number}</div>
                <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Let's discuss how we can help bring your vision to life with our expert design and development services.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
