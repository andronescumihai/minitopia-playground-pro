import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "./theme";

const links = [
  { to: "/despre-noi", label: "Despre Noi" },
  { to: "/pachete", label: "Pachete & Tarife" },
  { to: "/evenimente", label: "Evenimente" },
  { to: "/rezervari", label: "Rezervări" },
  { to: "/contact", label: "Contact" },
  { to: "/review-uri", label: "Review-uri" },
  { to: "/locatie", label: "Locație" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border"
          : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-[var(--brand-pink)] bg-[var(--tint-pink)]" }}
              className="px-3 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:text-[var(--brand-pink)] hover:bg-[var(--tint-pink)] transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Comută tema"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Meniu"
            className="lg:hidden p-2 rounded-full hover:bg-muted"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden animate-in fade-in duration-300">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Închide" className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-lg font-bold hover:bg-[var(--tint-pink)] hover:text-[var(--brand-pink)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
