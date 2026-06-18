export interface Produto {
  produto_id: number;
  tipo: {
    tipo_produto_id: number;
    texto: string;
  }
  nome: string;
  valor_unitario: number;
  ibu: number | null;
  abv: number | null;
}