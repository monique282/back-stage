import { invalidCredentialsError } from "@/erros/invalidCredentialsError";
import { treeRepository } from "@/repositories/treeRepository";


async function treeGet() {
    const register = await treeRepository.treeGet();

    return register;
};

async function areaDelete(id: number) {
    const areaExists = await treeRepository.areaExistsGet(id)
    console.log(areaExists)
    if(areaExists.length === 0){
        throw invalidCredentialsError("Area não existe")
    };
    const area = await treeRepository.areaDelete(id);

    return area;
};

export const treeService = {
    treeGet, areaDelete
};