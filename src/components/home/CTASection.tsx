import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-background rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Need Help Finding Parts?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Contact us today and our expert team will help you find exactly what
            you need.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="tel:+94740505718">
                <Phone className="w-5 h-5" />
                Call: +94 (740) 505-718
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/+94740505718"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
