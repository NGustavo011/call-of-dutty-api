import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2AttachmentsContract } from '../../../../domain/usecases-contracts/bo2/get-attachments';
import { HttpRequest } from '../../../contracts/http';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { mockGetBo2Attachments } from '../../../test/mock-bo2';
import { GetBo2AttachmentsController } from './get-attachments-controller';
import { mockBo2AttachmentModel } from '../../../../data/bo2/test/mock-attachment';


const mockRequest = (): HttpRequest => {
	return {
		query: {
			name: '',
			gunType: ''
		}
	};
};

interface SutTypes {
  getBo2AttachmentsStub: GetBo2AttachmentsContract
  sut: GetBo2AttachmentsController
}

const makeSut = (): SutTypes => {
	const getBo2AttachmentsStub = mockGetBo2Attachments();
	const sut = new GetBo2AttachmentsController(getBo2AttachmentsStub);
	return {
		getBo2AttachmentsStub,
		sut
	};
};

describe('GetBo2Attachments Controller', () => {
	describe('GetBo2Attachments dependency', () => {
		test('Deve chamar GetBo2Attachments com valores corretos', async () => {
			const { sut, getBo2AttachmentsStub } = makeSut();
			const getSpy = jest.spyOn(getBo2AttachmentsStub, 'get');
			await sut.execute(mockRequest());
			expect(getSpy).toHaveBeenCalledWith({
				name: mockRequest().query.name,
				gunType: mockRequest().query.gunType
			});
		});
		test('Deve retornar 500 se GetBo2Attachments lançar uma exceção', async () => {
			const { sut, getBo2AttachmentsStub } = makeSut();
			jest.spyOn(getBo2AttachmentsStub, 'get').mockImplementationOnce(throwError);
			const httpResponse = await sut.execute(mockRequest());
			expect(httpResponse).toEqual(serverError(new Error()));
		});
	});
	test('Retorne status 200 se o dado provido for válido', async () => {
		const { sut } = makeSut();
		const httpResponse = await sut.execute(mockRequest());
		expect(httpResponse).toEqual(ok([mockBo2AttachmentModel()]));
	});
});
