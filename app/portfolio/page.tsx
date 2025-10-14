import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "AfriBank Mobile Banking",
      category: "Mobile App & Web Platform",
      description: "A comprehensive mobile banking solution serving over 500,000 users across East Africa.",
      image: "modern banking app interface mobile",
      tags: ["Mobile App", "Web Platform", "FinTech"],
    },
    {
      title: "EduConnect Learning Platform",
      category: "E-Learning Platform",
      description: "An interactive online learning platform connecting students and educators across the continent.",
      image: "e-learning platform interface students",
      tags: ["Web App", "Education", "SaaS"],
    },
    {
      title: "AgriTech Marketplace",
      category: "E-Commerce Platform",
      description:
        "A digital marketplace connecting farmers directly with buyers, improving agricultural supply chains.",
      image: "agricultural marketplace platform",
      tags: ["E-Commerce", "Agriculture", "Marketplace"],
    },
    {
      title: "HealthCare Management System",
      category: "Custom Software",
      description: "A hospital management system streamlining patient care and administrative processes.",
      image: "healthcare management dashboard",
      tags: ["Custom Software", "Healthcare", "Enterprise"],
    },
    {
      title: "Tourism Africa Website",
      category: "Website Design",
      description: "A stunning website showcasing African tourism destinations and booking experiences.",
      image: "tourism website african destinations",
      tags: ["Website", "Tourism", "Booking"],
    },
    {
      title: "LogiTrack Fleet Management",
      category: "Web Application",
      description: "A real-time fleet tracking and management system for logistics companies.",
      image: "fleet management dashboard tracking",
      tags: ["Web App", "Logistics", "IoT"],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">Our Portfolio</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Explore our successful projects and see how we've helped businesses across Africa achieve their digital
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-border overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img
                    src={`/.jpg?height=600&width=800&query=${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-primary font-medium">{project.category}</p>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group/btn">
                    View Case Study
                    <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Numbers that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Happy Clients" },
              { number: "15+", label: "African Countries" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote:
                  "Net Design Africa transformed our digital presence. Their expertise and dedication exceeded our expectations.",
                author: "Sarah Kimani",
                role: "CEO, AfriBank",
              },
              {
                quote:
                  "The team delivered a world-class platform that has revolutionized how we connect with students.",
                author: "Dr. Michael Osei",
                role: "Director, EduConnect",
              },
              {
                quote:
                  "Professional, innovative, and reliable. They truly understand the African market and its unique needs.",
                author: "Fatima Diallo",
                role: "Founder, AgriTech Marketplace",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[image:var(--primary-gradient)] bg-cover bg-center text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Ready to Start Your Project?</h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Join our growing list of satisfied clients and let us help you achieve your digital goals.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
