import { prisma } from '../../../../main/config/prisma';
import { mockPrismaBo2Grenades } from '../../../test/prisma/bo2';
import { clearDatabase } from '../../../test/prisma/clear-database';
import { Bo2GrenadePrismaRepository } from './grenade-prisma-repository';

const makeSut = (): Bo2GrenadePrismaRepository => {
	return new Bo2GrenadePrismaRepository();
};

describe('Bo2GrenadePrismaRepository', () => {
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
			await mockPrismaBo2Grenades();
			const grenades = await sut.get({});
			expect(grenades).toBeTruthy();
			expect(grenades?.length).toBe(3);
		});
		test('Deve retornar apenas as granadas de um tipo específico', async () => {
			const sut = makeSut();
			await mockPrismaBo2Grenades();
			const grenades = await sut.get({
				type: 'type_1'
			});
			expect(grenades).toBeTruthy();
			expect(grenades?.length).toBe(2);
		});
		test('Deve retornar uma única granada pelo seu nome', async () => {
			const sut = makeSut();
			await mockPrismaBo2Grenades();
			const grenades = await sut.get({
				name: 'name_1'
			});
			expect(grenades).toBeTruthy();
			expect(grenades?.length).toBe(1);
		});
		test('Deve retornar uma granada pelo nome e tipo', async () => {
			const sut = makeSut();
			await mockPrismaBo2Grenades();
			const grenades = await sut.get({
				name: 'name_1',
				type: 'type_1'
			});
			expect(grenades).toBeTruthy();
			expect(grenades?.length).toBe(1);
		});
		test('Não deve retornar uma granada se as condições não condizerem com tal', async () => {
			const sut = makeSut();
			await mockPrismaBo2Grenades();
			const grenades = await sut.get({
				name: 'name_3',
				type: 'type_1'
			});
			expect(grenades).toBeTruthy();
			expect(grenades?.length).toBe(0);
		});
	});
});