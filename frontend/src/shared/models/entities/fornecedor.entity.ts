export interface Fornecedor {
  fornecedor_id?: number;
  email: string;
  contato: string;
  telefone: string;
  nome: string;
  registro_nacional: string;
}

// export interface PesquisaFornecedor {
//   fornecedor_id?: number | null;
//   nome?: string | null;
//   registro_nacional?: string | null;
// }

export interface FornecedorProdutoIngrediente {
  fornecedor_id: number;
  produto_id?: number;
  ingrediente_id?: number;
  data_hora_fornecimento: Date;
  quantidade: number;
  valor_fornecimento: number;
}
