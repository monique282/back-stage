import { treeService } from "@/service/treeService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function treeGet(req: Request, res: Response) {
    const user = await treeService.treeGet();
    res.status(httpStatus.OK).send(user);
};

async function areaDelete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const area = await treeService.areaDelete(id);
    res.status(httpStatus.OK).send(area);
};

async function processDelete(req: Request, res: Response) {
    const id = (req.params.id);
    const process = await treeService.processDelete(id);
    res.status(httpStatus.OK).send(process);
};

export const treeComtroller = {
    treeGet, areaDelete, processDelete
};