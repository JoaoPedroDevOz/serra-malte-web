import { Produto } from "../../../models/entities/produto.entity.ts";
declare function insertProduct(req: Produto): Promise<Produto>;
declare function selectProducts(req: Partial<Produto>): Promise<Produto[]>;
declare function updateProduct(toUpdateReq: Partial<Produto>, req: Produto): Promise<Produto>;
declare function deleteProduct(req: Partial<Produto>): Promise<Produto>;
export { insertProduct, selectProducts, updateProduct, deleteProduct };
//# sourceMappingURL=product.sql.d.ts.map