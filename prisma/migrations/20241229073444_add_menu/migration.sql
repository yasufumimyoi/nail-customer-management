-- CreateTable
CREATE TABLE "Menu" (
    "menu_id" SERIAL NOT NULL,
    "menu_name" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("menu_id")
);
