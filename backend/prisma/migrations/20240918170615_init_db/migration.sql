-- CreateTable
CREATE TABLE "Main" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_name" TEXT NOT NULL,
    "income" INTEGER NOT NULL,
    "expanse" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "spend" INTEGER NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "data" DATETIME NOT NULL,
    "mainId" INTEGER,
    CONSTRAINT "Transaction_mainId_fkey" FOREIGN KEY ("mainId") REFERENCES "Main" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
