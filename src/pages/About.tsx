import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Target, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We never compromise on the quality of our products. Every part is carefully sourced and inspected.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We go the extra mile to ensure you get exactly what you need.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our knowledgeable staff has years of experience in the automotive industry.",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description:
      "We've built our reputation on honesty, reliability, and exceptional customer service.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mt-2 mb-6">
                Your Trusted <span className="text-gradient">Auto Partner</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Twin Auto Traders is a small business dedicated to providing
                quality auto spare parts and trusted service to vehicle owners
                everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a passion for automobiles, Twin Auto Traders
                    began as a small auto trading company with a simple mission:
                    to provide quality spare parts at fair prices with
                    exceptional service.
                  </p>
                  <p>
                    Over the years, we've grown our inventory to include
                    imported Japanese cars parts, high-capacity motorcycle
                    components, and a wide range of vehicle accessories. Despite
                    our growth, we've maintained our commitment to personalized
                    service and quality products.
                  </p>
                  <p>
                    Today, we serve a diverse customer base, from individual car
                    owners to professional mechanics, always with the same
                    dedication to quality and customer satisfaction that started
                    our journey.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-accent rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-heading text-6xl md:text-7xl font-bold text-primary mb-2">
                      2025
                    </div>
                    <div className="text-xl text-accent-foreground font-medium mb-6">
                      Established
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center">
                        <div className="font-heading text-3xl font-bold text-primary">
                          01+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Years
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-heading text-3xl font-bold text-primary">
                          1K+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Parts
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-heading text-3xl font-bold text-primary">
                          150+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Customers
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-heading text-3xl font-bold text-primary">
                          100%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Commitment
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do at Twin Auto Traders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-xl card-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Visit our store or contact us to find the parts you need.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
