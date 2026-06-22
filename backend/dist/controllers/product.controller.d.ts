import { Produto } from "../models/entities/produto.entity.ts";
declare function handlerInsertProduct(req: Produto): Promise<Produto>;
declare function handlerSelectProducts(req: Partial<Produto>): Promise<Produto[]>;
declare function handlerUpdateProduct(req: Partial<Produto>, novoProduto: Produto): Promise<Produto>;
declare function handlerDeleteProduct(req: Partial<Produto>): Promise<Produto>;
export { handlerInsertProduct, handlerSelectProducts, handlerUpdateProduct, handlerDeleteProduct, };
//# sourceMappingURL=product.controller.d.ts.map