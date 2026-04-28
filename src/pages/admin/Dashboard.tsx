import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Inbox, FolderKanban, TrendingUp, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale";

interface Stats {
  totalProjects: number;
  publishedProjects: number;
  totalLeads: number;
  newLeads: number;
  monthLeads: number;
}

interface RecentLead {
  id: string;
  name: string;
  email: string | null;
  message: string;
  created_at: string;
  status: string;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({ totalProjects: 0, publishedProjects: 0, totalLeads: 0, newLeads: 0, monthLeads: 0 });
  const [recent, setRecent] = useState<RecentLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void load();
  }, []);

  const load = async () => {
    setLoading(true);
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const [projTotal, projPub, leadsTotal, leadsNew, leadsMonth, recentLeads] = await Promise.all([
      supabase.from("projects").select("id", { count: "exact", head: true }),
      supabase.from("projects").select("id", { count: "exact", head: true }).eq("published", true),
      supabase.from("leads").select("id", { count: "exact", head: true }),
      supabase.from("leads").select("id", { count: "exact", head: true }).eq("status", "novo"),
      supabase.from("leads").select("id", { count: "exact", head: true }).gte("created_at", startOfMonth.toISOString()),
      supabase.from("leads").select("id, name, email, message, created_at, status").order("created_at", { ascending: false }).limit(5),
    ]);

    setStats({
      totalProjects: projTotal.count ?? 0,
      publishedProjects: projPub.count ?? 0,
      totalLeads: leadsTotal.count ?? 0,
      newLeads: leadsNew.count ?? 0,
      monthLeads: leadsMonth.count ?? 0,
    });
    setRecent(recentLeads.data ?? []);
    setLoading(false);
  };

  const cards = [
    { label: "Pedidos novos", value: stats.newLeads, icon: Inbox, accent: stats.newLeads > 0 },
    { label: "Pedidos este mês", value: stats.monthLeads, icon: TrendingUp },
    { label: "Pedidos totais", value: stats.totalLeads, icon: Clock },
    { label: "Projetos publicados", value: `${stats.publishedProjects} / ${stats.totalProjects}`, icon: FolderKanban },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl sm:text-4xl mb-1">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Resumo da atividade Ecofachadas.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.label} className={`border ${c.accent ? "border-foreground bg-foreground text-background" : "border-border bg-card"} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <c.icon className="w-5 h-5 opacity-70" />
            </div>
            <div className="editorial-num text-3xl mb-1">{loading ? "—" : c.value}</div>
            <div className="text-xs uppercase tracking-wider opacity-70">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="border border-border bg-card">
        <div className="flex items-center justify-between gap-3 p-4 sm:p-6 border-b border-border">
          <h2 className="font-display text-xl sm:text-2xl">Últimos pedidos</h2>
          <Link to="/admin/pedidos" className="text-sm text-muted-foreground hover:text-foreground transition">Ver todos →</Link>
        </div>
        {loading ? (
          <div className="p-6 text-sm text-muted-foreground">A carregar…</div>
        ) : recent.length === 0 ? (
          <div className="p-6 text-sm text-muted-foreground">Sem pedidos ainda.</div>
        ) : (
          <ul className="divide-y divide-border">
            {recent.map((l) => (
              <li key={l.id} className="p-4 sm:p-6 hover:bg-muted/40 transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-medium">{l.name}</span>
                      {l.status === "novo" && <span className="text-[10px] uppercase tracking-wider bg-foreground text-background px-2 py-0.5">novo</span>}
                    </div>
                    {l.email && <div className="text-xs text-muted-foreground mb-1">{l.email}</div>}
                    <p className="text-sm text-foreground/80 line-clamp-2">{l.message}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 editorial-num">
                    {formatDistanceToNow(new Date(l.created_at), { addSuffix: true, locale: pt })}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
