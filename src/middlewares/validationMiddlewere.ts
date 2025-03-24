import { invalidDataError } from '@/erros/invalidDataError';
import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'joi'; 

export function validateBody<T>(schema: AnySchema<T>): ValidationMiddleware {
    return validate(schema, 'body');
}

export function validateParams<T>(schema: AnySchema<T>): ValidationMiddleware {
    return validate(schema, 'params');
}

function validate(schema: AnySchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });

        if (!error) {
            next();
        } else {
            let errorMessage = '';
            error.details.forEach((d) => (errorMessage += d.message + ' '));
            throw invalidDataError(errorMessage);
        }
    };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;