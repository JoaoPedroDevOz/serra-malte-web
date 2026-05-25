import "./StatsSection.css";

export default function StatsSection() {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "25+", label: "Estilos de Cerveja" },
    { value: "15+", label: "Prêmios Conquistados" },
    { value: "5000+", label: "Clientes Satisfeitos" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
