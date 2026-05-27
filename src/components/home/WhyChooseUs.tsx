import { Shield, Clock, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "All parts are thoroughly inspected and tested for quality assurance.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description:
      "Fast processing and delivery to get you back on the road quickly.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Our experienced staff can help you find the right parts for your vehicle.",
  },
  {
    icon: Truck,
    title: "Wide Selection",
    description:
      "Extensive inventory of parts for various vehicle makes and models.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mt-2 mb-6">
              Your Trusted Partner in Auto Parts
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over 01 years of experience in the automotive industry, we've
              built our reputation on quality products and exceptional customer
              service.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-accent-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="font-heading text-7xl md:text-8xl font-bold text-primary mb-4">
                  01+
                </div>
                <div className="text-xl text-accent-foreground font-medium">
                  Years of Excellence
                </div>
                <div className="mt-6 flex justify-center gap-8">
                  <div>
                    <div className="font-heading text-2xl font-bold text-primary">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">Quality</div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-primary">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
