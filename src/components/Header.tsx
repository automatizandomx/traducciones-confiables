import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Interpretación", href: "#interpretacion" },
  { name: "Cursos", href: "#cursos" },
  { name: "Proceso", href: "#proceso" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-subtle py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col">
            <span
              className={`font-heading text-xl font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              IR Translations
            </span>
            <span
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              Traducciones Iván Rodríguez
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isScrolled
                      ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant={isScrolled ? "default" : "hero-outline"}
              size="sm"
            >
              <a href="#contacto">Cotizar</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isScrolled
                        ? "text-foreground hover:bg-muted"
                        : "text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Button asChild variant="default" className="w-full">
                  <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                    Solicitar Cotización
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
