import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, X, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center w-14 h-10 lg:w-16 lg:h-12">
              <Image
                src="/logo-1.png"
                alt="Net Design Africa logo"
                width={64}
                height={48}
                className="object-contain"
                priority
              />
          </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Net Design Africa is a leading digital agency offering website and custom software design services across
              Africa.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://www.linkedin.com/in/net-design-africa/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://x.com/netdesignafrica" className="text-muted-foreground hover:text-primary transition-colors">
                <X size={20} />
              </Link>
              <Link href="https://www.instagram.com/netdesignafrica/" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Website Design</li>
              <li className="text-sm text-muted-foreground">Custom Software</li>
              <li className="text-sm text-muted-foreground">Mobile Apps</li>
              <li className="text-sm text-muted-foreground">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">netdesignafrica@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+256 707 029 929</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Net Design Africa. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
