import request from 'supertest';
import { clearDatabase } from '../../../infra/test/prisma/clear-database';
import { app } from '../../config/app';
import { prisma } from '../../config/prisma';

const mockBo2Attachments = async (): Promise<void> =>{
	await prisma.bo2Attachment.createMany({
		data: [
			{
				name: 'ACOG Scope',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/f/f0/ACOG_Sight_menu_icon_BOII.png/revision/latest?cb=20121122002256',
				gunType: ['Assault Rifles', 'Crossbow', 'LMGs', 'Sniper Rifles'],
				unlockedAt: ['Weapon level 5 (Assault Rifles)', 'Weapon level 3 (Crossbow)', 'Weapon level 9 (LMGs)', 'Weapon level 7 (Sniper Rifles)']
			},
			{
				name: 'Adjustable Stock',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/0/00/Adjustable_Stock_Menu_icon_BOII.png/revision/latest?cb=20121122213327',
				gunType: ['Assault Rifles', 'LMGs', 'Shotguns', 'SMGs'],
				unlockedAt: ['Weapon level 7 (Assault Rifles)', 'Weapon level 8 (LMGs)', 'Weapon level 6 (Shotguns)', 'Weapon level 12 (SMGs)']   
			},
			{
				name: 'Ballistics CPU',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/b/b7/Ballistics_CPU_Menu_icon_BOII.png/revision/latest?cb=20121122143726',
				gunType: ['Sniper Rifles'],
				unlockedAt: ['Weapon level 3 (Sniper Rifles)']   
			}
		]
	});
};

const mockBo2Grenades = async (): Promise<void> =>{
	await prisma.bo2Grenade.createMany({
		data: [
			{
				name: 'Combat Axe',
				type: 'Lethal'
			},
			{
				name: 'Grenade',
				type: 'Lethal'
			},
			{
				name: 'Smoke Grenade',
				type: 'Tactical'
			},
		]
	});
};

const mockBo2Maps = async (): Promise<void> => {
	await prisma.bo2Map.createMany({
		data: [
			{
				name: 'Aftermath',
				date: 'June 19th, 2025',
				location: 'Downtown Los Angeles, Los Angeles, California, United States of America',
				terrain: 'Urban',
				typeOfCombat: 'Close-Medium',
				modes: 'All (except Free-For-All)',
				bundle: 'Game base',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/b/ba/Aftermath_loading_screen_BOII.png/revision/latest/scale-to-width-down/350?cb=20130125112538',
				hudIcon: 'https://static.wikia.nocookie.net/callofduty/images/b/bb/Aftermath_minimap_BOII.png/revision/latest/scale-to-width-down/350?cb=20121209073347'
			},
			{
				name: 'Cargo',
				date: 'May 30th, 2025',
				location: 'Keppel Terminal, Port of Singapore, Singapore',
				terrain: 'Harbor',
				typeOfCombat: 'Close-Medium',
				modes: 'All',
				bundle: 'Game base',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/d/d4/Cargo_loadscreen_BOII.png/revision/latest/scale-to-width-down/350?cb=20130120072815',
				hudIcon: 'https://static.wikia.nocookie.net/callofduty/images/2/2f/Cargo_minimap_BOII.png/revision/latest/scale-to-width-down/350?cb=20121209073308'
			},
			{
				name: 'Carrier',
				date: 'June 18th, 2025',
				location: 'Chinese Supercarrier, Location Classified (Pacific Ocean)',
				terrain: 'Offshore',
				typeOfCombat: 'Long range',
				modes: 'All',
				bundle: 'Game base',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/8/88/Carrier_loadscreen_BOII.png/revision/latest/scale-to-width-down/350?cb=20121209072436',
				hudIcon: 'https://static.wikia.nocookie.net/callofduty/images/8/8e/Carrier_Multiplayer_Minimap_BOII.png/revision/latest?cb=20121209073538'
			}
		]
	});
};

const mockBo2Perks = async (): Promise<void> => {
	await prisma.bo2Perk.createMany({
		data: [
			{
				name: 'Flak Jacket',
				category: 'Tier 1',
				description: 'Take 65% less explosive damage. No explosive is one hit kill unless it is a direct impact.',
				unlockedAt: 'Level 32',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/0/04/Flak_Jacket_Perk_Icon_BOII.png/revision/latest/scale-to-width-down/100?cb=20121116000701'
			},
			{
				name: 'Hard Wired',
				category: 'Tier 26',
				description: 'Immune to Counter-UAVs and EMPs.',
				unlockedAt: 'Level 26',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/6/62/Hard_Wired_Perk_Icon_BOII.png/revision/latest/scale-to-width-down/100?cb=20121117001324'
			},
			{
				name: 'Lightweight',
				category: 'Tier 1',
				description: 'Move 7% faster, take no fall damage.',
				unlockedAt: 'Level 4',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/3/38/Lightweight_Perk_Icon_BOII.png/revision/latest/scale-to-width-down/100?cb=20121115235757'
			}
		]
	});
};

const mockBo2Scorestreaks = async (): Promise<void> => {
	await prisma.bo2Scorestreak.createMany({
		data: [
			{
				name: 'UAV',
				description: 'Shows enemies on the mini-map. Adds 10 points to the player\'s scorestreak for each kill their team gets while it is active (UAV Assists). Can be shot down.',
				score: '425',
				unlockedAt: 'Level 7',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/5/56/UAV_Menu_Icon_BOII.png/revision/latest?cb=20121209082834'
			},
			{
				name: 'RC-XD',
				description: 'Remote-controlled car strapped with explosives that the player can boost and explode at will. Adds 25 points per kill (RC-XD Kill). Can be destroyed by enemy players.',
				score: '450',
				unlockedAt: 'Level 18',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/4/4d/RC-XD_Menu_Icon_BOII.png/revision/latest?cb=20121209082722'
			},
			{
				name: 'Hunter Killer Drone',
				description: 'Airborne drone that seeks out and destroys a nearby target.  Adds 25 points per kill. Will also take out enemy scorestreaks (only UAVs, counter UAVs and care package couriers) for the appropriate amount of points if thrown in the right general direction.',
				score: '525',
				unlockedAt: 'Level 7',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/3/31/Hunter_Killer_Menu_Icon_BOII.png/revision/latest?cb=20121209082905'
			}
		]
	});
};

const mockBo2Weapons = async (): Promise<void> => {
	await prisma.bo2Weapon.createMany({
		data: [
			{
				name: 'AN-94',
				weaponClass: 'Assault Rifle',
				unlocked: 'Level 55',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/3/34/AN-94_menu_icon_BOII.png/revision/latest/scale-to-width-down/350?cb=20121210115859',
				hudIcon: 'https://static.wikia.nocookie.net/callofduty/images/9/9d/AN-94_Pick-Up_Icon_BOII.png/revision/latest/scale-to-width-down/128?cb=20121209123315'
			},
			{
				name: 'M8A1',
				weaponClass: 'Assault Rifle',
				unlocked: 'Level 49',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/3/3e/M8A1_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/350?cb=20130120172104',
				hudIcon: 'https://static.wikia.nocookie.net/callofduty/images/6/6f/M8A1_Side_View_BOII.png/revision/latest/scale-to-width-down/128?cb=20121217175359'
			},
			{
				name: 'MSMC',
				weaponClass: 'SMGs',
				unlocked: 'Level 28',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/1/15/MSMC_Menu_Icon_BOII.png/revision/latest?cb=20180118205113',
				hudIcon: 'https://static.wikia.nocookie.net/callofduty/images/9/9d/MSMC_Pick-Up_Icon_BOII.png/revision/latest/scale-to-width-down/128?cb=20121209104733'
			},
		]
	});
};

const mockBo2Wildcards = async (): Promise<void> => {
	await prisma.bo2Wildcard.createMany({
		data: [
			{
				name: 'Overkill',
				description: 'Take a primary weapon as your secondary weapon.',
				unlockedAt: 'Level 16',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/9/9d/Overkill_Wildcard_Icon_BOII.png/revision/latest?cb=20121117213140'
			},
			{
				name: 'Primary Gunfighter',
				description: 'Take a 3rd attachment for your primary weapon.',
				unlockedAt: 'Level 22',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/4/47/Primary_Gunfighter_Wildcard_Icon_BOII.png/revision/latest?cb=20121117213531'
			},
			{
				name: 'Secondary Gunfighter',
				description: 'Take a 2nd attachment for your secondary weapon.',
				unlockedAt: 'Level 19',
				icon: 'https://static.wikia.nocookie.net/callofduty/images/c/c5/Secondary_Gunfighter_Wildcard_Icon_BOII.png/revision/latest?cb=20121117213826'
			}
		]
	});
};

describe('BO2 Routes', () => {
	beforeAll(async () => {
		await clearDatabase();
		await prisma.$connect();
	});
	afterAll(async () => {
		await prisma.$disconnect();
	});

	describe('GET /bo2/attachment?name=&gunType=', () => {
		test('Deve retornar status code 200 em caso de sucesso na listagem de attachments', async () => {
			await mockBo2Attachments();
			await request(app).get('/api/bo2/attachment').expect(200);
		});
	});

	describe('GET /bo2/grenade?name=&type=', () => {
		test('Deve retornar status code 200 em caso de sucesso na listagem de grenades', async () => {
			await mockBo2Grenades();
			await request(app).get('/api/bo2/grenade').expect(200);
		});
	});

	describe('GET /bo2/map?name=&bundle=', () => {
		test('Deve retornar status code 200 em caso de sucesso na listagem de maps', async () => {
			await mockBo2Maps();
			await request(app).get('/api/bo2/map').expect(200);
		});
	});

	describe('GET /bo2/perk?name=&category=', () => {
		test('Deve retornar status code 200 em caso de sucesso na listagem de perks', async () => {
			await mockBo2Perks();
			await request(app).get('/api/bo2/perk').expect(200);
		});
	});

	describe('GET /bo2/scorestreak?name=', () => {
		test('Deve retornar status code 200 em caso de sucesso na listagem de scorestreaks', async () => {
			await mockBo2Scorestreaks();
			await request(app).get('/api/bo2/scorestreak').expect(200);
		});
	});

	describe('GET /bo2/weapon?name=&weaponClass=', () => {
		test('Deve retornar status code 200 em caso de sucesso na listagem de weapons', async () => {
			await mockBo2Weapons();
			await request(app).get('/api/bo2/weapon').expect(200);
		});
	});

	describe('GET /bo2/wildcard?name=', () => {
		test('Deve retornar status code 200 em caso de sucesso na listagem de wildcards', async () => {
			await mockBo2Wildcards();
			await request(app).get('/api/bo2/wildcard').expect(200);
		});
	});
});