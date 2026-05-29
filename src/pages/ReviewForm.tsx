import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase, type Review } from "@/lib/supabase";
import { toast } from "sonner";

const avatarColors = [
  "bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400",
  "bg-purple-400", "bg-pink-400", "bg-indigo-400", "bg-teal-400",
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

const ReviewForm = () => {
  const [form, setForm] = useState({ name: "", location: "", rating: 5, text: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });
      if (data) setReviews(data);
    };
    fetchReviews();
  }, [submitted]);

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
      toast.success("Review submitted! It will appear after approval.");
      setForm({ name: "", location: "", rating: 5, text: "" });
      setSubmitted(true);
    }
  };

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
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Left — Approved Reviews List */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Customer Testimonials</h2>
                {reviews.length === 0 ? (
                  <p className="text-muted-foreground">No reviews yet. Be the first!</p>
                ) : (
                  <div className="space-y-6">
                    {reviews.map((r, i) => (
                      <div key={r.id} className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${avatarColors[i % avatarColors.length]}`}>
                          {getInitials(r.name)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{r.name}</p>
                          <p className="text-xs text-muted-foreground mb-1">{r.location}</p>
                          <div className="flex gap-0.5 mb-1">
                            {Array.from({ length: r.rating }).map((_, j) => (
                              <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{r.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right — Review Form */}
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <h2 className="font-heading text-2xl font-bold mb-6">Write a Review</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="eg: Fajees Ajmeer"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Your City *</Label>
                    <Input
                      id="location"
                      placeholder="eg: Kalmumai, Ampara"
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
                      placeholder="Tell us about your experience with Twin Auto Traders."
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ReviewForm;