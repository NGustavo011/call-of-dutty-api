import { prisma } from '../../../../main/config/prisma';
import { mockPrismaBo2Weapons } from '../../../test/prisma/bo2';
import { clearDatabase } from '../../../test/prisma/clear-database';
import { Bo2WeaponPrismaRepository } from './weapon-prisma-repository';

const makeSut = (): Bo2WeaponPrismaRepository => {
	return new Bo2WeaponPrismaRepository();
};

describe('Bo2WeaponPrismaRepository', () => {
	beforeAll(async () => {
		await prisma.$connect();
	});
	afterAll(async () => {
		await prisma.$disconnect();
	});
	beforeEach(async () => {
		await clearDatabase();
	});
	describe('get()', () => {
		test('Deve realizar com sucesso o método de get', async () => {
			const sut = makeSut();
			await mockPrismaBo2Weapons();
			const weapons = await sut.get({});
			expect(weapons).toBeTruthy();
			expect(weapons?.length).toBe(3);
		});
		test('Deve retornar apenas as armas de uma categoria específica', async () => {
			const sut = makeSut();
			await mockPrismaBo2Weapons();
			const weapons = await sut.get({
				weaponClass: 'weapon_class_1'
			});
			expect(weapons).toBeTruthy();
			expect(weapons?.length).toBe(2);
		});
		test('Deve retornar uma única arma pelo seu nome', async () => {
			const sut = makeSut();
			await mockPrismaBo2Weapons();
			const weapons = await sut.get({
				name: 'name_1'
			});
			expect(weapons).toBeTruthy();
			expect(weapons?.length).toBe(1);
		});
		test('Deve retornar uma arma pelo nome e categoria', async () => {
			const sut = makeSut();
			await mockPrismaBo2Weapons();
			const weapons = await sut.get({
				name: 'name_1',
				weaponClass: 'weapon_class_1'
			});
			expect(weapons).toBeTruthy();
			expect(weapons?.length).toBe(1);
		});
		test('Não deve retornar uma arma se as condições não condizerem com tal', async () => {
			const sut = makeSut();
			await mockPrismaBo2Weapons();
			const weapons = await sut.get({
				name: 'name_3',
				weaponClass: 'weapon_class_1'
			});
			expect(weapons).toBeTruthy();
			expect(weapons?.length).toBe(0);
		});
	});
});