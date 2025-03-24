import { ForbiddenError } from '@/erros/forbiddenError';
import { AuthenticatedRequest } from './authenticationTokenMiddleware';
import { NextFunction, Response } from 'express';

export async function checkAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'ADMIN') {
        throw  ForbiddenError("Apenas administradores podem realizar esta ação");
    }
    next();
}