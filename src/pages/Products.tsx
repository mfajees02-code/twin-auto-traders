import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Car,
  Bike,
  Sparkles,
  Wrench,
  Settings,
  Package,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const products = [
  {
    // toyota nissan honda lexus
    icon: Car,
    title: "Imported Japanese Cars",
    description:
      "Genuine and aftermarket parts for Toyota, Honda, Nissan, Mazda, Subaru, Mitsubishi, and all Japanese brands.",
    items: ["Toyota", "Nissan", "Honda", "Lexus"],
  },
  {
    icon: Bike,
    title: "High Capacity Bike Parts",
    description:
      "Performance and replacement parts for motorcycles and high-capacity bikes.",
    items: [
      "Engine Parts",
      "Chain & Sprockets",
      "Brake Pads & Discs",
      "Air Filters",
      "Clutch Assemblies",
      "Exhaust Systems",
    ],
  },
  {
    icon: Sparkles,
    title: "Vehicle Accessories",
    description:
      "Enhance your vehicle's appearance and functionality with our range of decorative accessories.",
    items: [
      "Interior Accessories",
      "Exterior Styling",
      "LED Lighting",
      "Floor Mats",
      "Seat Covers",
      "Dashboard Accessories",
    ],
  },
  {
    icon: Wrench,
    title: "All Car Spare Parts",
    description:
      "Comprehensive inventory of spare parts for all vehicle makes and models.",
    items: [
      "Engine Components",
      "Brake Systems",
      "Suspension Parts",
      "Electrical Components",
      "Body Parts",
      "Filters & Fluids",
    ],
  },
];

const specialServices = [
  {
    icon: Settings,
    title: "Custom Orders",
    description:
      "Can't find what you're looking for? We can source and order specific parts for you.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description:
      "Special pricing available for mechanics, workshops, and bulk buyers.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Products & Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mt-2 mb-6">
                Quality <span className="text-gradient">Auto Parts</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our extensive range of automotive spare parts,
                accessories, and services designed to keep your vehicle running
                smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 card-shadow hover:elevated-shadow transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold mb-2">
                        {product.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {product.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Services */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Special Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Beyond our standard inventory, we offer additional services to
                meet your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {specialServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 text-center card-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Specific Part?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us with your requirements and we'll help you find the
              exact part you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/94740505718"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;
