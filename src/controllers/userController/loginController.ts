import { Request, Response } from "express";
import httpStatus from "http-status";

async function loginPost(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await LoginService.loginPost({ email, password });

    res.status(httpStatus.OK).send(user);
}

export const loginController = {
    loginPost
};