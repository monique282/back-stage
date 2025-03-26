import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { unauthorizedError } from '@/erros/unauthorizedRrror';
import { authenticationRepository } from '@/repositories/authenticationTokenRepository';
import prisma from '@/database/databease';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw unauthorizedError();

    const token = authHeader.split(' ')[1];
    if (!token) throw unauthorizedError();

    try {
        const session = await authenticationRepository.findSession(token);
        if (!session) throw unauthorizedError();

        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, email: true, role: true }
        });

        if (!user) throw unauthorizedError();

        req.user = user;
        next();
    } catch (error) {
        throw unauthorizedError();
    }
}

export type AuthenticatedRequest = Request & {
    user?: {
        id: number;
        email: string;
        role: string;
    };
};

export type JWTPayload = {
    userId: number;
};