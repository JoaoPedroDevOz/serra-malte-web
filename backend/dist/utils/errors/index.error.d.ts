export declare const GENERIC_ERRORS: {
    INTERNAL: {
        status: number;
        message: string;
    };
    NOT_FOUND: {
        status: number;
        message: string;
    };
};
export declare const APP_ERRORS: {
    SUPPLIER: {
        INSERT: {
            NO_NAME: {
                status: number;
                message: string;
            };
            NO_RN: {
                status: number;
                message: string;
            };
            ALREADY_EXISTS_RN: {
                status: number;
                message: string;
            };
        };
        UPDATE: {
            ALREADY_EXISTS_RN: {
                status: number;
                message: string;
            };
        };
        DELETE: {
            NO_ID: {
                status: number;
                message: string;
            };
        };
    };
    PRODUCT: {
        MULTIPLE: {
            ALREADY_EXISTS_NAME: {
                status: number;
                message: string;
            };
        };
        INSERT: {
            NO_NAME: {
                status: number;
                message: string;
            };
            NO_TYPE: {
                status: number;
                message: string;
            };
            NO_VALUE: {
                status: number;
                message: string;
            };
        };
        UPDATE: {
            CANT_CHANGE_ID: {
                status: number;
                message: string;
            };
        };
        DELETE: {
            NO_ID: {
                status: number;
                message: string;
            };
        };
    };
    PRODUCT_TYPES: {
        MULTIPLE: {
            ALREADY_EXISTS_TYPE: {
                status: number;
                message: string;
            };
        };
        INSERT: {};
        SELECT: {
            NOT_FOUND: {
                status: number;
                message: string;
            };
        };
        UPDATE: {
            CANT_CHANGE_ID: {
                status: number;
                message: string;
            };
        };
        DELETE: {
            NO_ID: {
                status: number;
                message: string;
            };
        };
    };
    INGREDIENT: {
        MULTIPLE: {
            ALREADY_EXISTS_NAME: {
                status: number;
                message: string;
            };
        };
        INSERT: {
            NO_NAME: {
                status: number;
                message: string;
            };
            NO_TYPE: {
                status: number;
                message: string;
            };
            NO_VALUE: {
                status: number;
                message: string;
            };
        };
        UPDATE: {
            CANT_CHANGE_ID: {
                status: number;
                message: string;
            };
        };
        DELETE: {
            NO_ID: {
                status: number;
                message: string;
            };
        };
    };
    PEDIDO: {};
};
//# sourceMappingURL=index.error.d.ts.map