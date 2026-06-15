export interface Produto {
  produto_id: number;
  tipo_produto_id: number;
  tipo: string;
  nome: string;
  valor_unitario: number;
  ibu: number | null;
  abv: number | null;
}