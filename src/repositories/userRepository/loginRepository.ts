import prisma from "@/database/databease";


async function findByEmailPassword(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    }


export const loginRepository = {
    findByEmailPassword, 
};