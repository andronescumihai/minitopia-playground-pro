import { createFileRoute } from "@tanstack/react-router";
import { PageHero, BackHome } from "@/components/site/PageShell";
import { Shield, Sparkles, PartyPopper, Heart } from "lucide-react";

export const Route = createFileRoute("/despre-noi")({
  component: Page,
  head: () => ({ meta: [{ title: "Despre Noi — Minitopia" }, { name: "description", content: "Povestea Minitopia: un loc de joacă premium pentru copii din București." }] }),
});

const values = [
  { icon: Shield, title: "Siguranță", desc: "Echipamente certificate și personal instruit." },
  { icon: Sparkles, title: "Creativitate", desc: "Activități ce stimulează imaginația." },
  { icon: PartyPopper, title: "Distracție", desc: "Zâmbete largi și energie debordantă." },
  { icon: Heart, title: "Familie", desc: "Un spațiu primitor pentru toată familia." },
];

const team = [
  { name: "Ana Popescu", role: "Fondator & Director" },
  { name: "Mihai Ionescu", role: "Coordonator Animatori" },
  { name: "Elena Vasilescu", role: "Specialist Evenimente" },
];

const gallery = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  "https://images.unsplash.com/photo-1571210059434-edfafc838b32?w=600&q=80",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
  "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80",
];

function Page() {
  return (
    <>
      <PageHero title="Despre Noi" accent="🧸" subtitle="Un univers în miniatură creat cu dragoste pentru cei mici." />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Povestea noastră</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Minitopia s-a născut din dorința de a oferi copiilor din București un loc unde să se joace în siguranță,
              să-și dezvolte creativitatea și să trăiască amintiri de neuitat alături de prieteni și familie.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Calitatea serviciilor și grija pentru fiecare copil ne diferențiază. Părinții ne aleg pentru că știu că aici
              cei mici sunt în mâini bune – și se distrează maxim.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80" alt="Interior Minitopia" loading="lazy" className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      <section className="py-12 bg-[var(--tint-pink)] dark:bg-card/40">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Valorile noastre</h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 text-center border border-border">
                <div className="mx-auto w-12 h-12 rounded-full bg-[var(--brand-pink)]/15 text-[var(--brand-pink)] grid place-items-center"><v.icon className="w-6 h-6" /></div>
                <h3 className="mt-3 font-bold">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Echipa noastră</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 text-center border border-border">
                <div className={`mx-auto w-24 h-24 rounded-full grid place-items-center font-display font-extrabold text-3xl text-white ${["bg-[var(--brand-pink)]","bg-[var(--brand-orange)]","bg-[var(--brand-purple)]"][i]}`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-bold text-lg">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl font-extrabold mb-6 text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Galerie</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {gallery.map((g) => (
              <img key={g} src={g} alt="Galerie Minitopia" loading="lazy" className="rounded-2xl w-72 h-52 object-cover flex-shrink-0 snap-start shadow-md" />
            ))}
          </div>
        </div>
      </section>
      <BackHome />
    </>
  );
}
