-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "falmily_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "dirth_date" TIMESTAMP(3) NOT NULL,
    "contents" TEXT NOT NULL,
    "conversation" TEXT NOT NULL,
    "label" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
