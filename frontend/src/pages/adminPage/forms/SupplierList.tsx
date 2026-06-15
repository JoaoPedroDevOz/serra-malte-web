import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Supplier } from "../../../shared/models/interfaces/supplier.interface";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {
  editSupplier,
  listSuppliers,
  registerSupplier,
  removeSupplier,
} from "../../../services/supplier.service";

export default function SupplierList() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const [showForm, setShowForm] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);

  const formDataNState: Supplier = {
    supplierId: 0,
    name: "",
    contact: "",
    email: "",
    phone: "",
    nationalRegister: "",
  };
  const [formData, setFormData] = useState<Supplier>(formDataNState);

  useEffect(() => {
    async function fetchSuppliers() {
      const data = await listSuppliers();
      setSuppliers(data);
    }
    fetchSuppliers();
  }, []);

  const handleEdit = (s: Supplier) => {
    setEditingSupplier(s);
    setFormData({
      supplierId: s.supplierId,
      name: s.name,
      contact: s.contact,
      email: s.email,
      phone: s.phone,
      nationalRegister: s.nationalRegister,
    });
    setShowForm(true);
  };

  const handleRegister = async (supplier: Supplier) => {
    try {
      return await registerSupplier(supplier);
    } catch (error) {
      throw error;
    }
  };

  const handleUpdate = async (supplier: Supplier) => {
    try {
      return await editSupplier(supplier);
    } catch (error) {
      throw error;
    }
  };

  const handleRemove = async (supplier: Supplier) => {
    try {
      if (window.confirm("Deseja realmente excluir este fornecedor?")) {
        await removeSupplier(supplier);

        setSuppliers(
          suppliers.filter((s) => s.supplierId !== supplier.supplierId),
        );
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingSupplier) {
        const updatedSupplier = await handleUpdate(formData);
        if (updatedSupplier) {
          setSuppliers(
            suppliers.map((s) =>
              s.supplierId === editingSupplier.supplierId ? updatedSupplier : s,
            ),
          );
        }
      } else {
        await handleRegister(formData);

        const newId = Math.max(...suppliers.map((s) => s.supplierId), 0) + 1;
        setSuppliers([...suppliers, { ...formData, supplierId: newId }]);
      }

      setShowForm(false);
      setEditingSupplier(null);
    } catch (error: any) {
      alert(`${error.message}`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Fornecedores Cadastrados
        </h2>
        <Button
          onClick={() => {
            setEditingSupplier(null);
            setFormData(formDataNState);
            setShowForm(true);
          }}
        >
          <Plus className="w-4 h-4" /> Novo Fornecedor
        </Button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-sm mb-4"
        >
          <h3 className="text-lg font-medium mb-4">
            {editingSupplier ? "Editar Fornecedor" : "Novo Fornecedor"}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Nome da Empresa"
              type="text"
              placeholder="Insira o nome da empresa"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              label="Contato"
              type="text"
              placeholder="Insira o contato"
              required
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            <Input
              label="Email"
              type="email"
              placeholder="Insira o email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Input
              label="Telefone"
              type="tel"
              placeholder="Insira o telefone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <Input
              label="Registro nacional"
              type="text"
              placeholder="Insira o Registro nacional"
              required
              value={formData.nationalRegister}
              onChange={(e) =>
                setFormData({ ...formData, nationalRegister: e.target.value })
              }
            />
          </div>
          <div className="flex gap-2 mt-4">
            <Button type="submit">Salvar</Button>
            <Button onClick={() => setShowForm(false)} variant="secondary">
              Cancelar
            </Button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {suppliers.map((supplier) => (
          <div
            key={supplier.supplierId}
            className="bg-white p-8 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{supplier.name}</h3>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span>Contato: {supplier.contact}</span>
                <span>Email: {supplier.email}</span>
                <span>Telefone: {supplier.phone}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleEdit(supplier)} variant="editIcon">
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                onClick={async () => handleRemove(supplier)}
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
