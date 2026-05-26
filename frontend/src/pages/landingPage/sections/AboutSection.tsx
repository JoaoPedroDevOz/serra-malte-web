import { Beer, Award, Users } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1608232385022-8ba61bec6c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Barris de cerveja"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="mb-6">Nossa História</h2>
            <p className="text-gray-600 mb-6">
              Fundada em 2014, nossa cervejaria nasceu da paixão por criar
              cervejas excepcionais que celebram a tradição cervejeira com um
              toque de inovação brasileira.
            </p>
            <p className="text-gray-600 mb-8">
              Utilizamos apenas ingredientes premium, maltes importados e
              lúpulos selecionados para criar experiências únimport HeroSection
              from './sections/heroSection/HeroSeimport StatsSection from
              './sections/statsSection/StatsSection'; ction'; icas de sabor.
              Cada lote é cuidadosamente monitorado por nossos mestres
              cervejeiros para garantir a qualidade que você merece.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Beer className="w-8 h-8 text-amber-600" />
                </div>
                <div className="font-medium text-gray-900">100% Artesanal</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div className="font-medium text-gray-900">Premiadas</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <div className="font-medium text-gray-900">Tradição</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
