-- CreateTable
CREATE TABLE "area" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "areaId" TEXT NOT NULL,
    "parentId" TEXT,
    "tools" TEXT[],
    "responsible" TEXT[],
    "documents" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "process_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "area_name_key" ON "area"("name");

-- CreateIndex
CREATE INDEX "process_areaId_idx" ON "process"("areaId");

-- CreateIndex
CREATE INDEX "process_parentId_idx" ON "process"("parentId");

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "process"("id") ON DELETE SET NULL ON UPDATE CASCADE;
