import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    await prisma.user.createMany({
        data: [
            {
                email: 'm@gmail.com',
                password: '$2b$12$zabExmNp./Pm.bS/u5ujYueZ6YPJ8hcITSfIp4U.EP.UrLfnnCdYS',
                role: "ADMIN"
            },
            {
                email: 'm1@gmail.com',
                password: '$2b$12$zabExmNp./Pm.bS/u5ujYueZ6YPJ8hcITSfIp4U.EP.UrLfnnCdYS',
                role: "USER"
            }
        ] 
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('Erro ao executar o seed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
