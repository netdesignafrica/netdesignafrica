import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Palette, ShoppingCart, Database, Cloud, ArrowRight, Check } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Website Design & Development",
      description: "Create stunning, responsive websites that captivate your audience and drive conversions.",
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Content management systems",
        "Performance optimization",
        "Ongoing maintenance & support",
      ],
    },
    {
      icon: Smartphone,
      title: "Custom Software Development",
      description: "Build tailored software solutions that address your unique business challenges and workflows.",
      features: [
        "Custom business applications",
        "Process automation",
        "System integration",
        "Scalable architecture",
        "Technical documentation",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design intuitive, beautiful interfaces that deliver exceptional user experiences.",
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Visual design",
        "Usability testing",
        "Design systems",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Launch powerful online stores that convert visitors into loyal customers.",
      features: [
        "Shopping cart integration",
        "Payment gateway setup",
        "Inventory management",
        "Order processing",
        "Analytics & reporting",
      ],
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Design and manage robust databases that power your applications efficiently.",
      features: [
        "Database architecture",
        "Data migration",
        "Performance tuning",
        "Backup & recovery",
        "Security implementation",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Leverage cloud technology to scale your business and reduce infrastructure costs.",
      features: [
        "Cloud migration",
        "Infrastructure setup",
        "DevOps implementation",
        "Monitoring & maintenance",
        "Cost optimization",
      ],
    },
  ]

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Comprehensive digital solutions designed to help your business thrive in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Card className="border-border overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img
                        src={`/.jpg?height=600&width=800&query=${service.title.toLowerCase()} professional workspace`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and requirements.",
              },
              {
                number: "02",
                title: "Planning",
                description: "We create a detailed roadmap and project timeline.",
              },
              {
                number: "03",
                title: "Development",
                description: "We build your solution with regular updates and feedback.",
              },
              {
                number: "04",
                title: "Launch",
                description: "We deploy your project and provide ongoing support.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-border relative">
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Let's discuss your project and how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
