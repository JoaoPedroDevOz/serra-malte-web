import { Ingrediente } from "./ingrediente.entity";
import { Produto } from "./produto.entity";

export interface Fornecedor {
  fornecedor_id?: number;
  email: string;
  contato: string;
  telefone: string;
  nome: string;
  registro_nacional: string;
}

export interface RegistrarFornecedorProdutoIngrediente {
  fornecedor_id: number;
  produto_id?: number;
  ingrediente_id?: number;
  data_hora_fornecimento: Date;
  quantidade: number;
  valor_fornecimento: number;
}

export interface FornecedorProdutoIngrediente {
  fornecedor: Fornecedor;
  produto?: Produto;
  ingrediente?: Ingrediente;
  data_hora_fornecimento: Date;
  quantidade: number;
  valor_fornecimento: number;
}
