import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, BackHome } from "@/components/site/PageShell";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/rezervari")({
  component: Page,
  head: () => ({ meta: [{ title: "Rezervări — Minitopia" }, { name: "description", content: "Rezervă o sesiune de joacă la Minitopia." }] }),
});

const slots = ["10:00", "12:00", "14:00", "16:00", "18:00"];

function Confetti() {
  const colors = ["#E91E8C", "#FF6B35", "#7B2FBE", "#FFD93D"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="confetti-piece absolute w-2 h-3 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10px`,
            backgroundColor: colors[i % colors.length],
            animationDelay: `${Math.random() * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    for (const k of ["nume", "email", "telefon", "data", "ora", "copii", "varsta", "pachet"]) {
      if (!fd.get(k)) errs[k] = "Câmp obligatoriu";
    }
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-pink)] transition";

  return (
    <>
      <PageHero title="Rezervă o Sesiune" accent="📅" subtitle="Completează formularul și te contactăm în cel mai scurt timp pentru confirmare." />
      <section className="py-10 relative">
        {submitted && <Confetti />}
        <div className="mx-auto max-w-2xl px-6">
          {submitted ? (
            <div className="bg-card rounded-3xl border-2 border-[var(--brand-pink)] p-10 text-center shadow-xl">
              <div className="text-5xl">🎉</div>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Rezervarea a fost trimisă!</h2>
              <p className="mt-3 text-muted-foreground">Vom reveni cu confirmarea în maxim 24 ore!</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-card rounded-3xl border border-border p-8 shadow-lg space-y-5">
              {[
                { k: "nume", label: "Nume și Prenume", type: "text" },
                { k: "email", label: "Email", type: "email" },
                { k: "telefon", label: "Telefon", type: "tel" },
                { k: "data", label: "Data dorită", type: "date" },
              ].map(f => (
                <div key={f.k}>
                  <label className="block text-sm font-bold mb-1.5">{f.label}</label>
                  <input name={f.k} type={f.type} className={inputCls} />
                  {errors[f.k] && <p className="text-xs text-destructive mt-1">{errors[f.k]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold mb-1.5">Ora dorită</label>
                <select name="ora" className={inputCls} defaultValue=""><option value="" disabled>Alege ora</option>{slots.map(s => <option key={s}>{s}</option>)}</select>
                {errors.ora && <p className="text-xs text-destructive mt-1">{errors.ora}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5">Numărul de copii</label>
                <input name="copii" type="number" min={1} max={30} className={inputCls} />
                {errors.copii && <p className="text-xs text-destructive mt-1">{errors.copii}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5">Vârsta copiilor</label>
                <select name="varsta" className={inputCls} defaultValue=""><option value="" disabled>Alege grupa</option><option>1-3 ani</option><option>3-6 ani</option><option>6-12 ani</option><option>Mixt</option></select>
                {errors.varsta && <p className="text-xs text-destructive mt-1">{errors.varsta}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5">Pachetul ales</label>
                <select name="pachet" className={inputCls} defaultValue=""><option value="" disabled>Alege pachetul</option><option>Mini</option><option>Maxi</option><option>Party</option><option>Altul</option></select>
                {errors.pachet && <p className="text-xs text-destructive mt-1">{errors.pachet}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5">Mențiuni / cereri speciale</label>
                <textarea name="mentiuni" rows={4} className={inputCls} />
              </div>
              <button type="submit" className="w-full rounded-full bg-[var(--brand-pink)] text-white font-bold py-4 hover:brightness-110 transition">
                Trimite Rezervarea 🎉
              </button>
              <p className="text-center text-sm text-muted-foreground">
                Sau ne poți contacta direct: <a href="tel:+40764292754" className="font-bold text-[var(--brand-pink)] inline-flex items-center gap-1"><Phone className="w-4 h-4" />+40 764 292 754</a>
              </p>
            </form>
          )}
        </div>
      </section>
      <BackHome />
    </>
  );
}
