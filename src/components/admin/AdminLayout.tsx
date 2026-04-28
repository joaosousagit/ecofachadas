import { ReactNode, useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Inbox, LogOut, ArrowLeft, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ecofachadas-logo.png";

const navItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/admin/projetos", icon: FolderKanban, label: "Projetos" },
  { to: "/admin/pedidos", icon: Inbox, label: "Pedidos" },
];

const AdminLayout = ({ children }: { children?: ReactNode }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  // Close drawer on route change
  const closeDrawer = () => setMobileOpen(false);

  const SidebarContent = () => (
    <>
      <div className="h-20 px-6 flex items-center justify-between border-b border-border">
        <img src={logo} alt="Ecofachadas" className="h-10 w-auto" />
        <button
          onClick={closeDrawer}
          className="lg:hidden p-2 -mr-2 text-foreground/70 hover:text-foreground"
          aria-label="Fechar menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4 border-b border-border">
        <Link
          to="/"
          onClick={closeDrawer}
          className="flex items-center gap-2 px-3 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition border border-border"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={closeDrawer}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 text-sm transition ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-border space-y-2">
        <div className="px-3 py-2 text-xs text-muted-foreground truncate" title={user?.email ?? ""}>
          {user?.email}
        </div>
        <Button onClick={handleSignOut} variant="outline" className="w-full rounded-none">
          <LogOut className="w-4 h-4" /> Sair
        </Button>
      </div>
    </>
  );

  // Title for mobile topbar
  const currentLabel =
    navItems.find((n) => (n.end ? location.pathname === n.to : location.pathname.startsWith(n.to)))?.label ?? "Admin";

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 bg-background border-r border-border flex-col shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={closeDrawer}
            aria-hidden
          />
          <aside className="relative w-72 max-w-[85vw] bg-background border-r border-border flex flex-col animate-in slide-in-from-left duration-200">
            <SidebarContent />
          </aside>
        </div>
      )}

      <main className="flex-1 min-w-0 overflow-x-hidden">
        {/* Mobile topbar */}
        <header className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border h-14 flex items-center justify-between px-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 -ml-2 text-foreground/80 hover:text-foreground"
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium">{currentLabel}</span>
          <Link to="/" className="p-2 -mr-2 text-foreground/70 hover:text-foreground" aria-label="Voltar ao site">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">{children ?? <Outlet />}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
