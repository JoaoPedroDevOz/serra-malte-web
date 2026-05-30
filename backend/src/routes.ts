import { Router } from "express";
import { ProductApi, ProductTypeApi, SupplierApi } from "./apis/index.api.ts";

const route = Router();

/**
 * Fornecedor
 */
route.post("/api/fornecedor", SupplierApi.registerSupplier);
route.get("/api/fornecedor", SupplierApi.searchSuppliers);
route.patch("/api/fornecedor", SupplierApi.reviseSupplier);
route.delete("/api/fornecedor", SupplierApi.removeSupplier);

/**
 * Tipo Produto
 */
route.post("/api/produto/tipos", ProductTypeApi.registerProductType);
route.get("/api/produto/tipos", ProductTypeApi.searchProductsTypes);
route.patch("/api/produto/tipos", ProductTypeApi.reviseProductType);
route.delete("/api/produto/tipos", ProductTypeApi.removeProductType);

/**
 * Produto
 */
route.post("/api/produto", ProductApi.registerProduct);
route.get("/api/produto", ProductApi.searchProducts);
route.patch("/api/produto", ProductApi.reviseProduct);
route.delete("/api/produto", ProductApi.removeProduct);

/**
 * Fornecedor Produto
 */
// route.post("/api/fornecedor/produto", SupplierProductApi.registerSupplierProduct);
// route.get("/api/fornecedor/produto", SupplierProductApi.searchSupplierProducts);
// route.patch("/api/fornecedor/produto", SupplierProductApi.reviseSupplierProduct);
// route.delete("/api/fornecedor/produto", SupplierProductApi.removeSupplierProduct);

export { route };
