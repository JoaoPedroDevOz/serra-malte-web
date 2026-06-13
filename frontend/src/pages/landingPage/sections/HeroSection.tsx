// HeroSection.jsx
import { ChevronRight } from "lucide-react";
import { scrollToSection } from "../../../shared/utils/scrollToSection";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6 text-2xl font-semibold">
              Cervejas Artesanais
              <br />
              <span className="text-amber-600">Feitas com Paixão</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubra sabores únicos e autênticos. Cada garrafa é uma
              experiência artesanal cuidadosamente elaborada com ingredientes
              premium selecionados.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("beers")}
                className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors flex items-center gap-2"
              >
                Conheça Nossas Cervejas
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-50 transition-colors"
              >
                Nossa História
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cerveja artesanal"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
