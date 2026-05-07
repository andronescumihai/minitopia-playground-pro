import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Shield, PartyPopper, Users, Palette, Mountain, Cake, Drama, ArrowRight } from "lucide-react";
import heroPlayground from "@/assets/hero-playground.jpg";
import activityRoleplay from "@/assets/activity-roleplay.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({ meta: [{ title: "Minitopia — Mini world maxi fun!!!" }] }),
});

const activities = [
  { icon: Palette, emoji: "🎨", title: "Atelier de Creație", desc: "Pictură, modelaj și meșteșuguri pentru micii artiști.", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" },
  { icon: Mountain, emoji: "🧗", title: "Locuri de Cățărat", desc: "Structuri colorate, sigure și pline de aventură.", img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80" },
  { icon: Cake, emoji: "🎂", title: "Petreceri Tematice", desc: "Aniversări de neuitat cu decor și animatori.", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80" },
  { icon: Drama, emoji: "🎭", title: "Jocuri de Rol", desc: "Costume și scenarii pentru imaginație fără limite.", img: activityRoleplay },
];

const features = [
  { icon: Sparkles, title: "Distracție garantată", desc: "Fiecare zi e o nouă aventură." },
  { icon: Shield, title: "Siguranță maximă", desc: "Echipamente certificate și supraveghere." },
  { icon: PartyPopper, title: "Petreceri tematice", desc: "Pachete personalizate pentru orice ocazie." },
  { icon: Users, title: "Echipă dedicată", desc: "Animatori profesioniști și pasionați." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--tint-pink)] text-[var(--brand-pink)] px-4 py-1.5 text-sm font-bold">
              ✨ Loc de joacă premium în București
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-6xl font-extrabold leading-[1.05] text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">
              Bine ai venit în <span className="text-[var(--brand-pink)]">Minitopia!</span>
            </h1>
            <p className="mt-5 text-2xl italic font-bold text-[var(--brand-pink)]">Mini world maxi fun!!!</p>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl">
              Locul unde imaginația prinde viață și fiecare colț e o nouă aventură.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/rezervari" className="cta-pulse inline-flex items-center gap-2 rounded-full bg-[var(--brand-pink)] text-white font-bold px-7 py-4 shadow-lg hover:brightness-110 transition">
                Hai să ne jucăm! 🎉
              </Link>
              <Link to="/pachete" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-purple)] text-[var(--brand-purple)] dark:text-[var(--brand-yellow)] dark:border-[var(--brand-yellow)] font-bold px-7 py-4 hover:bg-[var(--tint-purple)] transition">
                Vezi Pachete <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroPlayground}
              alt="Copii fericiți jucându-se la Minitopia"
              width={1280}
              height={960}
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-[var(--brand-yellow)] text-[var(--brand-purple)] rounded-2xl px-5 py-3 font-bold shadow-xl">
              ⭐ 4.9/5 părinți fericiți
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 bg-[var(--tint-purple)] dark:bg-card/40">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">
            Ce poți face la Minitopia?
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
            Activități create cu grijă pentru fiecare vârstă și pasiune.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a) => (
              <article key={a.title} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-500 border border-border">
                <img src={a.img} alt={a.title} loading="lazy" className="w-full h-44 object-cover" />
                <div className="p-5">
                  <div className="text-2xl">{a.emoji}</div>
                  <h3 className="mt-2 font-display font-bold text-xl text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">
            De ce Minitopia?
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 rounded-2xl bg-card border border-border hover:scale-[1.03] transition duration-500">
                <div className="mx-auto w-14 h-14 rounded-full bg-[var(--brand-orange)]/15 text-[var(--brand-orange)] grid place-items-center">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border-2 border-[var(--brand-pink)] bg-gradient-to-br from-[var(--tint-pink)] to-[var(--tint-purple)] dark:from-card dark:to-card p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">
              Fă o rezervare acum!
            </h2>
            <p className="mt-3 text-muted-foreground">Oferă-le copiilor o zi de neuitat la Minitopia.</p>
            <Link to="/rezervari" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-pink)] text-white font-bold px-7 py-4 shadow-lg hover:brightness-110 transition">
              Rezervă acum <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
