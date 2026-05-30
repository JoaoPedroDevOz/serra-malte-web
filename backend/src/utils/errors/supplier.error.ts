import { HTTP_STATUS } from "../consts.util.ts";

export const SUPPLIER_ERRORS = {
  INSERT: {
    NO_NAME: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "O nome do fornecedor é obrigatório.",
    },
    NO_RN: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "O registro nacional do fornecedor é obrigatório.",
    },
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
    NO_ID: {
      status: HTTP_STATUS.BAD_REQUEST,
      message:
        "O número identificador do fornecedor é obrigatório para sua exclusão.",
    },
  },
};
