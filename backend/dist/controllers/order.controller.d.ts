import { IRegisterPedidoInput, IFiltrarPedidosInput } from "../models/entities/pedido.entity.ts";
export declare function validateRequiredFields<T extends object>(obj: T, requiredFields?: (keyof T)[]): void;
export declare function validateInsertPedido(pedido: IRegisterPedidoInput): void;
export declare function handlerInsertOrder(req: IRegisterPedidoInput): Promise<any>;
export declare function handlerSelectOrders(req: IFiltrarPedidosInput): Promise<any>;
//# sourceMappingURL=order.controller.d.ts.map