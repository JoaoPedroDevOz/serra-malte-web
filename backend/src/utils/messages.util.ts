import { Message } from "../models/interfaces/message.interface.ts";
import { APP_ERRORS, GENERIC_ERRORS } from "./errors/index.error.ts";

export function treatDatabaseMessages(text: string): Message {
  let message = {} as Message;

  switch (true) {
    case text.includes("No record was found for a delete."):
      return (message = GENERIC_ERRORS.NOT_FOUND);
    default:
      return GENERIC_ERRORS.INTERNAL;
  }
}
