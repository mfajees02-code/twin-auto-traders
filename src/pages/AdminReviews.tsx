import { useEffect, useState } from "react";
import { supabase, type Review } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Star, Check, Trash2 } from "lucide-react";
import { toast } from "sonner";

const AdminReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);

  const ADMIN_PASSWORD = "twin2025admin";

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setReviews(data);
    setLoading(false);
  };

  useEffect(() => {
    if (authed) fetchReviews();
  }, [authed]);

  const approve = async (id: string) => {
    await supabase.from("reviews").update({ approved: true }).eq("id", id);
    toast.success("Review approved!");
    fetchReviews();
  };

  const remove = async (id: string) => {
    await supabase.from("reviews").delete().eq("id", id);
    toast.success("Review deleted!");
    fetchReviews();
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="bg-card p-8 rounded-2xl card-shadow w-full max-w-sm">
          <h1 className="font-heading text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-border rounded-lg px-4 py-2 mb-4 bg-background"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && password === ADMIN_PASSWORD && setAuthed(true)}
          />
          <Button
            className="w-full"
            onClick={() => {
              if (password === ADMIN_PASSWORD) setAuthed(true);
              else toast.error("Wrong password!");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => r.approved);

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-bold mb-2">Reviews Admin</h1>
        <p className="text-muted-foreground mb-8">Twin Auto Traders — Manage customer reviews</p>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4 text-yellow-600">
              Pending Approval ({pending.length})
            </h2>
            {pending.length === 0 && (
              <p className="text-muted-foreground mb-8">No pending reviews.</p>
            )}
            <div className="space-y-4 mb-12">
              {pending.map((r) => (
                <div key={r.id} className="bg-card rounded-xl p-6 card-shadow border-l-4 border-yellow-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{r.name} — {r.location}</p>
                      <div className="flex gap-1 my-1">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">"{r.text}"</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(r.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" onClick={() => approve(r.id)} className="bg-green-600 hover:bg-green-700">
                        <Check className="w-4 h-4 mr-1" /> Approve
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => remove(r.id)}>
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4 text-green-600">
              Approved Reviews ({approved.length})
            </h2>
            <div className="space-y-4">
              {approved.map((r) => (
                <div key={r.id} className="bg-card rounded-xl p-6 card-shadow border-l-4 border-green-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{r.name} — {r.location}</p>
                      <div className="flex gap-1 my-1">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">"{r.text}"</p>
                    </div>
                    <Button size="sm" variant="destructive" onClick={() => remove(r.id)}>
                      <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminReviews;
