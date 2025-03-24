import { RegisterService } from "@/service/userService/registerService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function registerPost(req: Request, res: Response) {
    const {  password, role, email } = req.body;
    const user = await RegisterService.registerPost(password, role, email);

    res.status(httpStatus.CREATED).send(user);
}

export const registerController = {
    registerPost
};