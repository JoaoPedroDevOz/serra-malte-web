import { HTTP_STATUS } from "../../consts.util.ts";

export const PRODUCT_TYPES_ERRORS = {
  MULTIPLE: {
    ALREADY_EXISTS_TYPE: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "Já existe tipo de produto cadastrado com esse nome.",
    },
  },
  INSERT: {},
  SELECT: {
    NOT_FOUND: {
      status: HTTP_STATUS.NOT_FOUND,
      message: "Não existe tipo de produto com os dados informados.",
    },
  },
  UPDATE: {
    CANT_CHANGE_ID: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "Não é permitido a alteração do ID do registro.",
    },
  },
  DELETE: {
    NO_ID: {
      status: HTTP_STATUS.BAD_REQUEST,
      message:
        "O número identificador do tipo do produto é obrigatório para sua exclusão.",
    },
  },
};
