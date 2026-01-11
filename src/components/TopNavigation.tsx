import { useState } from "react";
import { Search, Tv } from "lucide-react";

const TopNavigation = () => {
  const [activeTab, setActiveTab] = useState<"following" | "foryou">("foryou");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-safe">
      <div className="flex items-center justify-between py-3 max-w-lg mx-auto">
        {/* Live Button */}
        <button className="w-10 h-10 flex items-center justify-center">
          <Tv className="w-5 h-5 text-foreground/80" />
        </button>

        {/* Tab Switcher */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveTab("following")}
            className={`text-base font-semibold transition-all ${
              activeTab === "following"
                ? "text-foreground scale-105"
                : "text-foreground/50"
            }`}
          >
            Seguindo
          </button>
          <div className="w-px h-4 bg-foreground/20" />
          <button
            onClick={() => setActiveTab("foryou")}
            className={`text-base font-semibold transition-all ${
              activeTab === "foryou"
                ? "text-foreground scale-105"
                : "text-foreground/50"
            }`}
          >
            Para você
          </button>
        </div>

        {/* Search Button */}
        <button className="w-10 h-10 flex items-center justify-center">
          <Search className="w-5 h-5 text-foreground/80" />
        </button>
      </div>
    </header>
  );
};

export default TopNavigation;
