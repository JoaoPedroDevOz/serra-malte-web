import "./AboutSection.css"
import { Beer, Award, Users } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="grid-2 items-center">
          <div className="about-image-container">
            <img
              src="https://images.unsplash.com/photo-1608232385022-8ba61bec6c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Barris de cerveja"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">Nossa História</h2>
            <p className="about-text">
              Fundada em 2014, nossa cervejaria nasceu da paixão por criar
              cervejas excepcionais que celebram a tradição cervejeira com um
              toque de inovação brasileira.
            </p>
            <p className="about-text mb-large">
              Utilizamos apenas ingredientes premium, maltes importados e
              lúpulos selecionados para criar experiências únicas de sabor. Cada
              lote é cuidadosamente monitorado por nossos mestres cervejeiros
              para garantir a qualidade que você merece.
            </p>

            <div className="grid-3">
              <div className="badge-item">
                <div className="icon-wrapper">
                  <Beer className="icon" />
                </div>
                <div className="badge-label">100% Artesanal</div>
              </div>
              <div className="badge-item">
                <div className="icon-wrapper">
                  <Award className="icon" />
                </div>
                <div className="badge-label">Premiadas</div>
              </div>
              <div className="badge-item">
                <div className="icon-wrapper">
                  <Users className="icon" />
                </div>
                <div className="badge-label">Tradição</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
