import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export function PageHero({ title, subtitle, accent }: { title: string; subtitle?: string; accent?: string }) {
  return (
    <section className="relative bg-gradient-to-b from-[var(--tint-purple)] to-background dark:from-[var(--tint-purple)] dark:to-background">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[var(--brand-pink)] mb-6">
          <ChevronLeft className="w-4 h-4" /> Înapoi la Homepage
        </Link>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">
          {title} {accent && <span className="text-[var(--brand-pink)]">{accent}</span>}
        </h1>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}

export function BackHome() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 text-center">
      <Link to="/" className="inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-pink)] hover:underline">
        <ChevronLeft className="w-4 h-4" /> Înapoi la Homepage
      </Link>
    </div>
  );
}
