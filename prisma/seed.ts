import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    await prisma.user.createMany({
        data: [
            {
                email: 'm@gmail.com',
                password: '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
                role: "admin"
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
