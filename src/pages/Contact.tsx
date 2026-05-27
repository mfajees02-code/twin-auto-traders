import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone number is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long"),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      const text = `Hello Twin Auto Traders! 👋\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
      const waUrl = `https://wa.me/94740505718?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank");
      toast.success("Opening WhatsApp with your message!");
      setFormData({ name: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) newErrors[err.path[0] as string] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contact Us</span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mt-2 mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions or need help finding a specific part? We're here to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+94740505718" className="text-muted-foreground hover:text-primary transition-colors">
                        +94 740 505 718
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[hsl(142,70%,45%)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-[hsl(142,70%,45%)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/94740505718"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Click to chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:twinautotraders@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        twinautotraders@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">Kalmunai, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Mon – Sat: 10:00 AM – 6:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:+94740505718">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="whatsapp" size="lg" asChild>
                    <a href="https://wa.me/94740505718" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form → WhatsApp */}
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <h2 className="font-heading text-2xl font-bold mb-2">Send us a Message</h2>
                <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[hsl(142,70%,45%)]" />
                  Your message will open directly in WhatsApp
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+94 7XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about the parts you need..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-12">
            <h2 className="font-heading text-2xl font-bold mb-6">Find Us</h2>
            <div className="rounded-2xl overflow-hidden card-shadow" style={{ height: "400px" }}>
              <iframe
                title="Twin Auto Traders Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63398.89!2d81.8270!3d7.4148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae63d5e0a1d37c5%3A0x8c0e3d68e9b8b8a0!2sKalmunai%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
