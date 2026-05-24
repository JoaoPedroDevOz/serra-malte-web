import { Fornecedor } from "../../../models/entities/fornecedor.entity.ts";
import { Supplier } from "../../../models/interfaces/supplier.interface.ts";
declare function insertSupplier(req: Fornecedor): Promise<{
    fornecedor_id: number;
    email: string | null;
    contato: string | null;
    telefone: string | null;
    nome: string | null;
    registro_nacional: string | null;
} | undefined>;
declare function selectSuppliers(req: Supplier): Promise<void>;
export { insertSupplier, selectSuppliers };
//# sourceMappingURL=supplier.sql.d.ts.map