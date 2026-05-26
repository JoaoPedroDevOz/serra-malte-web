export default function StatsSection() {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "25+", label: "Estilos de Cerveja" },
    { value: "15+", label: "Prêmios Conquistados" },
    { value: "5000+", label: "Clientes Satisfeitos" },
  ];

  return (
    <section className="py-20 bg-amber-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-amber-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
