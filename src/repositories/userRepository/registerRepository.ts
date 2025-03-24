import prisma from "@/database/databease";

async function searchingEmail(email: string) {
    const result = await prisma.user.findUnique({
        where: {
            email
        },
    });
    return result
};

async function registerPost(hashedPassword: string, role: string, email: string) {
    const result = await prisma.user.create({
        data: {
            password: hashedPassword,
            role,
            email
        },
    });

    return result;
};


export const RegisterRepository = {
    searchingEmail,
    registerPost
};