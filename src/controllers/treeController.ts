import { treeService } from "@/service/treeService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function treeGet(req: Request, res: Response) {

    const user = await treeService.treeGet();
    res.status(httpStatus.OK).send(user);
};

async function areaDelete(req: Request, res: Response) {
    
},

export const treeComtroller = {
    treeGet, areaDelete
};