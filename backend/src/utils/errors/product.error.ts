import { HTTP_STATUS } from "../consts.util.ts";

export const PRODUCT_ERRORS = {
  MULTIPLE: {
    ALREADY_EXISTS_NAME: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "Já existe produto com esse nome.",
    },
  },
  INSERT: {
    NO_NAME: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "O nome do produto é obrigatório.",
    },
    NO_TYPE: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "O tipo do produto é obrigatório.",
    },
    NO_VALUE: {
      status: HTTP_STATUS.BAD_REQUEST,
      message: "O valor do produto é obrigatório.",
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
        "O número identificador do produto é obrigatório para sua exclusão.",
    },
  },
};
