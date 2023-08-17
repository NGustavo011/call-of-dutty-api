import { prisma } from '../../../../main/config/prisma';
import { mockPrismaBo2Scorestreaks } from '../../../test/prisma/bo2';
import { clearDatabase } from '../../../test/prisma/clear-database';
import { Bo2ScorestreakPrismaRepository } from './scorestreak-prisma-repository';

const makeSut = (): Bo2ScorestreakPrismaRepository => {
	return new Bo2ScorestreakPrismaRepository();
};

describe('Bo2ScorestreakPrismaRepository', () => {
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
			await mockPrismaBo2Scorestreaks();
			const scorestreaks = await sut.get({});
			expect(scorestreaks).toBeTruthy();
			expect(scorestreaks?.length).toBe(3);
		});
		test('Deve retornar um único scorestreak pelo seu nome', async () => {
			const sut = makeSut();
			await mockPrismaBo2Scorestreaks();
			const scorestreaks = await sut.get({
				name: 'name_1'
			});
			expect(scorestreaks).toBeTruthy();
			expect(scorestreaks?.length).toBe(1);
		});
		test('Não deve retornar um scorestreak se as condições não condizerem com tal', async () => {
			const sut = makeSut();
			await mockPrismaBo2Scorestreaks();
			const scorestreaks = await sut.get({
				name: 'name_4'
			});
			expect(scorestreaks).toBeTruthy();
			expect(scorestreaks?.length).toBe(0);
		});
	});
});