import { prisma } from '../../../../main/config/prisma';
import { mockPrismaBo2Perks } from '../../../test/prisma/bo2';
import { clearDatabase } from '../../../test/prisma/clear-database';
import { Bo2PerkPrismaRepository } from './perk-prisma-repository';

const makeSut = (): Bo2PerkPrismaRepository => {
	return new Bo2PerkPrismaRepository();
};

describe('Bo2PerkPrismaRepository', () => {
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
			await mockPrismaBo2Perks();
			const perks = await sut.get({});
			expect(perks).toBeTruthy();
			expect(perks?.length).toBe(3);
		});
		test('Deve retornar apenas os perks de uma categoria específica', async () => {
			const sut = makeSut();
			await mockPrismaBo2Perks();
			const perks = await sut.get({
				category: 'category_1'
			});
			expect(perks).toBeTruthy();
			expect(perks?.length).toBe(2);
		});
		test('Deve retornar um único perk pelo seu nome', async () => {
			const sut = makeSut();
			await mockPrismaBo2Perks();
			const perks = await sut.get({
				name: 'name_1'
			});
			expect(perks).toBeTruthy();
			expect(perks?.length).toBe(1);
		});
		test('Deve retornar um perk pelo nome e categoria', async () => {
			const sut = makeSut();
			await mockPrismaBo2Perks();
			const perks = await sut.get({
				name: 'name_1',
				category: 'category_1'
			});
			expect(perks).toBeTruthy();
			expect(perks?.length).toBe(1);
		});
		test('Não deve retornar um perk se as condições não condizerem com tal', async () => {
			const sut = makeSut();
			await mockPrismaBo2Perks();
			const perks = await sut.get({
				name: 'name_3',
				category: 'category_2'
			});
			expect(perks).toBeTruthy();
			expect(perks?.length).toBe(0);
		});
	});
});