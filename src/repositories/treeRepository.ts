import prisma from "@/database/databease";

async function treeGet() {
    const areasWithProcesses = await prisma.area.findMany({
        include: {
            processes: true,
        },
    });
    return areasWithProcesses;
};

async function areaExistsGet(id: number) {
    const area = await prisma.area.findMany({
        where: {
            id
        }
    })

    return area
};

async function areaDelete(id: number) {
    await prisma.process.deleteMany({
        where: {
            areaId: id
        }
    });
    const area = await prisma.area.delete({
        where: {
            id
        }
    });

    return area;
};

async function processExistsGet(id: string) {
    const process = await prisma.process.findMany({
        where: {
            id
        }
    })

    return process
};

async function processDelete(id: string) {
    const process = await prisma.process.delete({
        where: {
            id
        }
    });

    return process;
};

async function areaPost(name: string, description: string) {
    const area = await prisma.area.create({
        data: {
            name,
            description: description || null
        }
    })
    return area
};

async function treeAreaGet() {
    const areas = await prisma.area.findMany({});
    return areas;
};

async function areaExistGet(areaId: number) {
    const area = await prisma.area.findMany({
        where: {
            id: areaId
        }
    });
    return area;
};

async function processPost(name: string,
    description: string | null | undefined,
    areaId: number,
    tools: string[],
    responsible: string[],
    documents: string[]) {
    const area = await prisma.process.create({
        data: {
            name,
            description: description !== undefined ? description : null,
            areaId,
            tools,
            responsible,
            documents
        }
    })
    return area
};

export const treeRepository = {
    treeGet, areaExistsGet, areaDelete, processExistsGet, processDelete, areaPost, treeAreaGet, areaExistGet, processPost
};