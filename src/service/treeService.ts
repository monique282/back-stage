import { treeRepository } from "@/repositories/treeRepository";


async function treeGet() {
    const register = await treeRepository.treeGet();

    return register;
}

export const treeService = {
    treeGet
};