import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Ingredient } from "../../../shared/models/interfaces/ingredient.interface";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import {
  registerIngredient,
  editIngredient,
  removeIngredient,
  listIngredients,
  IngredientTypeOption,
  listIngredientTypes,
} from "../../../services/ingredient.service";

export default function IngredientList() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(
    null,
  );
  const [ingredientTypes, setIngredientTypes] = useState<
    IngredientTypeOption[]
  >([]);
  const [showForm, setShowForm] = useState(false);

  const formDataNState: Ingredient = {
    ingredientId: 0,
    name: "",
    type: {
      id: 0,
      text: "",
    },
    unitValue: 0,
  };

  const [formData, setFormData] = useState<Ingredient>(formDataNState);

  useEffect(() => {
    async function loadInitialData() {
      try {
        const [ingredientsData, typesData] = await Promise.all([
          listIngredients(),
          listIngredientTypes(),
        ]);

        setIngredients(ingredientsData);
        setIngredientTypes(typesData);
      } catch (error: any) {
        alert(`Erro ao inicializar dados: ${error.message}`);
      }
    }
    loadInitialData();
  }, []);

  const handleEdit = (ing: Ingredient) => {
    setEditingIngredient(ing);
    setFormData({
      ingredientId: ing.ingredientId,
      name: ing.name,
      type: { id: ing.type.id, text: ing.type.text },
      unitValue: ing.unitValue,
    });
    setShowForm(true);
  };

  const handleRegister = async (ingredient: Ingredient) => {
    try {
      return await registerIngredient(ingredient);
    } catch (error) {
      throw error;
    }
  };

  const handleUpdate = async (ingredient: Ingredient) => {
    try {
      return await editIngredient(ingredient);
    } catch (error) {
      throw error;
    }
  };

  const handleRemove = async (ingredient: Ingredient) => {
    try {
      if (window.confirm("Deseja realmente excluir este ingrediente?")) {
        await removeIngredient(ingredient);
        setIngredients(
          ingredients.filter((s) => s.ingredientId !== ingredient.ingredientId),
        );
      }
    } catch (error: any) {
      alert(`Erro ao remover ingrediente: ${error.message}`);
    }
  };

  const handleSelectTypeChange = (value: string) => {
    const selectedOption = ingredientTypes.find((opt) => opt.value === value);
    if (selectedOption) {
      setFormData({
        ...formData,
        type: {
          id: selectedOption.id,
          text: selectedOption.value,
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingIngredient) {
        const updatedIngredient = await handleUpdate(formData);
        if (updatedIngredient) {
          setIngredients(
            ingredients.map((s) =>
              s.ingredientId === editingIngredient.ingredientId
                ? updatedIngredient
                : s,
            ),
          );
        }
      } else {
        const insertedIngredient = await handleRegister(formData);

        if (insertedIngredient) {
          setIngredients([...ingredients, insertedIngredient]);
        }
      }

      setShowForm(false);
      setEditingIngredient(null);
    } catch (error: any) {
      alert(`${error.message}`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Ingredientes em Estoque
        </h2>
        <Button
          onClick={() => {
            setEditingIngredient(null);
            setFormData(formDataNState);
            setShowForm(true);
          }}
        >
          <Plus className="w-4 h-4" /> Novo Ingrediente
        </Button>
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
                placeholder={
                  ingredientTypes.length === 0 ? "Carregando..." : "Selecione"
                }
                required
                value={formData.type.text}
                onChange={(e) => handleSelectTypeChange(e.target.value)}
                options={ingredientTypes}
              />
            </div>
            <div className="col-span-2">
              <Input
                label="Preço unitário"
                type="number"
                required
                placeholder="Insira o valor unitário"
                value={formData.unitValue || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    unitValue: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button type="submit" variant="primary">
              Salvar
            </Button>
            <Button
              onClick={() => setShowForm(false)}
              type="button"
              variant="secondary"
            >
              Cancelar
            </Button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {ingredients.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">
            Nenhum ingrediente cadastrado.
          </p>
        ) : (
          ingredients.map((ingredient) => (
            <div
              key={ingredient.ingredientId}
              className="bg-white p-8 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{ingredient.name}</h3>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>Tipo: {ingredient.type?.text}</span>
                  <span>Quantidade: {ingredient.unitValue} unidades</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(ingredient)}
                  variant="editIcon"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleRemove(ingredient)}
                  variant="removeIcon"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
