import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold leading-tight">Twin Auto</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Traders</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for quality auto spare parts, imported Japanese vehicles, and motorcycle accessories. Based in Kalmunai, Sri Lanka.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/twinautotraders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-primary group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/twinautotraders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/94740505718"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[hsl(142,70%,45%)]/10 rounded-lg flex items-center justify-center hover:bg-[hsl(142,70%,45%)] transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[hsl(142,70%,45%)] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products & Services" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Japanese Car Parts</span>
              <span>High Capacity Bike Parts</span>
              <span>Vehicle Accessories</span>
              <span>Custom Orders</span>
              <span>Bulk Orders</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+94740505718" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +94 740 505 718
              </a>
              <a href="https://wa.me/94740505718" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                WhatsApp Chat
              </a>
              <a href="mailto:twinautotraders@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                twinautotraders@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kalmunai, Eastern Province, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Twin Auto Traders. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">Quality Parts. Trusted Service.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
