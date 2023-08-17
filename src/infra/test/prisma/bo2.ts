import { prisma } from '../../../main/config/prisma';

export const mockPrismaBo2Attachments = async (): Promise<void> => {
	await prisma.bo2Attachment.createMany({
		data: [
			{
				id: '1',
				icon: 'icon_url_1',
				name: 'name_1',
				gunType: ['type_1', 'type_2'],
				unlockedAt: ['type_1 lvl_1', 'type_2 lvl_2']
			},
			{
				id: '2',
				icon: 'icon_url_2',
				name: 'name_2',
				gunType: ['type_2', 'type_4'],
				unlockedAt: ['type_2 lvl_2', 'type_4 lvl_4']
			}
		]
	});
};

export const mockPrismaBo2Grenades = async (): Promise<void> =>{
	await prisma.bo2Grenade.createMany({
		data: [
			{
				id: '1',
				name: 'name_1',
				type: 'type_1'
			},
			{
				id: '2',
				name: 'name_2',
				type: 'type_1'
			},
			{
				id: '3',
				name: 'name_3',
				type: 'type_2'
			},
		]
	});
};

export const mockPrismaBo2Maps = async (): Promise<void> =>{
	await prisma.bo2Map.createMany({
		data: [
			{
				id: '1',
				name: 'name_1',
				bundle: 'default_bundle',
				date: 'date_1',
				hudIcon: 'hud_icon_url_1',
				icon: 'icon_url_1',
				location: 'location_1',
				modes: 'modes_1',
				terrain: 'terrain_1',
				typeOfCombat: 'type_of_combat_1'
			},
			{
				id: '2',
				name: 'name_2',
				bundle: 'default_bundle',
				date: 'date_2',
				hudIcon: 'hud_icon_url_2',
				icon: 'icon_url_2',
				location: 'location_2',
				modes: 'modes_2',
				terrain: 'terrain_2',
				typeOfCombat: 'type_of_combat_2'
			},
			{
				id: '3',
				name: 'name_3',
				bundle: 'dlc_1',
				date: 'date_3',
				hudIcon: 'hud_icon_url_3',
				icon: 'icon_url_3',
				location: 'location_3',
				modes: 'modes_3',
				terrain: 'terrain_3',
				typeOfCombat: 'type_of_combat_3'
			}
		]
	});
};

export const mockPrismaBo2Perks = async (): Promise<void> =>{
	await prisma.bo2Perk.createMany({
		data: [
			{
				id: '1',
				name: 'name_1',
				category: 'category_1',
				description: 'description_1',
				icon: 'icon_url_1',
				unlockedAt: 'lvl_1'
			},
			{
				id: '2',
				name: 'name_2',
				category: 'category_2',
				description: 'description_2',
				icon: 'icon_url_2',
				unlockedAt: 'lvl_2'
			},
			{
				id: '3',
				name: 'name_3',
				category: 'category_1',
				description: 'description_3',
				icon: 'icon_url_3',
				unlockedAt: 'lvl_3'
			},
		]
	});
};

export const mockPrismaBo2Scorestreaks = async (): Promise<void> =>{
	await prisma.bo2Scorestreak.createMany({
		data: [
			{
				id: '1',
				name: 'name_1',
				description: 'description_1',
				icon: 'icon_url_1',
				score: '1',
				unlockedAt: 'lvl_1'
			},
			{
				id: '2',
				name: 'name_2',
				description: 'description_2',
				icon: 'icon_url_2',
				score: '2',
				unlockedAt: 'lvl_2'
			},
			{
				id: '3',
				name: 'name_3',
				description: 'description_3',
				icon: 'icon_url_3',
				score: '3',
				unlockedAt: 'lvl_3'
			},
		]
	});
};

export const mockPrismaBo2Weapons = async (): Promise<void> =>{
	await prisma.bo2Weapon.createMany({
		data: [
			{
				id: '1',
				name: 'name_1',
				hudIcon: 'hud_icon_url_1',
				icon: 'icon_url_1',
				unlocked: 'lvl_x',
				weaponClass: 'weapon_class_1'
			},
			{
				id: '2',
				name: 'name_2',
				hudIcon: 'hud_icon_url_2',
				icon: 'icon_url_2',
				unlocked: 'lvl_x',
				weaponClass: 'weapon_class_1'
			},
			{
				id: '3',
				name: 'name_3',
				hudIcon: 'hud_icon_url_3',
				icon: 'icon_url_3',
				unlocked: 'lvl_x',
				weaponClass: 'weapon_class_2'
			},
		]
	});
};

export const mockPrismaBo2Wildcards = async (): Promise<void> =>{
	await prisma.bo2Wildcard.createMany({
		data: [
			{
				id: '1',
				name: 'name_1',
				description: 'description_1',
				icon: 'icon_url_1',
				unlockedAt: 'lvl_1'
			},
			{
				id: '2',
				name: 'name_2',
				description: 'description_2',
				icon: 'icon_url_2',
				unlockedAt: 'lvl_2'
			},
			{
				id: '3',
				name: 'name_3',
				description: 'description_3',
				icon: 'icon_url_3',
				unlockedAt: 'lvl_3'
			},
		]
	});
};