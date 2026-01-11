import { Home, Search, PlusSquare, MessageSquare, User } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isCreate?: boolean;
}

const NavItem = ({ icon, label, active, isCreate }: NavItemProps) => {
  if (isCreate) {
    return (
      <button className="flex flex-col items-center gap-0.5 relative">
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-lg blur-md opacity-50" />
          <div className="relative w-12 h-8 bg-gradient-to-r from-primary to-kwai-orange-glow rounded-lg flex items-center justify-center">
            <PlusSquare className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <button className="flex flex-col items-center gap-0.5 min-w-[60px]">
      <div className={`transition-colors ${active ? "text-foreground" : "text-muted-foreground"}`}>
        {icon}
      </div>
      <span className={`text-[10px] transition-colors ${active ? "text-foreground font-medium" : "text-muted-foreground"}`}>
        {label}
      </span>
    </button>
  );
};

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border/50">
      <div className="flex items-center justify-around py-2 pb-safe max-w-lg mx-auto">
        <NavItem icon={<Home className="w-6 h-6" />} label="Início" active />
        <NavItem icon={<Search className="w-6 h-6" />} label="Descobrir" />
        <NavItem icon={<PlusSquare />} label="" isCreate />
        <NavItem icon={<MessageSquare className="w-6 h-6" />} label="Caixa" />
        <NavItem icon={<User className="w-6 h-6" />} label="Eu" />
      </div>
    </nav>
  );
};

export default BottomNavigation;
