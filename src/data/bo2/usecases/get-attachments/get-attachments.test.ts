import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2AttachmentsRepository } from '../../repositories-contracts/get-attachments-repository';
import { mockBo2AttachmentModel, mockGetBo2AttachmentsParams, mockGetBo2AttachmentsRepository } from '../../test/mock-attachment';
import { GetBo2Attachments } from './get-attachments';

interface SutTypes {
    getAttachmentsRepositoryStub: GetBo2AttachmentsRepository
    sut: GetBo2Attachments
}

const makeSut = (): SutTypes => {
	const getAttachmentsRepositoryStub = mockGetBo2AttachmentsRepository();
	const sut = new GetBo2Attachments(getAttachmentsRepositoryStub);
	return {
		getAttachmentsRepositoryStub,
		sut
	};
};

describe('GetBo2Attachments usecase', () => {
	describe('GetBo2AttachmentsRepository dependency', () => {
		test('Deve chamar GetBo2AttachmentsRepository com os valores corretos', async () => {
			const { sut, getAttachmentsRepositoryStub } = makeSut();
			const getSpy = jest.spyOn(getAttachmentsRepositoryStub, 'get');
			await sut.get(mockGetBo2AttachmentsParams());
			expect(getSpy).toHaveBeenCalledWith(mockGetBo2AttachmentsParams());
		});
		test('Deve repassar a exceção se o GetBo2AttachmentsRepository lançar um erro', async () => {
			const { sut, getAttachmentsRepositoryStub } = makeSut();
			jest.spyOn(getAttachmentsRepositoryStub, 'get').mockImplementationOnce(throwError);
			const promise = sut.get(mockGetBo2AttachmentsParams());
			await expect(promise).rejects.toThrow();
		});
		test('Deve retornar null se GetBo2AttachmentsRepository retornar null', async () => {
			const { sut, getAttachmentsRepositoryStub } = makeSut();
			jest.spyOn(getAttachmentsRepositoryStub, 'get').mockReturnValueOnce(Promise.resolve(null));
			const attachments = await sut.get(mockGetBo2AttachmentsParams());
			expect(attachments).toBeNull();
		});
	});
	test('Deve retornar Bo2AttachmentModel[] com sucesso', async () => {
		const { sut } = makeSut();
		const attachments = await sut.get(mockGetBo2AttachmentsParams());
		expect(attachments).toEqual([mockBo2AttachmentModel()]);
	});
});
