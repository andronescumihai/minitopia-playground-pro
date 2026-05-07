import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut, Search, Check, X, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: Page,
  head: () => ({ meta: [{ title: "Admin — Minitopia" }, { name: "robots", content: "noindex" }] }),
});

type Status = "Confirmată" | "În așteptare" | "Anulată";
type Resv = { id: number; nume: string; tel: string; data: string; ora: string; copii: number; pachet: string; status: Status };

const seed: Resv[] = [
  { id: 1, nume: "Andreea Popa", tel: "0722 111 222", data: "2025-05-10", ora: "12:00", copii: 8, pachet: "Maxi", status: "Confirmată" },
  { id: 2, nume: "Mihai Ionescu", tel: "0744 333 444", data: "2025-05-11", ora: "16:00", copii: 12, pachet: "Party", status: "În așteptare" },
  { id: 3, nume: "Cristina Dobre", tel: "0755 555 666", data: "2025-05-12", ora: "10:00", copii: 4, pachet: "Mini", status: "Confirmată" },
  { id: 4, nume: "Vlad Marin", tel: "0766 777 888", data: "2025-05-12", ora: "14:00", copii: 6, pachet: "Maxi", status: "În așteptare" },
  { id: 5, nume: "Diana Tudor", tel: "0788 999 000", data: "2025-05-13", ora: "18:00", copii: 3, pachet: "Mini", status: "Confirmată" },
  { id: 6, nume: "Bogdan Stan", tel: "0712 345 678", data: "2025-05-14", ora: "12:00", copii: 15, pachet: "Party", status: "Anulată" },
  { id: 7, nume: "Raluca Ene", tel: "0723 456 789", data: "2025-05-15", ora: "10:00", copii: 5, pachet: "Maxi", status: "Confirmată" },
];

const badge: Record<Status, string> = {
  "Confirmată": "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  "În așteptare": "bg-[var(--brand-yellow)]/25 text-amber-700 dark:text-amber-300",
  "Anulată": "bg-destructive/15 text-destructive",
};

function Login({ onOk }: { onOk: () => void }) {
  const [err, setErr] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("email") === "admin@minitopia.ro" && fd.get("password") === "Minitopia2025!") onOk();
    else setErr("Email sau parolă incorecte.");
  }
  return (
    <div className="min-h-[70vh] grid place-items-center px-6">
      <form onSubmit={submit} className="w-full max-w-md bg-card rounded-3xl border border-border p-8 shadow-xl space-y-4">
        <div className="text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-[var(--brand-pink)]/15 text-[var(--brand-pink)] grid place-items-center"><ShieldCheck className="w-7 h-7" /></div>
          <h1 className="mt-4 font-display text-2xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Dashboard Admin 🔐</h1>
          <p className="text-sm text-muted-foreground">Autentifică-te pentru a continua.</p>
        </div>
        <input name="email" type="email" placeholder="Email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
        <input name="password" type="password" placeholder="Parolă" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
        {err && <p className="text-sm text-destructive">{err}</p>}
        <button className="w-full rounded-full bg-[var(--brand-pink)] text-white font-bold py-3 hover:brightness-110 transition">Intră în cont</button>
      </form>
    </div>
  );
}

function Page() {
  const [auth, setAuth] = useState(false);
  const [list, setList] = useState(seed);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | Status>("all");
  const [date, setDate] = useState("");

  if (!auth) return <Login onOk={() => setAuth(true)} />;

  const filtered = list.filter(r =>
    (q === "" || r.nume.toLowerCase().includes(q.toLowerCase())) &&
    (status === "all" || r.status === status) &&
    (date === "" || r.data === date)
  );

  function setS(id: number, s: Status) { setList(l => l.map(r => r.id === id ? { ...r, status: s } : r)); }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-[var(--brand-purple)] dark:text-[var(--brand-yellow)]">Dashboard Admin 🔐</h1>
          <p className="text-sm text-muted-foreground">Gestionează rezervările Minitopia.</p>
        </div>
        <button onClick={() => setAuth(false)} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-bold hover:bg-muted">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Total Rezervări", value: 47, color: "text-[var(--brand-pink)]" },
          { label: "Rezervări Azi", value: 3, color: "text-[var(--brand-orange)]" },
          { label: "Venit Estimat", value: "3.760 RON", color: "text-[var(--brand-purple)]" },
          { label: "Rating Mediu", value: "4.9 ★", color: "text-amber-500" },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-2xl border border-border p-5 shadow-sm">
            <div className="text-sm text-muted-foreground">{s.label}</div>
            <div className={`mt-2 font-display text-3xl font-extrabold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-card rounded-3xl border border-border shadow-md overflow-hidden">
        <div className="p-5 grid md:grid-cols-3 gap-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Caută după nume…" className="w-full rounded-xl border border-border bg-background pl-9 pr-3 py-2 text-sm" />
          </div>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2 text-sm" />
          <select value={status} onChange={e=>setStatus(e.target.value as any)} className="rounded-xl border border-border bg-background px-3 py-2 text-sm">
            <option value="all">Toate statusurile</option>
            <option>Confirmată</option><option>În așteptare</option><option>Anulată</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left">
              <tr>{["#","Nume","Telefon","Data","Ora","Nr. Copii","Pachet","Status","Acțiuni"].map(h => <th key={h} className="px-4 py-3 font-bold whitespace-nowrap">{h}</th>)}</tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id} className="border-t border-border">
                  <td className="px-4 py-3">{r.id}</td>
                  <td className="px-4 py-3 font-bold">{r.nume}</td>
                  <td className="px-4 py-3">{r.tel}</td>
                  <td className="px-4 py-3">{r.data}</td>
                  <td className="px-4 py-3">{r.ora}</td>
                  <td className="px-4 py-3">{r.copii}</td>
                  <td className="px-4 py-3">{r.pachet}</td>
                  <td className="px-4 py-3"><span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${badge[r.status]}`}>{r.status}</span></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={()=>setS(r.id,"Confirmată")} aria-label="Confirmă" className="p-1.5 rounded-full bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500 hover:text-white transition"><Check className="w-4 h-4" /></button>
                      <button onClick={()=>setS(r.id,"Anulată")} aria-label="Anulează" className="p-1.5 rounded-full bg-destructive/15 text-destructive hover:bg-destructive hover:text-white transition"><X className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">Nicio rezervare găsită.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
