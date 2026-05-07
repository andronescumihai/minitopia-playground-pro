import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, BackHome } from "@/components/site/PageShell";
import { Star } from "lucide-react";

export const Route = createFileRoute("/review-uri")({
  component: Page,
  head: () => ({ meta: [{ title: "Review-uri — Minitopia" }, { name: "description", content: "Ce spun părinții despre Minitopia." }] }),
});

type Review = { name: string; stars: number; text: string; date: string };

const initial: Review[] = [
  { name: "Maria P.", stars: 5, text: "Locul perfect pentru ziua copilului! Personalul foarte amabil, totul a decurs impecabil. Ne-am simțit minunat!", date: "Aprilie 2025" },
  { name: "Alexandru D.", stars: 5, text: "Fiul meu nu mai vrea să plece de aici. Spațiul e curat, sigur, iar animatorii sunt fantastici.", date: "Martie 2025" },
  { name: "Elena și Andrei", stars: 5, text: "Am organizat aniversarea fetei noastre la Minitopia. Decorul a fost wow, copiii au fost încântați!", date: "Februarie 2025" },
  { name: "Cristina B.", stars: 4, text: "Foarte frumos și organizat. Singurul minus a fost că am vrut să stăm mai mult — vom reveni!", date: "Februarie 2025" },
  { name: "Vlad M.", stars: 5, text: "Recomand din toată inima. Atmosferă veselă, prețuri corecte și grijă pentru detalii.", date: "Ianuarie 2025" },
  { name: "Diana T.", stars: 5, text: "Cei doi copii ai mei au descoperit aici activități noi. Atelierul de creație e preferatul lor!", date: "Ianuarie 2025" },
];

function StarsRow({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} className={`w-4 h-4 ${i <= value ? "fill-[var(--brand-yellow)] text-[var(--brand-yellow)]" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

function Page() {
  const [reviews, setReviews] = useState(initial);
  const [stars, setStars] = useState(5);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const avg = (reviews.reduce((a,r)=>a+r.stars,0)/reviews.length).toFixed(1);
  const colors = ["bg-[var(--brand-pink)]","bg-[var(--brand-orange)]","bg-[var(--brand-purple)]"];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !text) return;
    setReviews([{ name, stars, text, date: "Mai 2025" }, ...reviews]);
    setName(""); setText(""); setStars(5);
  }

  return (
    <>
      <PageHero title="Ce spun părinții" accent="💬" subtitle="Părerea voastră înseamnă enorm pentru noi." />
      <section className="py-8">
        <div className="mx-auto max-w-3xl px-6 text-center bg-card rounded-3xl border border-border p-8 shadow-md">
          <div className="text-5xl font-display font-extrabold text-[var(--brand-pink)]">{avg}/5</div>
          <div className="mt-2 flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-7 h-7 fill-[var(--brand-yellow)] text-[var(--brand-yellow)]" />)}
          </div>
          <p className="mt-2 text-muted-foreground">Bazat pe {reviews.length} review-uri</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full grid place-items-center text-white font-extrabold ${colors[i % 3]}`}>
                  {r.name.split(" ").map(n=>n[0]).join("").slice(0,2)}
                </div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
              <div className="mt-3"><StarsRow value={r.stars} /></div>
              <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-6">
          <form onSubmit={submit} className="bg-card rounded-3xl border border-border p-8 shadow-md space-y-4">
            <h3 className="font-display text-xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Lasă un review</h3>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Numele tău" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Notă:</span>
              {[1,2,3,4,5].map(i => (
                <button type="button" key={i} onClick={()=>setStars(i)} aria-label={`${i} stele`}>
                  <Star className={`w-7 h-7 transition ${i <= stars ? "fill-[var(--brand-yellow)] text-[var(--brand-yellow)]" : "text-muted-foreground/30"}`} />
                </button>
              ))}
            </div>
            <textarea value={text} onChange={e=>setText(e.target.value)} rows={4} placeholder="Mesajul tău" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            <button className="w-full rounded-full bg-[var(--brand-pink)] text-white font-bold py-3 hover:brightness-110 transition">Trimite review-ul</button>
          </form>
        </div>
      </section>
      <BackHome />
    </>
  );
}
