import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Ingredient } from "../../../shared/models/interfaces/ingredient.interface";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";

interface IngredientListProps {
  ingredients: Ingredient[];
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

export default function IngredientList({
  ingredients,
  setIngredients,
}: IngredientListProps) {
  const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(
    null,
  );
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    typeText: "",
    unitValue: 0,
  });

  const handleEdit = (ing: Ingredient) => {
    setEditingIngredient(ing);
    setFormData({
      name: ing.name,
      typeText: ing.type.text,
      unitValue: ing.unitValue,
    });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIngredient) {
      setIngredients(
        ingredients.map((i) =>
          i.ingredientId === editingIngredient.ingredientId
            ? {
                ...i,
                name: formData.name,
                type: { ...i.type, text: formData.typeText },
                unitValue: formData.unitValue,
              }
            : i,
        ),
      );
    } else {
      const newId = Math.max(...ingredients.map((i) => i.ingredientId), 0) + 1;
      setIngredients([
        ...ingredients,
        {
          ingredientId: newId,
          name: formData.name,
          type: { id: newId, text: formData.typeText },
          unitValue: formData.unitValue,
        },
      ]);
    }
    setShowForm(false);
    setEditingIngredient(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Ingredientes em Estoque
        </h2>
        <button
          onClick={() => {
            setEditingIngredient(null);
            setFormData({ name: "", typeText: "", unitValue: 0 });
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700"
        >
          <Plus className="w-4 h-4" /> Novo Ingrediente
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-sm mb-4"
        >
          <h3 className="text-lg font-medium mb-4">
            {editingIngredient ? "Editar Ingrediente" : "Novo Ingrediente"}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                label="Nome"
                type="text"
                required
                placeholder="Insira o nome do ingrediente"
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
                value={formData.typeText}
                onChange={(e) =>
                  setFormData({ ...formData, typeText: e.target.value })
                }
                options={[
                  {
                    label: "Malte",
                    value: "Malte",
                  },
                ]}
              ></Select>
            </div>
            <div className="col-span-2">
              <Input
                label="Quantidade em Estoque"
                type="number"
                required
                placeholder="Insira a quantidade"
                value={formData.unitValue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    unitValue: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              type="submit"
              variant="primary"
            >
              Salvar
            </Button>
            <Button onClick={() => setShowForm(false)} variant="secondary">
              Cancelar
            </Button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.ingredientId}
            className="bg-white p-8 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{ingredient.name}</h3>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>Tipo: {ingredient.type.text}</span>
                <span>Quantidade: {ingredient.unitValue} unidades</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(ingredient)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setIngredients(
                    ingredients.filter(
                      (i) => i.ingredientId !== ingredient.ingredientId,
                    ),
                  )
                }
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
