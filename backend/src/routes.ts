import { Router } from "express";
import {
  IngredientApi,
  IngredientTypeApi,
  OrdersApi,
  ProductApi,
  ProductTypeApi,
  SupplierApi,
  SupplierItemApi,
  ClienteApi,
} from "./apis/index.api.ts";

const route = Router();

/**
 * Fornecedor
 */
route.post("/api/fornecedor", SupplierApi.registerSupplier);
route.get("/api/fornecedor", SupplierApi.listSuppliers);
route.patch("/api/fornecedor", SupplierApi.editSupplier);
route.delete("/api/fornecedor", SupplierApi.removeSupplier);

/**
 * Tipo Produto
 */
route.post("/api/produto/tipos", ProductTypeApi.registerProductType);
route.get("/api/produto/tipos", ProductTypeApi.listProductsTypes);
route.patch("/api/produto/tipos", ProductTypeApi.editProductType);
route.delete("/api/produto/tipos", ProductTypeApi.removeProductType);

/**
 * Produto
 */
route.post("/api/produto", ProductApi.registerProduct);
route.get("/api/produto", ProductApi.listProducts);
route.patch("/api/produto", ProductApi.editProduct);
route.delete("/api/produto", ProductApi.removeProduct);

/**
 * Fornecedor Produto
 */
// route.post("/api/fornecedor/produto", SupplierProductApi.registerSupplierProduct);
// route.get("/api/fornecedor/produto", SupplierProductApi.listSupplierProducts);
// route.patch("/api/fornecedor/produto", SupplierProductApi.editSupplierProduct);
// route.delete("/api/fornecedor/produto", SupplierProductApi.removeSupplierProduct);

/**
 * Ingrediente
 */
route.post("/api/ingrediente", IngredientApi.registerIngredient);
route.get("/api/ingrediente", IngredientApi.listIngredients);
route.patch("/api/ingrediente", IngredientApi.editIngredient);
route.delete("/api/ingrediente", IngredientApi.removeIngredient);

/**
 * Tipo Ingrediente
 */
route.get("/api/ingrediente/tipos", IngredientTypeApi.listIngredientsTypes);

/**
 * Fornecedor Ingrediente
 */
route.post(
  "/api/fornecedor/ingrediente",
  SupplierItemApi.registerIngredientSupply,
);

/**
 * Pedido
 */
route.post("/api/pedido", OrdersApi.registerOrder);
route.get("/api/pedido", OrdersApi.listOrders);

/**
 * Cliente
 */
route.post("/api/cliente", ClienteApi.registerClient);

export { route };
