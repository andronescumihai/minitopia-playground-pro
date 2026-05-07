import { createFileRoute } from "@tanstack/react-router";
import { PageHero, BackHome } from "@/components/site/PageShell";
import { QRCodeSVG } from "qrcode.react";
import { Train, Bus, Car } from "lucide-react";

export const Route = createFileRoute("/locatie")({
  component: Page,
  head: () => ({ meta: [{ title: "Locație — Minitopia" }, { name: "description", content: "Cum ajungi la Minitopia, Sector 5, București." }] }),
});

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Sector+5,Bucharest,Romania";

function Page() {
  return (
    <>
      <PageHero title="Unde ne găsești" accent="📍" subtitle="Strada Veseliei, Nr. 10, Sector 5, București" />
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-border shadow-md aspect-video">
            <iframe
              title="Harta Minitopia"
              src="https://www.google.com/maps?q=Sector+5,Bucharest,Romania&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-card rounded-3xl border border-border p-6 text-center shadow-md flex flex-col items-center justify-center">
            <h3 className="font-display text-xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Scanează & navighează</h3>
            <div className="mt-4 p-4 bg-white rounded-2xl">
              <QRCodeSVG value={mapsUrl} size={160} fgColor="#7B2FBE" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Deschide harta direct pe telefon</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center font-display text-2xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Cum ajungi la noi</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { icon: Train, title: "Metrou", desc: "Stația Eroilor (M1/M3), apoi 5 min de mers pe jos." },
              { icon: Bus, title: "Autobuz", desc: "Liniile 122, 385, 601 – stația Veseliei." },
              { icon: Car, title: "Parcare", desc: "Parcare gratuită disponibilă în vecinătate." },
            ].map(t => (
              <div key={t.title} className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-[var(--brand-pink)]/15 text-[var(--brand-pink)] grid place-items-center"><t.icon className="w-6 h-6" /></div>
                <h3 className="mt-3 font-bold">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BackHome />
    </>
  );
}
