import { ReactNode } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Inbox, LogOut, ArrowLeft } from "lucide-react";
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

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="w-64 bg-background border-r border-border flex flex-col shrink-0">
        <div className="h-20 px-6 flex items-center border-b border-border">
          <img src={logo} alt="Ecofachadas" className="h-10 w-auto" />
        </div>
        <div className="p-4 border-b border-border">
          <Link
            to="/"
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
      </aside>

      <main className="flex-1 overflow-x-hidden">
        <div className="p-8 max-w-7xl mx-auto">{children ?? <Outlet />}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
