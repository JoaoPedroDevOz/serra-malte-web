import { Cliente } from "../models/entities/cliente.entity.ts";
export declare function handlerInsertClient(req: Cliente): Promise<{
    email: string | null;
    telefone: string | null;
    nome: string;
    registro_nacional: string;
    sobrenome: string | null;
    nome_fantasia: string | null;
    cliente_id: number;
    tipo_pessoa_id: number;
}>;
//# sourceMappingURL=cliente.controller.d.ts.map