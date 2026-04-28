import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Eye, EyeOff, Star, Upload, X } from "lucide-react";
import { z } from "zod";

type Category = "etics" | "fachadas-ventiladas" | "construcao";

interface Project {
  id: string;
  title: string;
  slug: string;
  location: string | null;
  year: number | null;
  category: Category;
  description: string | null;
  cover_url: string | null;
  gallery: string[];
  featured: boolean;
  published: boolean;
  sort_order: number;
}

const emptyForm = {
  title: "",
  slug: "",
  location: "",
  year: new Date().getFullYear(),
  category: "etics" as Category,
  description: "",
  cover_url: "",
  gallery: [] as string[],
  featured: false,
  published: true,
  sort_order: 0,
};

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const projectSchema = z.object({
  title: z.string().trim().min(1).max(200),
  slug: z.string().trim().min(1).max(200).regex(/^[a-z0-9-]+$/, "Slug inválido"),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  year: z.number().int().min(1900).max(2100).nullable(),
  category: z.enum(["etics", "fachadas-ventiladas", "construcao"]),
  description: z.string().trim().max(5000).optional().or(z.literal("")),
});

const categoryLabel: Record<Category, string> = {
  "etics": "ETICS",
  "fachadas-ventiladas": "Fachadas Ventiladas",
  "construcao": "Construção",
};

const Projects = () => {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState({ ...emptyForm });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<Project | null>(null);

  useEffect(() => {
    void load();
  }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (error) toast({ title: "Erro a carregar", description: error.message, variant: "destructive" });
    setItems((data ?? []).map((p) => ({ ...p, gallery: (p.gallery as string[]) ?? [] })));
    setLoading(false);
  };

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyForm });
    setOpen(true);
  };

  const openEdit = (p: Project) => {
    setEditing(p);
    setForm({
      title: p.title,
      slug: p.slug,
      location: p.location ?? "",
      year: p.year ?? new Date().getFullYear(),
      category: p.category,
      description: p.description ?? "",
      cover_url: p.cover_url ?? "",
      gallery: p.gallery ?? [],
      featured: p.featured,
      published: p.published,
      sort_order: p.sort_order,
    });
    setOpen(true);
  };

  const handleUpload = async (file: File, target: "cover" | "gallery") => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error: upErr } = await supabase.storage.from("projects").upload(path, file, { upsert: false });
      if (upErr) throw upErr;
      const { data: pub } = supabase.storage.from("projects").getPublicUrl(path);
      if (target === "cover") {
        setForm((f) => ({ ...f, cover_url: pub.publicUrl }));
      } else {
        setForm((f) => ({ ...f, gallery: [...f.gallery, pub.publicUrl] }));
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erro";
      toast({ title: "Erro no upload", description: msg, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const removeGalleryImage = (url: string) => {
    setForm((f) => ({ ...f, gallery: f.gallery.filter((g) => g !== url) }));
  };

  const onSave = async () => {
    const parsed = projectSchema.safeParse({
      title: form.title,
      slug: form.slug || slugify(form.title),
      location: form.location,
      year: Number(form.year),
      category: form.category,
      description: form.description,
    });
    if (!parsed.success) {
      toast({ title: "Dados inválidos", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = {
      title: parsed.data.title,
      slug: parsed.data.slug,
      location: parsed.data.location || null,
      year: parsed.data.year,
      category: parsed.data.category,
      description: parsed.data.description || null,
      cover_url: form.cover_url || null,
      gallery: form.gallery,
      featured: form.featured,
      published: form.published,
      sort_order: Number(form.sort_order) || 0,
    };
    const res = editing
      ? await supabase.from("projects").update(payload).eq("id", editing.id)
      : await supabase.from("projects").insert(payload);
    setSaving(false);
    if (res.error) {
      toast({ title: "Erro a guardar", description: res.error.message, variant: "destructive" });
      return;
    }
    toast({ title: editing ? "Projeto atualizado" : "Projeto criado" });
    setOpen(false);
    void load();
  };

  const onDelete = async () => {
    if (!confirmDelete) return;
    const { error } = await supabase.from("projects").delete().eq("id", confirmDelete.id);
    if (error) {
      toast({ title: "Erro a eliminar", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Projeto eliminado" });
    setConfirmDelete(null);
    void load();
  };

  const togglePublished = async (p: Project) => {
    const { error } = await supabase.from("projects").update({ published: !p.published }).eq("id", p.id);
    if (error) toast({ title: "Erro", description: error.message, variant: "destructive" });
    else void load();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl mb-1">Projetos</h1>
          <p className="text-sm text-muted-foreground">{items.length} projeto(s) — gere o portfólio público.</p>
        </div>
        <Button onClick={openCreate} className="rounded-none h-11 w-full sm:w-auto">
          <Plus className="w-4 h-4" /> Novo projeto
        </Button>
      </div>

      <div className="border border-border bg-card">
        {loading ? (
          <div className="p-8 text-sm text-muted-foreground">A carregar…</div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-muted-foreground mb-4">Ainda não há projetos.</p>
            <Button onClick={openCreate} variant="outline" className="rounded-none">
              <Plus className="w-4 h-4" /> Adicionar o primeiro
            </Button>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {items.map((p) => (
              <li key={p.id} className="flex items-center gap-4 p-4 hover:bg-muted/40 transition">
                <div className="w-20 h-20 bg-muted shrink-0 overflow-hidden">
                  {p.cover_url ? <img src={p.cover_url} alt={p.title} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">sem imagem</div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium truncate">{p.title}</span>
                    {p.featured && <Star className="w-3.5 h-3.5 fill-foreground" />}
                    {!p.published && <span className="text-[10px] uppercase tracking-wider bg-muted px-2 py-0.5">rascunho</span>}
                  </div>
                  <div className="text-xs text-muted-foreground flex flex-wrap gap-x-3">
                    <span>{categoryLabel[p.category]}</span>
                    {p.location && <span>• {p.location}</span>}
                    {p.year && <span>• {p.year}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button variant="ghost" size="icon" onClick={() => togglePublished(p)} title={p.published ? "Despublicar" : "Publicar"}>
                    {p.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => openEdit(p)} title="Editar">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setConfirmDelete(p)} title="Eliminar">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Edit / create dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Editar projeto" : "Novo projeto"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2 sm:col-span-2">
                <Label>Título</Label>
                <Input
                  value={form.title}
                  onChange={(e) => {
                    const t = e.target.value;
                    setForm((f) => ({ ...f, title: t, slug: !editing ? slugify(t) : f.slug }));
                  }}
                  placeholder="Ex: Moradia em Oliveira de Frades"
                />
              </div>
              <div className="space-y-2">
                <Label>Slug (URL)</Label>
                <Input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: slugify(e.target.value) }))} />
              </div>
              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select value={form.category} onValueChange={(v) => setForm((f) => ({ ...f, category: v as Category }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="etics">ETICS</SelectItem>
                    <SelectItem value="fachadas-ventiladas">Fachadas Ventiladas</SelectItem>
                    <SelectItem value="construcao">Construção</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Localização</Label>
                <Input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} placeholder="Viseu" />
              </div>
              <div className="space-y-2">
                <Label>Ano</Label>
                <Input type="number" value={form.year} onChange={(e) => setForm((f) => ({ ...f, year: Number(e.target.value) }))} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Descrição</Label>
                <Textarea rows={4} value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
              </div>
            </div>

            {/* Cover */}
            <div className="space-y-2">
              <Label>Imagem de capa</Label>
              {form.cover_url ? (
                <div className="relative w-full max-w-xs">
                  <img src={form.cover_url} alt="capa" className="w-full aspect-[4/3] object-cover border border-border" />
                  <button type="button" onClick={() => setForm((f) => ({ ...f, cover_url: "" }))} className="absolute top-2 right-2 bg-foreground text-background p-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border p-6 cursor-pointer hover:border-foreground transition text-sm text-muted-foreground">
                  <Upload className="w-4 h-4" />
                  {uploading ? "A carregar…" : "Carregar imagem de capa"}
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void handleUpload(f, "cover"); }} />
                </label>
              )}
            </div>

            {/* Gallery */}
            <div className="space-y-2">
              <Label>Galeria ({form.gallery.length})</Label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {form.gallery.map((url) => (
                  <div key={url} className="relative">
                    <img src={url} alt="" className="w-full aspect-square object-cover border border-border" />
                    <button type="button" onClick={() => removeGalleryImage(url)} className="absolute top-1 right-1 bg-foreground text-background p-1">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <label className="flex items-center justify-center aspect-square border-2 border-dashed border-border cursor-pointer hover:border-foreground transition text-xs text-muted-foreground">
                  <Upload className="w-4 h-4" />
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void handleUpload(f, "gallery"); }} />
                </label>
              </div>
            </div>

            {/* Flags */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center justify-between border border-border p-3">
                <Label htmlFor="featured" className="cursor-pointer">Destaque</Label>
                <Switch id="featured" checked={form.featured} onCheckedChange={(v) => setForm((f) => ({ ...f, featured: v }))} />
              </div>
              <div className="flex items-center justify-between border border-border p-3">
                <Label htmlFor="published" className="cursor-pointer">Publicado</Label>
                <Switch id="published" checked={form.published} onCheckedChange={(v) => setForm((f) => ({ ...f, published: v }))} />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Ordem</Label>
                <Input type="number" value={form.sort_order} onChange={(e) => setForm((f) => ({ ...f, sort_order: Number(e.target.value) }))} />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)} className="rounded-none">Cancelar</Button>
            <Button onClick={onSave} disabled={saving || uploading} className="rounded-none">
              {saving ? "A guardar…" : "Guardar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar projeto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser revertida. O projeto "{confirmDelete?.title}" será removido permanentemente.
            </AlertDialogDescription>
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

export default Projects;
