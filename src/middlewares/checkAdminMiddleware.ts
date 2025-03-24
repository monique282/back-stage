import { AuthenticatedRequest } from './authenticationTokenMiddleware';
import { NextFunction, Response } from 'express';
import { unauthorizedType } from '@/erros/unauthorizedRrror';

export async function checkAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'ADMIN') {
        throw unauthorizedType("Apenas administradores podem realizar cadastro de outro usuarios");
    }
    next();
}