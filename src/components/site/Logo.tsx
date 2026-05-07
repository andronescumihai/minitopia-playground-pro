import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <Link
      to="/"
      aria-label="Minitopia - acasă"
      className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
    >
      <span className="grid place-items-center w-7 h-7 rounded-full bg-[var(--brand-yellow)] text-[var(--brand-purple)]">
        <Sparkles className="w-4 h-4" />
      </span>
      <span className="font-display font-extrabold text-lg text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">
        Minitopia
      </span>
    </Link>
  );
}
