import { useEffect, useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { listProducts } from "../../../services/product.service";
import { Product } from "../../../shared/models/interfaces/product.interface";

export default function BeersSection() {
  const { addItem } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await listProducts();
        setProducts(productsData);
      } catch (err: any) {
        setError(
          err?.message || "Não foi possível carregar os produtos no carrossel.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const beers = products;

  const mockedProductImages: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1587582816472-81e94768469a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y3JhZnQlMjBiZWVyfGVufDF8fHx8MTc3ODcxMDQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    2: "https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjcmFmdCUyMGJlZXJ8ZW58MXx8fHwxNzc4NzEwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    3: "https://images.unsplash.com/photo-1587582816472-81e94768469a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y3JhZnQlMjBiZWVyfGVufDF8fHx8MTc3ODcxMDQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  };

  const handleOrder = (beer: Product) => {
    const priceString = `R$ ${beer.unitValue.toFixed(2).replace(".", ",")}`;
    addItem(beer.productId, beer.name, priceString);
  };

  return (
    <section
      id="beers"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-2xl font-semibold">Nossas Cervejas</h2>
          <p className="text-xl text-gray-600">
            Explore nossa seleção de cervejas artesanais premiadas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {loading ? (
            <div className="md:col-span-3 text-center text-gray-500">
              Carregando produtos...
            </div>
          ) : error ? (
            <div className="md:col-span-3 text-center text-red-600">
              {error}
            </div>
          ) : beers.length === 0 ? (
            <div className="md:col-span-3 text-center text-gray-500">
              Nenhum produto disponível no momento.
            </div>
          ) : (
            beers.map((beer) => (
              <div
                key={beer.productId}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="w-full h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={
                      mockedProductImages[beer.productId] ||
                      "https://images.unsplash.com/photo-1587582816472-81e94768469a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y3JhZnQlMjBiZWVyfGVufDF8fHx8MTc3ODcxMDQwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                    }
                    alt={beer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3>{beer.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {beer.type.text || "Cerveja artesanal"}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-500">ABV</div>
                      <div className="font-medium">{beer.abv ?? "-"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">IBU</div>
                      <div className="font-medium">{beer.ibu ?? "-"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Estilo</div>
                      <div className="font-medium">{beer.type.text || "-"}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-amber-600 mb-4">
                    R$ {beer.unitValue.toFixed(2).replace(".", ",")}
                  </div>
                  <button
                    onClick={() => handleOrder(beer)}
                    className="w-full bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}