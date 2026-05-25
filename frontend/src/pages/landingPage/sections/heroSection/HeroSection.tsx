// HeroSection.jsx
import { ChevronRight } from "lucide-react";
import "./HeroSection.css";
import { scrollToSection } from "../../../../shared/utils/scrollToSection";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Cervejas Artesanais
              <br />
              <span className="hero-highlight">Feitas com Paixão</span>
            </h1>
            <p className="hero-description">
              Descubra sabores únicos e autênticos. Cada garrafa é uma
              experiência artesanal cuidadosamente elaborada com ingredientes
              premium selecionados.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection("beers")}
                className="btn-primary"
              >
                Conheça Nossas Cervejas
                <ChevronRight className="btn-icon" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="btn-secondary"
              >
                Nossa História
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cerveja artesanal"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
