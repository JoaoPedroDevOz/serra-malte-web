import { Cliente } from "../../../models/entities/cliente.entity.ts";
export declare function insertClient(req: Cliente): Promise<{
    email: string | null;
    telefone: string | null;
    nome: string;
    registro_nacional: string;
    sobrenome: string | null;
    nome_fantasia: string | null;
    cliente_id: number;
    tipo_pessoa_id: number;
}>;
//# sourceMappingURL=client.sql.d.ts.map