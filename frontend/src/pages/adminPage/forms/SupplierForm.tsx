import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Supplier } from "../../../shared/models/interfaces/supplier.interface";
import Input from "../../../components/Input";

export default function SupplierList({
  suppliers,
  setSuppliers,
}: {
  suppliers: Supplier[];
  setSuppliers: any;
}) {
  const [showForm, setShowForm] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
  });

  const handleEdit = (s: Supplier) => {
    setEditingSupplier(s);
    setFormData({
      name: s.name,
      contact: s.contact,
      email: s.email,
      phone: s.phone,
    });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSupplier) {
      setSuppliers(
        suppliers.map((s) =>
          s.supplierId === editingSupplier.supplierId
            ? { ...s, ...formData }
            : s,
        ),
      );
    } else {
      const newId = Math.max(...suppliers.map((s) => s.supplierId), 0) + 1;
      setSuppliers([...suppliers, { ...formData, id: newId }]);
    }
    setShowForm(false);
    setEditingSupplier(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Fornecedores Cadastrados
        </h2>
        <button
          onClick={() => {
            setEditingSupplier(null);
            setFormData({ name: "", contact: "", email: "", phone: "" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700"
        >
          <Plus className="w-4 h-4" /> Novo Fornecedor
        </button>
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
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-amber-600 text-white px-4 py-2 rounded-lg"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancelar
            </button>
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
              <button
                onClick={() => handleEdit(supplier)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setSuppliers(
                    suppliers.filter(
                      (s) => s.supplierId !== supplier.supplierId,
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
