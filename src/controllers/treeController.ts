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

async function areaPost(req: Request, res: Response) {
    const { name, description } = req.body;
    const area = await treeService.areaPost(name, description);
    res.status(httpStatus.CREATED).send(area);
};

async function treeAreaGet(req: Request, res: Response) {
    const user = await treeService.treeAreaGet();
    res.status(httpStatus.OK).send(user);
};

async function processPost(req: Request, res: Response){
    const { name, description, areaId, tools, responsible ,documents } = req.body;
    const process = await treeService.processPost(name, description, areaId, tools, responsible, documents);
    res.status(httpStatus.CREATED).send(process);
};

async function areaPut(req: Request, res: Response) {
    const { name, description } = req.body;
    const id = Number(req.params.id);
    const area = await treeService.areaPut(name, description, id);
    res.status(httpStatus.OK).send(area);
};

async function processPut(req: Request, res: Response) {
    const { name, description, tools, responsible, documents } = req.body;
    const id = Number(req.params.id);
    const process = await treeService.processPut(name, description, id, tools, responsible, documents);
    res.status(httpStatus.OK).send(process);
};

export const treeComtroller = {
    treeGet, areaDelete, processDelete, areaPost, treeAreaGet, processPost, areaPut, processPut
};