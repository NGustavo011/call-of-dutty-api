-- CreateTable
CREATE TABLE "Bo2Attachment" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gunType" TEXT[],
    "unlockedAt" TEXT[],
    "icon" TEXT NOT NULL,

    CONSTRAINT "Bo2Attachment_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Bo2Grenade" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Bo2Grenade_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Bo2Map" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bundle" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "modes" TEXT NOT NULL,
    "typeOfCombat" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "hudIcon" TEXT NOT NULL,

    CONSTRAINT "Bo2Map_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Bo2Perk" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unlockedAt" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Bo2Perk_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Bo2Scorestreak" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unlockedAt" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Bo2Scorestreak_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Bo2Weapon" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weaponClass" TEXT NOT NULL,
    "unlocked" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "hudIcon" TEXT NOT NULL,

    CONSTRAINT "Bo2Weapon_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Bo2Wildcard" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unlockedAt" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Bo2Wildcard_pkey" PRIMARY KEY ("_id")
);
