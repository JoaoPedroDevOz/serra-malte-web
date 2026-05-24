export interface Supplier {
    email: string;
    contact: string;
    phone: string;
    name: string;
    nationalRegister: string;
}
export interface SupplierProductIngredient {
    supplierId: number;
    productId?: number;
    ingredientId?: number;
    supplyTimestamp: Date;
    supplyValue: number;
    quantity: number;
}
//# sourceMappingURL=supplier.interface.d.ts.map