export interface Ingrediente {
  ingrediente_id?: number;
  nome: string;
  tipo: {
    tipo_ingrediente_id: number;
    texto: string;
  };
  valor_unitario: number;
  quantidade_estoque: number;
}
