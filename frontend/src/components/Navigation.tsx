import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-3">
  <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center">
    <img
      src="https://i.postimg.cc/ht86Mkdh/My-logo-removebg-preview.png"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </div>
  <span className="text-xl font-bold text-primary hidden sm:block">
    Kur.j Developer
  </span>
</Link>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}

            {/* ThemeToggle visible on desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* ThemeToggle visible on mobile */}
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
