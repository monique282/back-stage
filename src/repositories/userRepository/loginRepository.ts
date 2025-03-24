import prisma from "@/database/databease";


async function findByEmailPassword(email) {
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