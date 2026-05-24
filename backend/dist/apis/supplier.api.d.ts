import { Supplier } from "../models/interfaces/supplier.interface.ts";
declare function handlerInsertSupplier(req: Supplier): Promise<{
    fornecedor_id: number;
    email: string | null;
    contato: string | null;
    telefone: string | null;
    nome: string | null;
    registro_nacional: string | null;
} | undefined>;
export { handlerInsertSupplier };
//# sourceMappingURL=supplier.api.d.ts.map