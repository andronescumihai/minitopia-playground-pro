import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, BackHome } from "@/components/site/PageShell";
import { Check } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/pachete")({
  component: Page,
  head: () => ({ meta: [{ title: "Pachete & Tarife — Minitopia" }, { name: "description", content: "Pachete pentru sesiuni de joacă și petreceri la Minitopia." }] }),
});

const packages = [
  {
    name: "Pachet Mini", price: "50 RON", unit: "/copil", duration: "2 ore",
    items: ["Acces la zona de joacă", "Supraveghere", "1 gustare"],
    cta: "Rezervă Pachet Mini", border: "border-border", popular: false,
  },
  {
    name: "Pachet Maxi", price: "80 RON", unit: "/copil", duration: "3 ore",
    items: ["Acces complet", "Supraveghere", "2 gustări", "1 activitate tematică"],
    cta: "Rezervă Pachet Maxi", border: "border-2 border-[var(--brand-pink)]", popular: true,
  },
  {
    name: "Pachet Party", price: "De la 500 RON", unit: "/eveniment", duration: "4 ore",
    items: ["Sală rezervată", "Tort", "Decorațiuni", "Animatori", "10 copii incluși"],
    cta: "Contactează-ne pentru detalii", border: "border-2 border-[var(--brand-purple)]", popular: false,
  },
];

const faqs = [
  { q: "Cum pot face o rezervare?", a: "Completează formularul de pe pagina Rezervări sau sună-ne direct la +40 764 292 754." },
  { q: "Ce vârstă trebuie să aibă copiii?", a: "Primim copii între 1 și 12 ani. Avem zone special amenajate pentru fiecare grupă de vârstă." },
  { q: "Pot aduce mâncare de acasă?", a: "Da, însă pentru petreceri recomandăm pachetele noastre cu catering inclus." },
  { q: "Cum asigurați siguranța copiilor?", a: "Toate echipamentele sunt certificate, iar personalul nostru supraveghează permanent zonele de joacă." },
  { q: "Ce metode de plată acceptați?", a: "Acceptăm numerar, card bancar și transfer bancar pentru rezervările de evenimente." },
];

function Page() {
  return (
    <>
      <PageHero title="Pachete & Tarife" accent="🎟️" subtitle="Alegem pachetul perfect pentru micuțul tău aventurier." />
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-8">
          {packages.map((p) => (
            <div key={p.name} className={`relative bg-card rounded-3xl p-8 ${p.border} ${p.popular ? "shadow-2xl lg:-translate-y-4" : "shadow-md"} transition`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--brand-yellow)] text-[var(--brand-purple)] font-bold text-sm px-4 py-1 rounded-full">
                  Cel mai popular 🌟
                </span>
              )}
              <h3 className="font-display text-2xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[var(--brand-pink)]">{p.price}</span>
                <span className="text-muted-foreground">{p.unit}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Durată: {p.duration}</p>
              <ul className="mt-6 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm"><Check className="w-5 h-5 text-[var(--brand-pink)] flex-shrink-0" /> {it}</li>
                ))}
              </ul>
              <Link to="/rezervari" className={`mt-8 block text-center rounded-full font-bold py-3 transition ${p.popular ? "bg-[var(--brand-pink)] text-white hover:brightness-110" : "border-2 border-[var(--brand-purple)] text-[var(--brand-purple)] dark:text-[var(--brand-yellow)] dark:border-[var(--brand-yellow)] hover:bg-[var(--tint-purple)]"}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-3xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)] mb-8">Întrebări frecvente</h2>
          <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`}>
                <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <BackHome />
    </>
  );
}
