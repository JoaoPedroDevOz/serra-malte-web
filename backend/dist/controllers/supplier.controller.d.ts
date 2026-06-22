import { Fornecedor } from "../models/entities/fornecedor.entity.ts";
declare function handlerInsertSupplier(req: Fornecedor): Promise<Fornecedor>;
declare function handlerSelectSuppliers(req: Partial<Fornecedor>): Promise<Fornecedor[]>;
declare function handlerUpdateSupplier(req: Partial<Fornecedor>, novoFornecedor: Fornecedor): Promise<Fornecedor>;
declare function handlerDeleteSupplier(req: Partial<Fornecedor>): Promise<Fornecedor>;
export { handlerInsertSupplier, handlerSelectSuppliers, handlerUpdateSupplier, handlerDeleteSupplier, };
//# sourceMappingURL=supplier.controller.d.ts.map