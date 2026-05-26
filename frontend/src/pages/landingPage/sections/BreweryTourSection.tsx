import { ChevronRight } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Visite Nossa Cervejaria</h2>
            <p className="text-gray-600 mb-6">
              Venha conhecer nosso processo de produção artesanal! Oferecemos
              tours guiados onde você pode ver de perto como fazemos nossas
              cervejas premiadas.
            </p>
            <ul className="space-y-4 mb-8">
              {tourFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <div className="font-medium">{feature.title}</div>
                    <div className="text-gray-600">{feature.description}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={handleScheduleVisit}
              className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
            >
              Agendar Visita
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Torneiras de cerveja"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Degustação de cervejas"
              className="rounded-xl shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
