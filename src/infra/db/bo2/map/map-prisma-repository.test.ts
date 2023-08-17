import { prisma } from '../../../../main/config/prisma';
import { mockPrismaBo2Maps } from '../../../test/prisma/bo2';
import { clearDatabase } from '../../../test/prisma/clear-database';
import { Bo2MapPrismaRepository } from './map-prisma-repository';

const makeSut = (): Bo2MapPrismaRepository => {
	return new Bo2MapPrismaRepository();
};

describe('Bo2MapPrismaRepository', () => {
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
			await mockPrismaBo2Maps();
			const maps = await sut.get({});
			expect(maps).toBeTruthy();
			expect(maps?.length).toBe(3);
		});
		test('Deve retornar apenas os mapas de um bundle específico', async () => {
			const sut = makeSut();
			await mockPrismaBo2Maps();
			const maps = await sut.get({
				bundle: 'default_bundle'
			});
			expect(maps).toBeTruthy();
			expect(maps?.length).toBe(2);
		});
		test('Deve retornar um único mapa pelo seu nome', async () => {
			const sut = makeSut();
			await mockPrismaBo2Maps();
			const maps = await sut.get({
				name: 'name_1'
			});
			expect(maps).toBeTruthy();
			expect(maps?.length).toBe(1);
		});
		test('Deve retornar um mapa pelo nome e tipo', async () => {
			const sut = makeSut();
			await mockPrismaBo2Maps();
			const maps = await sut.get({
				name: 'name_1',
				bundle: 'default_bundle'
			});
			expect(maps).toBeTruthy();
			expect(maps?.length).toBe(1);
		});
		test('Não deve retornar um mapa se as condições não condizerem com tal', async () => {
			const sut = makeSut();
			await mockPrismaBo2Maps();
			const maps = await sut.get({
				name: 'name_3',
				bundle: 'default_bundle'
			});
			expect(maps).toBeTruthy();
			expect(maps?.length).toBe(0);
		});
	});
});