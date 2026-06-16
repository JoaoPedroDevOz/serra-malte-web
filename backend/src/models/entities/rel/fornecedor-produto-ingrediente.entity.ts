export interface FornecedorProdutoIngrediente {
  fornecedor_id: number;
  produto_id?: number;
  ingrediente_id?: number;
  data_hora_fornecimento: Date;
  quantidade: number;
  valor_fornecimento: number;
}
