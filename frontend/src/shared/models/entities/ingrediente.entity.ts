interface Ingrediente {
  ingrediente_id?: number;
  nome: string;
  valor_unitario: number;
  tipo: {
    tipo_ingrediente_id: number;
    texto: string;
  }
}
