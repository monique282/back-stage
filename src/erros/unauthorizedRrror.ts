import { ApplicationError } from '@/protocols';

export function unauthorizedError(): ApplicationError {
    return {
        name: 'UnauthorizedError',
        message: 'Você deve ter autorização para continuar',
    };
}

export function unauthorizedType(message: string): ApplicationError {
    return {
        name: 'UnauthorizedError',
        message: message,
    };
}