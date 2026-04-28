import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Projetos from "./pages/Projetos.tsx";
import Privacidade from "./pages/Privacidade.tsx";
import Termos from "./pages/Termos.tsx";
import Etics from "./pages/servicos/Etics.tsx";
import FachadasVentiladas from "./pages/servicos/FachadasVentiladas.tsx";
import Construcao from "./pages/servicos/Construcao.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";
import BackToTop from "./components/BackToTop.tsx";
import CookieBanner from "./components/CookieBanner.tsx";
import Login from "./pages/admin/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Projects from "./pages/admin/Projects.tsx";
import Leads from "./pages/admin/Leads.tsx";
import AdminLayout from "./components/admin/AdminLayout.tsx";
import RequireAdmin from "./components/admin/RequireAdmin.tsx";

const queryClient = new QueryClient();

const PublicChrome = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/admin")) return null;
  return (
    <>
      <WhatsAppButton />
      <BackToTop />
      <CookieBanner />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/servicos/etics" element={<Etics />} />
            <Route path="/servicos/fachadas-ventiladas" element={<FachadasVentiladas />} />
            <Route path="/servicos/construcao" element={<Construcao />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />

            {/* Admin */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminLayout />
                </RequireAdmin>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="projetos" element={<Projects />} />
              <Route path="pedidos" element={<Leads />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <PublicChrome />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
