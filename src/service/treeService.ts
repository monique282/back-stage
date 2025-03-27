import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { treeRepository } from "@/repositories/treeRepository";


async function treeGet() {
    const register = await treeRepository.treeGet();

    return register;
};

async function areaDelete(id: number) {
    const areaExists = await treeRepository.areaExistsGet(id)
    if (areaExists.length === 0) {
        throw invalidCredentialsError("Area não existe")
    };
    const area = await treeRepository.areaDelete(id);

    return area;
};

async function processDelete(id: string) {
    const processExists = await treeRepository.processExistsGet(id)
    if (processExists.length === 0) {
        throw invalidCredentialsError("Processo não existe")
    };
    const process = await treeRepository.processDelete(id);

    return process;
};

async function areaPost(name: string, description: string) {
    const area = await treeRepository.areaPost(name, description);

    return area;
};

async function treeAreaGet() {
    const register = await treeRepository.treeAreaGet();

    return register;
};

async function processPost(name: string,
    description: string | null,
    areaId: number,
    tools: string[],
    responsible: string[],
    documents: string[]) {

    const areaExist = await treeRepository.areaExistGet(areaId);
    if (areaExist.length === 0) {
        throw invalidCredentialsError("Area não existe")
    };
    const area = await treeRepository.processPost(name, description, areaId, tools, responsible, documents);

    return area;
};

async function areaPut(name: string, description: string, id: number ) {
    const areaExists = await treeRepository.areaExistsGet(id)
    if (areaExists.length === 0) {
        throw invalidCredentialsError("Area não existe")
    };
    const area = await treeRepository.areaPut(name, description, id)
    return area
};

async function processPut(name: string, description: string, id: string, tools: string[], responsible: string[], documents: string[]) {
    const processExists = await treeRepository.processExistsGet(id)
    if (processExists.length === 0) {
        throw invalidCredentialsError("Processo não existe")
    };
    const process = await treeRepository.processPut(name, description, id, tools, responsible, documents);

    return process
};

export const treeService = {
    treeGet, areaDelete, processDelete, areaPost, treeAreaGet, processPost, areaPut, processPut
};