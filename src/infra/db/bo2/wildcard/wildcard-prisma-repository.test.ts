import { prisma } from '../../../../main/config/prisma';
import { mockPrismaBo2Wildcards } from '../../../test/prisma/bo2';
import { clearDatabase } from '../../../test/prisma/clear-database';
import { Bo2WildcardPrismaRepository } from './wildcard-prisma-repository';

const makeSut = (): Bo2WildcardPrismaRepository => {
	return new Bo2WildcardPrismaRepository();
};

describe('Bo2WildcardPrismaRepository', () => {
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
			await mockPrismaBo2Wildcards();
			const wildcards = await sut.get({});
			expect(wildcards).toBeTruthy();
			expect(wildcards?.length).toBe(3);
		});
		test('Deve retornar um único wildcard pelo seu nome', async () => {
			const sut = makeSut();
			await mockPrismaBo2Wildcards();
			const wildcards = await sut.get({
				name: 'name_1'
			});
			expect(wildcards).toBeTruthy();
			expect(wildcards?.length).toBe(1);
		});
		test('Não deve retornar um wildcard se as condições não condizerem com tal', async () => {
			const sut = makeSut();
			await mockPrismaBo2Wildcards();
			const wildcards = await sut.get({
				name: 'name_4'
			});
			expect(wildcards).toBeTruthy();
			expect(wildcards?.length).toBe(0);
		});
	});
});