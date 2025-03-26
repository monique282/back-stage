import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { treeRepository } from "@/repositories/treeRepository";


async function treeGet() {
    const register = await treeRepository.treeGet();

    return register;
};

async function areaDelete(id: number) {
    const areaExists = await treeRepository.areaExistsGet(id)
    if(areaExists.length === 0){
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

async function areaPost(name:string, description:string) {
    const area = await treeRepository.areaPost(name, description);

    return area;
}

export const treeService = {
    treeGet, areaDelete, processDelete, areaPost
};