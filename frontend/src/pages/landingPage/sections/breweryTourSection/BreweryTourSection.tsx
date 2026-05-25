// BreweryTourSection.jsx
import { ChevronRight } from "lucide-react";
import "./BreweryTourSection.css";

export default function BreweryTourSection() {
  const tourFeatures = [
    {
      title: "Tour Completo",
      description: "Conheça todo o processo de fabricação",
    },
    {
      title: "Degustação",
      description: "Prove 5 estilos diferentes de cervejas",
    },
    {
      title: "Harmonização",
      description: "Aprenda a harmonizar cervejas com comida",
    },
  ];

  const handleScheduleVisit = () => {
    console.log("Agendar visita");
    // Aqui você pode adicionar a lógica de agendamento
  };

  return (
    <section className="brewery-section">
      <div className="brewery-container">
        <div className="brewery-grid">
          {/* Left Content */}
          <div className="brewery-content">
            <h2 className="brewery-title">Visite Nossa Cervejaria</h2>
            <p className="brewery-description">
              Venha conhecer nosso processo de produção artesanal! Oferecemos
              tours guiados onde você pode ver de perto como fazemos nossas
              cervejas premiadas.
            </p>

            <ul className="brewery-features">
              {tourFeatures.map((feature, index) => (
                <li key={index} className="brewery-feature">
                  <ChevronRight className="feature-icon" />
                  <div>
                    <div className="feature-title">{feature.title}</div>
                    <div className="feature-description">
                      {feature.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button className="brewery-button" onClick={handleScheduleVisit}>
              Agendar Visita
            </button>
          </div>

          {/* Right Images */}
          <div className="brewery-images">
            <img
              src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Torneiras de cerveja"
              className="brewery-image-top"
            />
            <img
              src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Degustação de cervejas"
              className="brewery-image-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
