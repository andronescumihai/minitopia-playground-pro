import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, BackHome } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/evenimente")({
  component: Page,
  head: () => ({ meta: [{ title: "Evenimente — Minitopia" }, { name: "description", content: "Aniversări, petreceri tematice și evenimente de familie la Minitopia." }] }),
});

const events = [
  { emoji: "🎂", title: "Aniversări", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
    desc: "Decorațiuni personalizate, tort delicios, animatori și sală exclusivă pentru ziua specială.",
    cta: "Planifică Aniversarea" },
  { emoji: "🦸", title: "Petreceri Tematice", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&q=80",
    desc: "Teme disponibile: supereroi, prințese, dinozauri, spațiu cosmic și multe altele.",
    cta: "Alege Tema" },
  { emoji: "👨‍👩‍👧‍👦", title: "Evenimente Corporate / Familiale", img: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?w=900&q=80",
    desc: "Spații generoase pentru grupuri mari, catering disponibil și activități pentru toate vârstele.",
    cta: "Solicită Ofertă" },
];

const gallery = [
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?w=600&q=80",
];

function Page() {
  return (
    <>
      <PageHero title="Evenimente Speciale" accent="🎈" subtitle="Transformăm fiecare ocazie specială într-o amintire de neuitat." />
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          {events.map((e, i) => (
            <article key={e.title} className={`grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl border border-border overflow-hidden shadow-md hover:shadow-xl transition duration-500 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
              <img src={e.img} alt={e.title} loading="lazy" className="w-full h-72 md:h-full object-cover" />
              <div className="p-8">
                <div className="text-3xl">{e.emoji}</div>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">{e.title}</h3>
                <p className="mt-3 text-muted-foreground">{e.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-pink)] text-white font-bold px-6 py-3 hover:brightness-110 transition">
                  {e.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl font-extrabold mb-6 text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Momente de la evenimentele noastre</h2>
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((g) => <img key={g} src={g} alt="Eveniment Minitopia" loading="lazy" className="rounded-2xl aspect-[4/3] object-cover w-full" />)}
          </div>
        </div>
      </section>
      <BackHome />
    </>
  );
}
