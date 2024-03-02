-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "stack" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_apelido_key" ON "User"("apelido");
