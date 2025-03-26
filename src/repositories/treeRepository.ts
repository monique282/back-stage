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

export const treeRepository = {
    treeGet, areaExistsGet
};