import { prisma } from '../../../main/config/prisma';

export const clearDatabase = async (): Promise<void> => {
	await prisma.bo2Attachment.deleteMany({});
	await prisma.bo2Grenade.deleteMany({});
	await prisma.bo2Map.deleteMany({});
	await prisma.bo2Perk.deleteMany({});
	await prisma.bo2Scorestreak.deleteMany({});
	await prisma.bo2Weapon.deleteMany({});
	await prisma.bo2Wildcard.deleteMany({});
};
