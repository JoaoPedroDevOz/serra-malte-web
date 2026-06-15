import { Beer, X, Menu } from "lucide-react";
import { scrollToSection } from "../../../shared/utils/scrollToSection.util";
import React from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Beer className="w-8 h-8 text-amber-600" />
            <span className="font-bold text-xl text-gray-900">
              Serra & Malte
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beers")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Cervejas
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
            >
              Fazer Pedido
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beers")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-left"
            >
              Cervejas
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-left"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors text-center"
            >
              Fazer Pedido
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
