import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Trash2, MessageSquare } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale";

type Status = "novo" | "contactado" | "ganho" | "perdido";

interface Lead {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string;
  status: Status;
  internal_notes: string | null;
  source: string | null;
  created_at: string;
}

const statusLabels: Record<Status, string> = { novo: "Novo", contactado: "Contactado", ganho: "Ganho", perdido: "Perdido" };
const statusColors: Record<Status, string> = {
  novo: "bg-foreground text-background",
  contactado: "bg-muted text-foreground",
  ganho: "bg-green-600 text-white",
  perdido: "bg-muted text-muted-foreground",
};

const Leads = () => {
  const [items, setItems] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [notes, setNotes] = useState("");
  const [confirmDelete, setConfirmDelete] = useState<Lead | null>(null);

  useEffect(() => {
    void load();
  }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    if (error) toast({ title: "Erro", description: error.message, variant: "destructive" });
    setItems((data as Lead[]) ?? []);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: Status) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) toast({ title: "Erro", description: error.message, variant: "destructive" });
    else {
      toast({ title: "Estado atualizado" });
      setSelected((s) => (s && s.id === id ? { ...s, status } : s));
      void load();
    }
  };

  const saveNotes = async () => {
    if (!selected) return;
    const { error } = await supabase.from("leads").update({ internal_notes: notes }).eq("id", selected.id);
    if (error) toast({ title: "Erro", description: error.message, variant: "destructive" });
    else {
      toast({ title: "Notas guardadas" });
      void load();
    }
  };

  const onDelete = async () => {
    if (!confirmDelete) return;
    const { error } = await supabase.from("leads").delete().eq("id", confirmDelete.id);
    if (error) toast({ title: "Erro", description: error.message, variant: "destructive" });
    else {
      toast({ title: "Pedido eliminado" });
      setConfirmDelete(null);
      if (selected?.id === confirmDelete.id) setSelected(null);
      void load();
    }
  };

  const openLead = (l: Lead) => {
    setSelected(l);
    setNotes(l.internal_notes ?? "");
    if (l.status === "novo") void updateStatus(l.id, "contactado");
  };

  const filtered = filter === "all" ? items : items.filter((l) => l.status === filter);
  const counts = {
    all: items.length,
    novo: items.filter((l) => l.status === "novo").length,
    contactado: items.filter((l) => l.status === "contactado").length,
    ganho: items.filter((l) => l.status === "ganho").length,
    perdido: items.filter((l) => l.status === "perdido").length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl sm:text-4xl mb-1">Pedidos de orçamento</h1>
        <p className="text-sm text-muted-foreground">Contactos recebidos pelo formulário do site.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["all", "novo", "contactado", "ganho", "perdido"] as const).map((k) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={`px-3 py-1.5 text-sm border transition ${filter === k ? "bg-foreground text-background border-foreground" : "bg-card border-border hover:border-foreground"}`}
          >
            {k === "all" ? "Todos" : statusLabels[k]} <span className="opacity-60 editorial-num ml-1">({counts[k]})</span>
          </button>
        ))}
      </div>

      <div className="border border-border bg-card">
        {loading ? (
          <div className="p-8 text-sm text-muted-foreground">A carregar…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-sm text-muted-foreground">
            <MessageSquare className="w-8 h-8 mx-auto mb-3 opacity-50" />
            Sem pedidos {filter !== "all" ? `com estado "${statusLabels[filter as Status]}"` : ""}.
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((l) => (
              <li key={l.id}>
                <button onClick={() => openLead(l)} className="w-full text-left p-4 sm:p-5 hover:bg-muted/40 transition flex items-start gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-medium truncate">{l.name}</span>
                      <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 ${statusColors[l.status]}`}>{statusLabels[l.status]}</span>
                    </div>
                    <div className="text-xs text-muted-foreground flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-3 gap-y-0.5 mb-2">
                      {l.email && <span className="flex items-center gap-1 min-w-0"><Mail className="w-3 h-3 shrink-0" /> <span className="truncate">{l.email}</span></span>}
                      {l.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3 shrink-0" /> {l.phone}</span>}
                    </div>
                    <p className="text-sm text-foreground/80 line-clamp-2">{l.message}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground shrink-0 editorial-num text-right">
                    {formatDistanceToNow(new Date(l.created_at), { addSuffix: true, locale: pt })}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">{selected.name}</SheetTitle>
                <p className="text-xs text-muted-foreground editorial-num">
                  {format(new Date(selected.created_at), "dd MMM yyyy 'às' HH:mm", { locale: pt })}
                </p>
              </SheetHeader>

              <div className="space-y-6 mt-6">
                <div className="space-y-2">
                  {selected.email && (
                    <a href={`mailto:${selected.email}`} className="flex items-center gap-2 text-sm hover:text-foreground transition">
                      <Mail className="w-4 h-4" /> {selected.email}
                    </a>
                  )}
                  {selected.phone && (
                    <a href={`tel:${selected.phone}`} className="flex items-center gap-2 text-sm hover:text-foreground transition">
                      <Phone className="w-4 h-4" /> {selected.phone}
                    </a>
                  )}
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem</Label>
                  <p className="mt-2 text-sm whitespace-pre-wrap">{selected.message}</p>
                </div>

                <div className="space-y-2">
                  <Label>Estado</Label>
                  <Select value={selected.status} onValueChange={(v) => updateStatus(selected.id, v as Status)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="novo">Novo</SelectItem>
                      <SelectItem value="contactado">Contactado</SelectItem>
                      <SelectItem value="ganho">Ganho</SelectItem>
                      <SelectItem value="perdido">Perdido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Notas internas</Label>
                  <Textarea rows={5} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Apontamentos sobre este pedido…" />
                  <Button onClick={saveNotes} className="rounded-none">Guardar notas</Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button variant="outline" onClick={() => setConfirmDelete(selected)} className="rounded-none w-full">
                    <Trash2 className="w-4 h-4" /> Eliminar pedido
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <AlertDialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar pedido?</AlertDialogTitle>
            <AlertDialogDescription>Esta ação não pode ser revertida.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Leads;
