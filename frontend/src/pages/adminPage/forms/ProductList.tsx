import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Product } from "../../../shared/models/interfaces/product.interface";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "./../../../components/Button";

interface BeerListProps {
  beers: Product[];
  setBeers: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ProductList({ beers, setBeers }: BeerListProps) {
  const [editingBeer, setEditingBeer] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    typeProductId: 1,
    unitValue: 0,
    abv: 0,
    ibu: 0,
  });

  const handleEdit = (beer: Product) => {
    setEditingBeer(beer);
    setFormData({
      name: beer.name,
      typeProductId: beer.typeProductId,
      unitValue: beer.unitValue,
      abv: beer.abv || 0,
      ibu: beer.ibu || 0,
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Deseja realmente excluir esta cerveja?")) {
      setBeers(beers.filter((b) => b.productId !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBeer) {
      setBeers(
        beers.map((b) =>
          b.productId === editingBeer.productId ? { ...b, ...formData } : b,
        ),
      );
    } else {
      const newId = Math.max(...beers.map((b) => b.productId), 0) + 1;
      setBeers([...beers, { ...formData, productId: newId }]);
    }
    setShowForm(false);
    setEditingBeer(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Cervejas Cadastradas
        </h2>
        <Button
          onClick={() => {
            setEditingBeer(null);
            setFormData({
              name: "",
              typeProductId: 1,
              unitValue: 0,
              abv: 0,
              ibu: 0,
            });
            setShowForm(true);
          }}
        >
          <Plus className="w-4 h-4" /> Nova Cerveja
        </Button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-sm mb-4"
        >
          <h3 className="text-lg font-medium mb-4">
            {editingBeer ? "Editar Cerveja" : "Nova Cerveja"}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                label="Nome"
                type="text"
                required
                placeholder="Insira o nome do produto"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <Select
                label="Tipo"
                placeholder="Selecione"
                required
                value={formData.typeProductId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    typeProductId: parseInt(e.target.value),
                  })
                }
                options={[
                  {
                    label: "Malte",
                    value: "Malte",
                  },
                ]}
              ></Select>
            </div>
            <div>
              <Input
                label="Álcool por Volume (ABV)"
                type="number"
                step="0.1"
                required
                placeholder="Insira o ABV (%)"
                value={formData.abv}
                onChange={(e) =>
                  setFormData({ ...formData, abv: parseFloat(e.target.value) })
                }
              />
            </div>
            <div>
              <Input
                label="Unidade Internacional de Amargor (IBU)"
                type="number"
                required
                placeholder="Insira o IBU"
                value={formData.ibu}
                onChange={(e) =>
                  setFormData({ ...formData, ibu: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="col-span-2">
              <Input
                label="Preço Unitário (R$)"
                type="number"
                step="0.01"
                required
                value={formData.unitValue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    unitValue: parseFloat(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button type="submit" variant="primary">
              Salvar
            </Button>
            <Button onClick={() => setShowForm(false)} variant="secondary">
              Cancelar
            </Button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {beers.map((beer) => (
          <div
            key={beer.productId}
            className="bg-white rounded-lg shadow-sm flex justify-between items-center p-8"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{beer.name}</h3>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>Tipo ID: {beer.typeProductId}</span>
                <span>ABV: {beer.abv}%</span>
                <span>IBU: {beer.ibu}</span>
                <span className="font-medium text-amber-600">
                  R$ {beer.unitValue.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleEdit(beer)} variant="editIcon">
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleDelete(beer.productId)}
                variant="removeIcon"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
