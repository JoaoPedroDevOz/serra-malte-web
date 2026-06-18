import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import {
  Ingredient,
  IngredientSupply,
} from "../../../shared/models/interfaces/ingredient.interface";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {
  registerIngredient,
  editIngredient,
  removeIngredient,
  listIngredients,
  IngredientTypeOption,
  listIngredientTypes,
  registerIngredientSupply,
} from "../../../services/ingredient.service";
import { listSuppliers } from "../../../services/supplier.service";
import Select, { SelectOption } from "../../../components/Select";
import { MessageListProps } from "../../../components/Message";

export default function IngredientList({ onShowMessage }: MessageListProps) {
  // Constantes do formulário e controle de fluxo
  const [ingredients, setIngredients] = useState<Ingredient[]>([]); // lista de ingredientes
  const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(
    null,
  ); // booleano para abrir formulário de edição
  const [ingredientTypes, setIngredientTypes] = useState<
    IngredientTypeOption[]
  >([]); // carrega lista de tipos de ingredientes
  const [suppliers, setSuppliers] = useState<SelectOption[]>([]); // lista de fornecedores
  const [showForm, setShowForm] = useState(false); // mostrar formulário

  const formDataNState: IngredientSupply = {
    ingredient: {
      ingredientId: 0,
      name: "",
      type: { id: 0, text: "" },
      unitValue: 0,
      quantity: 0,
    },
    supplier: {
      supplierId: 0,
    },
    quantity: 0,
    supplyValue: 0,
    supplyDate: new Date(),
  };

  const [formData, setFormData] = useState<IngredientSupply>(formDataNState);

  useEffect(() => {
    // Carrega a lista de ingredientes na página e a lista de
    // fornecedores e tipos de ingredenties nos seletores.
    async function loadInitialData() {
      try {
        const [ingredientsData, typesData, suppliersData] = await Promise.all([
          listIngredients(),
          listIngredientTypes(),
          listSuppliers(),
        ]);
        // De forma paralela, chama as apis para capturar do banco de dados.

        setIngredients(ingredientsData);
        setIngredientTypes(typesData);

        const mappedSuppliers: SelectOption[] = suppliersData.map((sup) => ({
          value: sup.supplierId,
          label: sup.name,
        }));
        setSuppliers(mappedSuppliers); // Passa no seletor os fornecedores
      } catch (error: any) {
        onShowMessage(`Erro ao inicializar dados: ${error.message}`, "error");
      }
    }
    loadInitialData();
  }, []);

  const handleEdit = (ing: Ingredient) => {
    setEditingIngredient(ing);
    setFormData({
      ingredient: {
        ingredientId: ing.ingredientId,
        name: ing.name,
        type: { id: ing.type.id, text: ing.type.text },
        unitValue: ing.unitValue,
        quantity: ing.quantity,
      },
      supplier: { supplierId: 0 },
      quantity: 0,
      supplyValue: 0,
      supplyDate: new Date(),
    });
    setShowForm(true);
  };

  const handleRemove = async (ingredient: Ingredient) => {
    try {
      if (window.confirm("Deseja realmente excluir este ingrediente?")) {
        await removeIngredient(ingredient); // Remoção no banco de dados
        setIngredients(
          ingredients.filter((s) => s.ingredientId !== ingredient.ingredientId),
        ); // Remoção do valor na lista

        onShowMessage("Ingrediente removido com sucesso!", "success");
      }
    } catch (error: any) {
      onShowMessage(`Erro ao remover ingrediente: ${error.message}`, "error");
    }
  };

  const handleSelectTypeChange = (value: string) => {
    const selectedOption = ingredientTypes.find((opt) => opt.value === value);
    // Seleção do tipo de ingrediente na lista
    if (selectedOption) {
      setFormData({
        ...formData,
        ingredient: {
          ...formData.ingredient,
          type: { id: selectedOption.id, text: selectedOption.value },
        },
      });
    }
  };

  const handleSelectSupplierChange = (selectedValue: string) => {
    const supplierId = selectedValue ? Number(selectedValue) : 0;
    setFormData({
      ...formData,
      supplier: { supplierId },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let savedIngredient: Ingredient;

      if (editingIngredient) {
        savedIngredient = await editIngredient(formData.ingredient);
      } else {
        savedIngredient = await registerIngredient(formData.ingredient);
      }

      // Após o ingrediente ser atualizado ou registrado
      // Será feito o relacionamento com o fornecedor criado
      // Caso o usuário opte por isso
      if (formData.supplier.supplierId && formData.supplier.supplierId > 0) {
        const supplyPayload: IngredientSupply = {
          ...formData,
          ingredient: savedIngredient,
        };
        await registerIngredientSupply(supplyPayload);

        savedIngredient.quantity += formData.quantity;
      }

      if (editingIngredient) {
        setIngredients(
          ingredients.map((s) =>
            s.ingredientId === editingIngredient.ingredientId
              ? savedIngredient
              : s,
          ),
        );
      } else {
        setIngredients([...ingredients, savedIngredient]);
      }

      onShowMessage(
        editingIngredient
          ? "Ingrediente atualizado com sucesso!"
          : "Ingrediente cadastrado com sucesso!",
        "success",
      );

      setShowForm(false);
      setEditingIngredient(null);
    } catch (error: any) {
      onShowMessage(error.message, "error");
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
          className="bg-white p-6 rounded-2xl shadow-sm mb-6  border-gray-100"
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
                placeholder="Insira o nome"
                value={formData.ingredient.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ingredient: {
                      ...formData.ingredient,
                      name: e.target.value,
                    },
                  })
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
                value={formData.ingredient.type.text}
                onChange={(e) => handleSelectTypeChange(e.target.value)}
                options={ingredientTypes}
              />
            </div>

            <div>
              <Input
                label="Quantidade Atual em Estoque"
                type="number"
                required
                placeholder="Quantidade física atual"
                value={formData.ingredient.quantity || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ingredient: {
                      ...formData.ingredient,
                      quantity: parseInt(e.target.value) || 0,
                    },
                  })
                }
              />
            </div>

            <div>
              <Input
                label="Preço unitário (R$)"
                type="number"
                required
                placeholder="Valor unitário"
                value={formData.ingredient.unitValue || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ingredient: {
                      ...formData.ingredient,
                      unitValue: parseFloat(e.target.value) || 0,
                    },
                  })
                }
              />
            </div>

            <div className="col-span-2 pt-5 mt-2 mb-2">
              <Select
                label="Vincular a um Fornecedor (Opcional)"
                placeholder="Selecione um fornecedor se deseja registrar uma entrada"
                value={formData.supplier.supplierId || ""}
                onChange={(e) => handleSelectSupplierChange(e.target.value)}
                options={suppliers}
                onClear={() => {
                  setFormData({
                    ...formData,
                    supplier: { supplierId: 0 },
                    quantity: 0,
                    supplyValue: 0,
                  });
                }}
              />
            </div>

            {/* Campos dinâmicos */}
            {!!formData.supplier.supplierId && (
              <>
                <div>
                  <Input
                    label="Quantidade Fornecida"
                    type="number"
                    required
                    placeholder="Quantidade da compra"
                    value={formData.quantity || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        quantity: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div>
                  <Input
                    label="Valor Total do Fornecimento (R$)"
                    type="number"
                    step="0.01"
                    required
                    placeholder="Valor total pago"
                    value={formData.supplyValue || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        supplyValue: parseFloat(e.target.value) || 0,
                      })
                    }
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex gap-3 mt-4 pt-2">
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
          ingredients.map((ing) => (
            <div
              key={ing.ingredientId}
              className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{ing.name}</h3>
                <div className="flex gap-6 mt-2 text-sm text-gray-600">
                  <span>
                    <strong>Tipo:</strong> {ing.type?.text}
                  </span>
                  <span>
                    <strong>Preço Unitário:</strong> R${" "}
                    {ing.unitValue.toFixed(2)}
                  </span>
                  <span>
                    <strong>Estoque:</strong> {ing.quantity} un
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleEdit(ing)} variant="editIcon">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button onClick={() => handleRemove(ing)} variant="removeIcon">
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
