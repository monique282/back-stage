import prisma from "@/database/databease";

async function treeGet() {
    const areasWithProcesses = await prisma.area.findMany({
        include: {
            processes: true,    
        },
    });
    return areasWithProcesses;
};

async function areaExistsGet(id:number) {
    const area = await prisma.area.findMany({
        where:{
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
}

export const treeRepository = {
    treeGet, areaExistsGet, areaDelete
};