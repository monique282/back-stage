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
        ],
        skipDuplicates: true
    });

    const areas = await prisma.area.createMany({
        data: [
            {
                name: "Recursos Humanos",
                description: "Departamento responsável por gestão de pessoas"
            },
            {
                name: "Financeiro",
                description: "Departamento responsável por finanças e contabilidade"
            },
            {
                name: "Tecnologia",
                description: "Departamento de TI e desenvolvimento"
            }
        ],
        skipDuplicates: true
    });

    const areaRH = await prisma.area.findUnique({
        where: { name: "Recursos Humanos" }
    });
    const areaFinanceiro = await prisma.area.findUnique({
        where: { name: "Financeiro" }
    });
    const areaTI = await prisma.area.findUnique({
        where: { name: "Tecnologia" }
    });

    await prisma.process.createMany({
        data: [
            {
                name: "Contratação",
                description: "Processo de contratação de novos colaboradores",
                areaId: areaRH?.id || 1,
                tools: ["Trello", "Google Docs"],
                responsible: ["Equipe RH"],
                documents: ["Modelo de contrato", "Checklist documentação"]
            },
            {
                name: "Treinamento",
                description: "Processo de onboarding e treinamento",
                areaId: areaRH?.id || 1,
                tools: ["Moodle", "Zoom"],
                responsible: ["Coordenador Treinamento"],
                documents: ["Manual do colaborador", "Avaliação de treinamento"]
            },
            {
                name: "Fechamento Mensal",
                description: "Processo de fechamento contábil mensal",
                areaId: areaFinanceiro?.id || 2,
                tools: ["SAP", "Excel"],
                responsible: ["Contador", "Analista Financeiro"],
                documents: ["Relatório mensal", "Planilha de conciliação"]
            },
            {
                name: "Desenvolvimento de Software",
                description: "Ciclo de vida de desenvolvimento de sistemas",
                areaId: areaTI?.id || 3,
                tools: ["GitHub", "Jira", "VS Code"],
                responsible: ["Equipe de Desenvolvimento"],
                documents: ["Documentação técnica", "Manual do usuário"]
            }
        ],
        skipDuplicates: true
    });

    const processoContratacao = await prisma.process.findFirst({
        where: { name: "Contratação" }
    });

    if (processoContratacao) {
        await prisma.process.create({
            data: {
                name: "Seleção de Candidatos",
                description: "Triagem e entrevista de candidatos",
                areaId: areaRH?.id || 1,
                parentId: processoContratacao.id,
                tools: ["LinkedIn Recruiter", "Google Meet"],
                responsible: ["Recrutador"],
                documents: ["Formulário de entrevista", "Grade de avaliação"]
            }
        });
    }

    console.log('Seed concluído com sucesso!');
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