import { Fornecedor } from "../../../models/entities/fornecedor.entity.ts";
declare function insertSupplier(req: Fornecedor): Promise<Fornecedor>;
declare function selectSuppliers(req: Partial<Fornecedor>): Promise<Fornecedor[]>;
declare function updateSupplier(toUpdateReq: Partial<Fornecedor>, req: Fornecedor): Promise<Fornecedor>;
declare function deleteSupplier(req: Partial<Fornecedor>): Promise<Fornecedor>;
export { insertSupplier, selectSuppliers, updateSupplier, deleteSupplier };
//# sourceMappingURL=supplier.sql.d.ts.map