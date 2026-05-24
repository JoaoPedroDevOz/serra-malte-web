export interface Fornecedor {
    email: string;
    contato: string;
    telefone: string;
    nome: string;
    registro_nacional: string;
}
export interface FornecedorProdutoIngrediente {
    fornecedor_id: number;
    produto_id?: number;
    ingrediente_id?: number;
    data_hora_fornecimento: Date;
    quantidade: number;
    valor_fornecimento: number;
}
//# sourceMappingURL=fornecedor.entity.d.ts.map