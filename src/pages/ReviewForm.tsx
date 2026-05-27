import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const ReviewForm = () => {
  const [form, setForm] = useState({ name: "", location: "", rating: 5, text: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.location || !form.text) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("reviews").insert([{
      name: form.name,
      location: form.location,
      rating: form.rating,
      text: form.text,
      approved: false,
    }]);
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <div className="text-6xl mb-6">⭐</div>
            <h1 className="font-heading text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-muted-foreground text-lg">
              Your review has been submitted. It will appear on our website after approval.
            </p>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 max-w-2xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Share Your Experience</span>
            <h1 className="font-heading text-4xl font-bold mt-2 mb-4">
              Leave a <span className="text-gradient">Review</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Your feedback helps other customers and helps us improve.
            </p>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="Mohamed Rifaz"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Your City *</Label>
                  <Input
                    id="location"
                    placeholder="Kalmunai, Ampara..."
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Rating *</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setForm({ ...form, rating: star })}
                      >
                        <Star
                          className={`w-8 h-8 transition-colors ${
                            star <= form.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text">Your Review *</Label>
                  <Textarea
                    id="text"
                    placeholder="Tell us about your experience with Twin Auto Traders..."
                    rows={5}
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ReviewForm;
