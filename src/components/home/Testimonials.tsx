import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase, type Review } from "@/lib/supabase";

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false });
      if (data) setReviews(data);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  const fallback = [
    { id: "1", name: "Mohamed Rifaz", location: "Kalmunai", rating: 5, text: "Excellent service! Found the exact Toyota Aqua part I needed within a day. Very reasonable price and genuine quality.", approved: true, created_at: "" },
    { id: "2", name: "Suresh Kumar", location: "Ampara", rating: 5, text: "Best auto parts shop in the area. They sourced a rare Nissan Leaf component for me. Highly recommend!", approved: true, created_at: "" },
    { id: "3", name: "Fathima Nusrath", location: "Batticaloa", rating: 5, text: "Very trustworthy. Everything was genuine. Fast WhatsApp response too!", approved: true, created_at: "" },
  ];

  const displayReviews = reviews.length > 0 ? reviews : fallback;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Customer Reviews</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            150+ happy customers across Eastern Province trust Twin Auto Traders.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-8">Loading reviews...</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {displayReviews.map((r) => (
              <div key={r.id} className="bg-card rounded-xl p-6 card-shadow hover:elevated-shadow transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{r.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
