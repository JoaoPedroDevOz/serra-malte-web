// BeersSection.jsx
import "./BeersSection.css";

export default function BeersSection() {
  const beers = [
    {
      id: 1,
      name: "IPA Tropical",
      description:
        "Uma explosão de sabores cítricos com notas de manga, maracujá e lúpulos americanos.",
      image:
        "https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      abv: "6.5%",
      ibu: "65",
      style: "IPA",
      price: "R$ 18,90",
    },
    {
      id: 2,
      name: "Pilsen Puro Malte",
      description:
        "Cerveja clara e refrescante, feita com maltes nobres e lúpulos europeus selecionados.",
      image:
        "https://images.unsplash.com/photo-1587582816472-81e94768469a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y3JhZnQlMjBiZWVyfGVufDF8fHx8MTc3ODcxMDQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      abv: "4.8%",
      ibu: "25",
      style: "Pilsen",
      price: "R$ 12,90",
    },
    {
      id: 3,
      name: "Stout Imperial",
      description:
        "Cerveja escura e encorpada com notas de café, chocolate e caramelo tostado.",
      image:
        "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      abv: "8.2%",
      ibu: "45",
      style: "Stout",
      price: "R$ 22,90",
    },
  ];

  const handleOrder = (beerName: string) => {
    console.log(`Encomendar ${beerName}`);
    // Aqui você pode adicionar a lógica de pedido
  };

  return (
    <section id="beers" className="beers-section">
      <div className="beers-container">
        <div className="beers-header">
          <h2 className="beers-title">Nossas Cervejas</h2>
          <p className="beers-subtitle">
            Explore nossa seleção de cervejas artesanais premiadas
          </p>
        </div>

        <div className="beers-grid">
          {beers.map((beer) => (
            <div key={beer.id} className="beer-card">
              <img src={beer.image} alt={beer.name} className="beer-image" />
              <div className="beer-content">
                <h3 className="beer-name">{beer.name}</h3>
                <p className="beer-description">{beer.description}</p>

                <div className="beer-stats">
                  <div className="beer-stat">
                    <div className="beer-stat-label">ABV</div>
                    <div className="beer-stat-value">{beer.abv}</div>
                  </div>
                  <div className="beer-stat">
                    <div className="beer-stat-label">IBU</div>
                    <div className="beer-stat-value">{beer.ibu}</div>
                  </div>
                  <div className="beer-stat">
                    <div className="beer-stat-label">Estilo</div>
                    <div className="beer-stat-value">{beer.style}</div>
                  </div>
                </div>

                <div className="beer-price">{beer.price}</div>
                <button
                  className="beer-button"
                  onClick={() => handleOrder(beer.name)}
                >
                  Encomendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
