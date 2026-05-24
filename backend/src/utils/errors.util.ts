import { HTTP_STATUS } from "./consts.util.ts";

export const GENERIC_ERRORS = {
  INTERNAL: {
    status: HTTP_STATUS.INTERNAL,
    message: "Aconteceu um erro interno.",
  },
};

export const APP_ERRORS = {
  SUPPLIER: {
    INSERT: {
      ALREADY_EXISTS_RN: {
        status: HTTP_STATUS.BAD_REQUEST,
        message: "Já existe fornecedor com esse registro nacional.",
      },
    },
    UPDATE: {
      ALREADY_EXISTS_RN: {
        status: HTTP_STATUS.BAD_REQUEST,
        message: "Já existe outro fornecedor com esse registro nacional.",
      },
    },
    DELETE: {
      NOT_FOUND: {
        status: HTTP_STATUS.NOT_FOUND,
        message: "Não foi encontrado registro com esse Id.",
      },
    },
  },
};
