import { Produto } from "../../models/entities/produto.entity.ts";
declare function handlerInsertProductType(req: Partial<Produto>): Promise<Partial<Produto>>;
declare function handlerSelectProductsTypes(req: Partial<Produto>): Promise<Partial<Produto[]>>;
declare function handlerUpdateProductType(req: Partial<Produto>, novoTipoProduto: Partial<Produto>): Promise<Partial<Produto>>;
declare function handlerDeleteProductType(req: Partial<Produto>): Promise<Partial<Produto>>;
export { handlerInsertProductType, handlerSelectProductsTypes, handlerUpdateProductType, handlerDeleteProductType, };
//# sourceMappingURL=product_types.controller.d.ts.map