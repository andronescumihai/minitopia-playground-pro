import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A2A] text-slate-200 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-extrabold text-2xl text-[var(--brand-yellow)]">Minitopia</div>
          <p className="mt-2 italic text-[var(--brand-pink)] font-bold">Mini world maxi fun!!!</p>
          <p className="mt-3 text-sm text-slate-400">Locul unde imaginația prinde viață și fiecare colț e o nouă aventură.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-[var(--brand-pink)] transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-[var(--brand-pink)] transition"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="TikTok" className="p-2 rounded-full bg-white/10 hover:bg-[var(--brand-pink)] transition"><Music2 className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-white mb-3">Navigație</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[var(--brand-yellow)]">Acasă</Link></li>
            <li><Link to="/despre-noi" className="hover:text-[var(--brand-yellow)]">Despre Noi</Link></li>
            <li><Link to="/pachete" className="hover:text-[var(--brand-yellow)]">Pachete & Tarife</Link></li>
            <li><Link to="/evenimente" className="hover:text-[var(--brand-yellow)]">Evenimente</Link></li>
            <li><Link to="/rezervari" className="hover:text-[var(--brand-yellow)]">Rezervări</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--brand-yellow)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[var(--brand-pink)]" /> Strada Veseliei Nr. 10, Sector 5, București</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-[var(--brand-pink)]" /> <a href="tel:+40764292754">+40 764 292 754</a></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-[var(--brand-pink)]" /> <a href="mailto:rezervari@minitopia.ro">rezervari@minitopia.ro</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white mb-3">Program</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[var(--brand-pink)]" /> Luni–Vineri<br/>10:00 – 20:00</li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[var(--brand-pink)]" /> Sâmbătă–Duminică<br/>09:00 – 21:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-slate-400">
          © 2025 Minitopia · Toate drepturile rezervate · Creat cu ❤️ pentru cei mici
        </div>
      </div>
    </footer>
  );
}
