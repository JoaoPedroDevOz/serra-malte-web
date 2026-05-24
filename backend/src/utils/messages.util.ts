import { Message } from "../models/interfaces/message.interface.ts";
import { APP_ERRORS, GENERIC_ERRORS } from "./errors.util.ts";

export function treatDatabaseMessages(text: string): Message {
  let message = {} as Message;

  switch (true) {
    case text.includes("No record was found for a delete."):
      return (message = APP_ERRORS.SUPPLIER.DELETE.NOT_FOUND);
    default:
      return GENERIC_ERRORS.INTERNAL;
  }
}

export function treatAppMessages(text: string): Message {
  let message = {} as Message;

  switch (true) {
    case text.includes("No record was found for a delete."):
      return (message = APP_ERRORS.SUPPLIER.DELETE.NOT_FOUND);
    default:
      return GENERIC_ERRORS.INTERNAL;
  }
}
