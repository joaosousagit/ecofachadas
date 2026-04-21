import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const KEY = "ecofachadas-cookies-v1";

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    localStorage.setItem(KEY, value);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-foreground text-background border-t border-background/20">
      <div className="container py-5 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-background/80 max-w-3xl">
          Usamos cookies essenciais ao funcionamento do site e, com o seu consentimento, cookies de análise para melhorar a experiência. Veja a nossa <a href="/privacidade" className="underline hover:text-accent">Política de Privacidade</a>.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Button onClick={() => decide("rejected")} variant="ghost" className="rounded-none text-background hover:bg-background/10 editorial-num">Rejeitar</Button>
          <Button onClick={() => decide("accepted")} className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90 editorial-num">Aceitar</Button>
          <button onClick={() => setOpen(false)} aria-label="Fechar" className="text-background/60 hover:text-background ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
