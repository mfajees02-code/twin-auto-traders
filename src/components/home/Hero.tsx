import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Driven by Trust, Powered by Quality.
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-accent-foreground mb-6 animate-slide-up">
            Twin Auto <span className="text-gradient">Traders</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Trusted Auto Spare Parts & Imported Vehicles
          </p>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground/80 mb-8 max-w-xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your one-stop destination for quality Japanese car parts,
            high-capacity bike components, and premium vehicle accessories.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+94740505718">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/+94740505718"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/products">
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border/20 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                1+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                1K+
              </div>
              <div className="text-sm text-muted-foreground">
                Parts in Stock
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                150+
              </div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
