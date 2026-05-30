import { HTTP_STATUS } from "../consts.util.ts";
import { PRODUCT_ERRORS } from "./product.error.ts";
import { SUPPLIER_ERRORS } from "./supplier.error.ts";
import { PRODUCT_TYPES_ERRORS } from "./types/product_types.error.ts";

export const GENERIC_ERRORS = {
  INTERNAL: {
    status: HTTP_STATUS.INTERNAL,
    message: "Aconteceu um erro interno.",
  },
  NOT_FOUND: {
    status: HTTP_STATUS.NOT_FOUND,
    message: "Não foi encontrado registro para os parâmetros informados.",
  },
};

export const APP_ERRORS = {
  SUPPLIER: SUPPLIER_ERRORS,
  PRODUCT: PRODUCT_ERRORS,
  PRODUCT_TYPES: PRODUCT_TYPES_ERRORS,
};
