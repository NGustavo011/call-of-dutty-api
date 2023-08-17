import { prisma } from '../../../../main/config/prisma';
import { mockPrismaBo2Attachments } from '../../../test/prisma/bo2';
import { clearDatabase } from '../../../test/prisma/clear-database';
import { Bo2AttachmentPrismaRepository } from './attachment-prisma-repository';

const makeSut = (): Bo2AttachmentPrismaRepository => {
	return new Bo2AttachmentPrismaRepository();
};

describe('Bo2AttachmentPrismaRepository', () => {
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
			await mockPrismaBo2Attachments();
			const attachments = await sut.get({});
			expect(attachments).toBeTruthy();
			expect(attachments?.length).toBe(2);
		});
		test('Deve retornar apenas os attachments de um tipo específico', async () => {
			const sut = makeSut();
			await mockPrismaBo2Attachments();
			const attachments = await sut.get({
				gunType: 'type_1'
			});
			expect(attachments).toBeTruthy();
			expect(attachments?.length).toBe(1);
		});
		test('Deve retornar um único attachment pelo seu nome', async () => {
			const sut = makeSut();
			await mockPrismaBo2Attachments();
			const attachments = await sut.get({
				name: 'name_2'
			});
			expect(attachments).toBeTruthy();
			expect(attachments?.length).toBe(1);
		});
		test('Deve retornar um attachment pelo nome e tipo', async () => {
			const sut = makeSut();
			await mockPrismaBo2Attachments();
			const attachments = await sut.get({
				name: 'name_2',
				gunType: 'type_2'
			});
			expect(attachments).toBeTruthy();
			expect(attachments?.length).toBe(1);
		});
		test('Não deve retornar um attachment se as condições não condizerem com tal', async () => {
			const sut = makeSut();
			await mockPrismaBo2Attachments();
			const attachments = await sut.get({
				name: 'name_2',
				gunType: 'type_1'
			});
			expect(attachments).toBeTruthy();
			expect(attachments?.length).toBe(0);
		});
	});
});