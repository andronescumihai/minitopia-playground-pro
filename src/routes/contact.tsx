import { createFileRoute } from "@tanstack/react-router";
import { PageHero, BackHome } from "@/components/site/PageShell";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Music2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({ meta: [{ title: "Contact — Minitopia" }, { name: "description", content: "Contactează echipa Minitopia." }] }),
});

const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-pink)]";

function Page() {
  return (
    <>
      <PageHero title="Contactează-ne" accent="📬" subtitle="Suntem aici pentru orice întrebare sau cerere." />
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl border border-border p-8 shadow-md space-y-5">
            <h3 className="font-display text-xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Date de contact</h3>
            <div className="flex gap-3"><Phone className="w-5 h-5 text-[var(--brand-pink)] mt-0.5" /><a href="tel:+40764292754" className="font-bold hover:underline">+40 764 292 754</a></div>
            <div className="flex gap-3"><MapPin className="w-5 h-5 text-[var(--brand-pink)] mt-0.5" /><span>Strada Veseliei, Nr. 10, Sector 5, București</span></div>
            <div className="flex gap-3"><Mail className="w-5 h-5 text-[var(--brand-pink)] mt-0.5" /><a href="mailto:rezervari@minitopia.ro" className="font-bold hover:underline">rezervari@minitopia.ro</a></div>
            <div className="flex gap-3"><Clock className="w-5 h-5 text-[var(--brand-pink)] mt-0.5" /><div>Luni–Vineri: 10:00–20:00<br/>Sâmbătă–Duminică: 09:00–21:00</div></div>
            <div className="pt-3 flex gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-[var(--tint-pink)] text-[var(--brand-pink)] hover:bg-[var(--brand-pink)] hover:text-white transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-[var(--tint-pink)] text-[var(--brand-pink)] hover:bg-[var(--brand-pink)] hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="TikTok" className="p-2 rounded-full bg-[var(--tint-pink)] text-[var(--brand-pink)] hover:bg-[var(--brand-pink)] hover:text-white transition"><Music2 className="w-5 h-5" /></a>
            </div>
          </div>

          <form className="bg-card rounded-3xl border border-border p-8 shadow-md space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Mulțumim! Mesajul a fost trimis."); }}>
            <h3 className="font-display text-xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Trimite un mesaj</h3>
            <input required placeholder="Nume" className={inputCls} />
            <input required type="email" placeholder="Email" className={inputCls} />
            <input required type="tel" placeholder="Telefon" className={inputCls} />
            <select required defaultValue="" className={inputCls}>
              <option value="" disabled>Subiect</option><option>Rezervare</option><option>Întrebare</option><option>Feedback</option><option>Altul</option>
            </select>
            <textarea required rows={5} placeholder="Mesaj" className={inputCls} />
            <button className="w-full rounded-full bg-[var(--brand-pink)] text-white font-bold py-3 hover:brightness-110 transition">Trimite Mesajul →</button>
          </form>
        </div>
      </section>
      <BackHome />
    </>
  );
}
