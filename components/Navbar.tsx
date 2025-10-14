"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navigation({ isMobile = false }: { isMobile?: boolean }) {

  const pathname = usePathname()

  const MobileLink = ({ href, children, ...props }: React.ComponentPropsWithoutRef<typeof Link>) => {
    return (
      <Link href={href} {...props}>
        <span className={cn(
          "block py-2 text-sm",
          pathname === href && "font-semibold text-primary"
        )}>
          {children}
        </span>
      </Link>
    )
  }

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        <MobileLink href="/">Home</MobileLink>
        <MobileLink href="/about">About</MobileLink>
        <MobileLink href="/services">Services</MobileLink>
        <MobileLink href="/portfolio">Portfolio</MobileLink>
        <MobileLink href="/contact">Contact</MobileLink>
      </div>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <div className="absolute inset-0 rounded-md bg-[url('/african-tech-startup-office-modern-workspace.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50" />
                    <div className="mb-4 mt-2 text-lg font-semibold text-white relative">
                      Net Design Africa
                    </div>
                    <p className="text-xs leading-tight text-white relative">
                      We build beautiful, fast, and accessible websites and digital products for African businesses.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="Our Mission">
                To empower African businesses and institutions with innovative digital solutions.
              </ListItem>
              <ListItem href="/about" title="Our Approach">
                Research-first design, iterative builds, and measurable results.
              </ListItem>
              <ListItem href="/about" title="Our Values">
                Excellence, Passion, Innovation, Integrity
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                    href="/services"
                  >
                    <div className="absolute inset-0 rounded-md bg-[url('/modern-office-team-collaboration-african-professio.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50" />
                    <div className="mb-4 mt-2 text-lg font-semibold text-white relative">
                      Services
                    </div>
                    <p className="text-xs leading-tight text-white relative">
                      From brand and web design to custom software and performance optimisation.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services" title="Website Design & Dev">
                Responsive marketing websites, landing pages, and custom web apps.
              </ListItem>
              <ListItem href="/services" title="Custom Software">
                Tailored software solutions built to solve your specific business challenges.
              </ListItem>
              <ListItem href="/services" title="Cloud Solutions">
                Domain Names & Hosting, Cloud Hosting & Management, and DevOps.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/portfolio" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Portfolio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
