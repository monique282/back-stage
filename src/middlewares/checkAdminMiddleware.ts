import { AuthenticatedRequest } from './authenticationTokenMiddleware';
import { NextFunction, Response } from 'express';
import { unauthorizedType } from '@/erros/unauthorizedRrror';

export async function checkAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'ADMIN') {
        throw unauthorizedType("Apenas administradores podem realizar cadastro de outro usuarios");
    }
    next();
};

export async function checkAdminDeleteProcess(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'ADMIN') {
        throw unauthorizedType("Apenas administradores podem excluir processos");
    }
    next();
};

export async function checkAdminDeleteArea(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'ADMIN') {
        throw unauthorizedType("Apenas administradores podem excluir areas");
    }
    next();
};

export async function checkAdminPostArea(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'ADMIN') {
        throw unauthorizedType("Apenas administradores podem adicionar areas");
    }
    next();
};

export async function checkAdminPostProcess(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'ADMIN') {
        throw unauthorizedType("Apenas administradores podem adicionar processos");
    }
    next();
};