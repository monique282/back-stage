import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.session.deleteMany();
    await prisma.process.deleteMany();
    await prisma.area.deleteMany();
    await prisma.user.deleteMany();

    const users = await prisma.user.createMany({
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
                name: 'Recursos Humanos',
                description: 'Departamento responsável por gestão de pessoas'
            },
            {
                name: 'Financeiro',
                description: 'Departamento responsável por finanças e contabilidade'
            },
            {
                name: 'Tecnologia da Informação',
                description: 'Departamento de TI e desenvolvimento'
            },
            {
                name: 'Marketing',
                description: 'Departamento de comunicação e promoção'
            },
            {
                name: 'Operações',
                description: 'Departamento de operações e logística'
            }
        ],
        skipDuplicates: true
    });

    const areaRH = await prisma.area.findUnique({ where: { name: 'Recursos Humanos' } });
    const areaFinanceiro = await prisma.area.findUnique({ where: { name: 'Financeiro' } });
    const areaTI = await prisma.area.findUnique({ where: { name: 'Tecnologia da Informação' } });
    const areaMarketing = await prisma.area.findUnique({ where: { name: 'Marketing' } });
    const areaOperacoes = await prisma.area.findUnique({ where: { name: 'Operações' } });

    const processos = await prisma.process.createMany({
        data: [
            {
                name: 'Contratação',
                description: 'Processo de contratação de novos colaboradores',
                areaId: areaRH?.id || 1,
                tools: ['Trello', 'Google Docs', 'RecruiterBox'],
                responsible: ['Equipe RH', 'Gestores'],
                documents: ['Modelo de contrato', 'Checklist documentação', 'Política de contratação']
            },
            {
                name: 'Treinamento e Desenvolvimento',
                description: 'Processo de onboarding e treinamento contínuo',
                areaId: areaRH?.id || 1,
                tools: ['Moodle', 'Zoom', 'Google Classroom'],
                responsible: ['Coordenador T&D', 'Instrutores'],
                documents: ['Manual do colaborador', 'Avaliação de treinamento', 'Plano de desenvolvimento']
            },
            {
                name: 'Fechamento Mensal',
                description: 'Processo de fechamento contábil mensal',
                areaId: areaFinanceiro?.id || 2,
                tools: ['SAP', 'Excel', 'Power BI'],
                responsible: ['Contador', 'Analista Financeiro', 'Controller'],
                documents: ['Relatório mensal', 'Planilha de conciliação', 'Demonstrativos financeiros']
            },
            {
                name: 'Desenvolvimento de Software',
                description: 'Ciclo de vida de desenvolvimento de sistemas',
                areaId: areaTI?.id || 3,
                tools: ['GitHub', 'Jira', 'VS Code', 'Docker'],
                responsible: ['Equipe de Desenvolvimento', 'Product Owner', 'Scrum Master'],
                documents: ['Documentação técnica', 'Manual do usuário', 'Especificações de requisitos']
            },
            {
                name: 'Campanha de Marketing',
                description: 'Processo de criação e execução de campanhas',
                areaId: areaMarketing?.id || 4,
                tools: ['Google Ads', 'Meta Business', 'Canva'],
                responsible: ['Gerente de Marketing', 'Designers', 'Redatores'],
                documents: ['Briefing', 'Cronograma', 'Relatório de performance']
            },
            {
                name: 'Logística de Entrega',
                description: 'Processo de gestão de entregas aos clientes',
                areaId: areaOperacoes?.id || 5,
                tools: ['Sistema de Rastreamento', 'WMS', 'TMS'],
                responsible: ['Coordenador de Logística', 'Operadores'],
                documents: ['Checklist de entrega', 'Relatório de ocorrências', 'Termos de entrega']
            }
        ],
        skipDuplicates: true
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