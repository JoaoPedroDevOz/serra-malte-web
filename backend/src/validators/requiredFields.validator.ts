export function validateRequiredFields<T extends object>(
  obj: T,
  requiredFields?: (keyof T)[],
): void {
  const fields = requiredFields ?? (Object.keys(obj) as (keyof T)[]);

  for (const field of fields) {
    const value = obj[field];

    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "")
    ) {
      throw new Error(`O campo ${String(field)} é obrigatório.`);
    }
  }
}
