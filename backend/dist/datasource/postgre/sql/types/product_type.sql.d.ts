import { Produto } from "../../../../models/entities/produto.entity.ts";
declare function insertProductType(req: Partial<Produto>): Promise<any>;
declare function selectProductTypes(req: Partial<Produto>): Promise<any[]>;
declare function updateProductType(toUpdateReq: Partial<Produto>, req: Partial<Produto>): Promise<any>;
declare function deleteProductType(req: Partial<Produto>): Promise<any>;
export { insertProductType, selectProductTypes, updateProductType, deleteProductType, };
//# sourceMappingURL=product_type.sql.d.ts.map