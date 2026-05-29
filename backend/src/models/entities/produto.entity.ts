export interface Produto {
  produto_id: number;
  tipo_produto_id: number;
  nome: string;
  valor_unitario: number;
  ibu?: number;
  abv?: number;
}
