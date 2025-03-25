import prisma from "@/database/databease";

async function treeGet() {
    const areasWithProcesses = await prisma.area.findMany({
        include: {
            processes: true,    
        },
    });
    return areasWithProcesses;
}

export const treeRepository = {
    treeGet,
};