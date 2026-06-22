export interface IItemPedidoInput {
    produto_id: number;
    valor_unitario: number;
    quantidade: number;
}
export interface IRegisterPedidoInput {
    status_pedido_id: number;
    cliente_id: number;
    data_hora_pedido: Date | string;
    itens: IItemPedidoInput[];
}
export interface IFiltrarPedidosInput {
    pedido_id?: number | undefined;
    cliente_id?: number | undefined;
    status_pedido_id?: number | undefined;
}
//# sourceMappingURL=pedido.entity.d.ts.map