import { Car, Bike, Sparkles, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Japanese Car Parts",
    description: "Premium imported spare parts for all Japanese vehicle brands including Toyota, Honda, Nissan, and more.",
  },
  {
    icon: Bike,
    title: "Motorcycle Parts",
    description: "High-capacity bike spare parts for performance and regular maintenance needs.",
  },
  {
    icon: Sparkles,
    title: "Accessories",
    description: "Stylish decorative accessories and add-ons to enhance your vehicle's appearance.",
  },
  {
    icon: Settings,
    title: "Custom Orders",
    description: "Can't find what you need? We offer custom ordering service for specialized parts.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From genuine spare parts to custom orders, we've got all your automotive needs covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
