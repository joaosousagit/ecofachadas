import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/company";

const WhatsAppButton = () => {
  const msg = encodeURIComponent("Olá Ecofachadas, gostaria de pedir um orçamento.");
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsappHref}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar via WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-accent text-accent-foreground shadow-elegant rounded-full pl-4 pr-5 py-3 hover:scale-105 transition-transform duration-300"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="editorial-num text-xs hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
