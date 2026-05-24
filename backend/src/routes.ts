import { Router } from "express";
import { SupplierApi } from "./apis/index.api.ts";

const route = Router();

/**
 * Fornecedor
 */
route.post("/api/fornecedor", SupplierApi.registerSupplier);
route.get("/api/fornecedor", SupplierApi.searchSuppliers);
route.patch("/api/fornecedor", SupplierApi.reviseSupplier);
route.delete("/api/fornecedor", SupplierApi.removeSupplier);

export { route };
