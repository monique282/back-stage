import { treeRepository } from "@/repositories/treeRepository";


async function treeGet() {
    const register = await treeRepository.treeGet();

    return register;
};

async function areaDelete(id: number) {
    const areaExists = await treeRepository.areaExistsGet(id)
    console.log(areaExists)
    const area = await treeRepository.areaDelete();

    return area;
};

export const treeService = {
    treeGet, areaDelete
};