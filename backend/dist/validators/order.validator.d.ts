import { IRegisterPedidoInput, IFiltrarPedidosInput } from "../models/entities/pedido.entity.ts";
/**
 * Sua função utilitária de validação de campos obrigatórios
 */
export declare function validateRequiredFields<T extends object>(obj: T, requiredFields?: (keyof T)[]): void;
/**
 * Validador específico para a criação de pedidos usando o seu padrão
 */
export declare function validateInsertPedido(pedido: IRegisterPedidoInput): void;
export declare function handlerInsertOrder(req: IRegisterPedidoInput): Promise<any>;
export declare function handlerSelectOrders(req: IFiltrarPedidosInput): Promise<any>;
//# sourceMappingURL=order.validator.d.ts.map