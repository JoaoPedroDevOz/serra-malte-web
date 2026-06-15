import { useEffect, useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Product } from "../../../shared/models/interfaces/product.interface";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "./../../../components/Button";
import {
  listProducts,
  registerProduct,
  editProduct,
  removeProduct,
} from "../../../services/product.service";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const formDataNState: Product = {
    productId: 0,
    name: "",
    type: {
      id: 0,
      text: "",
    },
    unitValue: 0,
    abv: 0,
    ibu: 0,
  };
  const [formData, setFormData] = useState(formDataNState);

  useEffect(() => {
    async function fetchProducts() {
      const data = await listProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleEdit = (s: Product) => {
    setEditingProduct(s);
    setFormData({
      productId: s.productId,
      type: {
        id: s.type.id,
        text: s.type.text,
      },
      name: s.name,
      unitValue: s.unitValue,
      ibu: s.ibu || 0,
      abv: s.abv || 0,
    });
    setShowForm(true);
  };

  const handleRegister = async (product: Product) => {
    try {
      return await registerProduct(product);
    } catch (error) {
      throw error;
    }
  };

  const handleUpdate = async (product: Product) => {
    try {
      return await editProduct(product);
    } catch (error) {
      throw error;
    }
  };

  const handleRemove = async (product: Product) => {
    try {
      if (window.confirm("Deseja realmente excluir este produto?")) {
        await removeProduct(product);

        setProducts(products.filter((s) => s.productId !== product.productId));
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingProduct) {
        const updatedProduct = await handleUpdate(formData);
        if (updatedProduct) {
          setProducts(
            products.map((s) =>
              s.productId === editingProduct.productId ? updatedProduct : s,
            ),
          );
        }
      } else {
        await handleRegister(formData);

        const newId = Math.max(...products.map((s) => s.productId), 0) + 1;
        setProducts([...products, { ...formData, productId: newId }]);
      }

      setShowForm(false);
      setEditingProduct(null);
    } catch (error: any) {
      alert(`${error.message}`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Cervejas Cadastradas
        </h2>
        <Button
          onClick={() => {
            setEditingProduct(null);
            setFormData(formDataNState);
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
            {editingProduct ? "Editar Cerveja" : "Nova Cerveja"}
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
                value={formData.type.id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    type: { id: parseInt(e.target.value), text: "" },
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
        {products.map((product: Product) => (
          <div
            key={product.productId}
            className="bg-white rounded-lg shadow-sm flex justify-between items-center p-8"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>Tipo ID: {product.type.id}</span>
                <span>ABV: {product.abv}%</span>
                <span>IBU: {product.ibu}</span>
                <span className="font-medium text-amber-600">
                  R$ {product.unitValue.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleEdit(product)} variant="editIcon">
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleRemove(product)}
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
