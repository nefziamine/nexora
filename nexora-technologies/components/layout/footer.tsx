import { Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#web-development", label: "Web Development" },
    { href: "/services#mobile-development", label: "Mobile Development" },
    { href: "/services#ai-solutions", label: "AI Solutions" },
    { href: "/services#custom-software", label: "Custom Software" },
  ],
  resources: [
    { href: "/request-quote", label: "Request Quote" },
    { href: "/portfolio", label: "Case Studies" },
    { href: "/contact", label: "Support" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Nexora Technologies"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <div>
                <span className="text-lg font-bold">NEXORA</span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-nexora-blue">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.slogan}. We build digital products that drive
              business growth.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-nexora-cyan"
                aria-label="LinkedIn"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-nexora-cyan"
                aria-label="Twitter"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-nexora-cyan"
                aria-label="GitHub"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-nexora-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-nexora-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-nexora-cyan" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-nexora-cyan"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-nexora-cyan" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-nexora-cyan">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nexora-cyan" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexora Technologies. All rights
            reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            {SITE_CONFIG.slogan}
          </p>
        </div>
      </Container>
    </footer>
  );
}
