import { throwError } from '../../../../domain/test/test-helpers';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { HttpRequest } from '../../../contracts/http';
import { GetBo2WildcardsContract } from '../../../../domain/usecases-contracts/bo2/get-wildcards';
import { GetBo2WildcardsController } from './get-wildcards-controller';
import { mockGetBo2Wildcards } from '../../../test/mock-bo2';
import { mockBo2WildcardModel } from '../../../../data/bo2/test/mock-wildcard';

const mockRequest = (): HttpRequest => {
	return {
		query: {
			name: ''
		}
	};
};

interface SutTypes {
  getBo2WildcardsStub: GetBo2WildcardsContract
  sut: GetBo2WildcardsController
}

const makeSut = (): SutTypes => {
	const getBo2WildcardsStub = mockGetBo2Wildcards();
	const sut = new GetBo2WildcardsController(getBo2WildcardsStub);
	return {
		getBo2WildcardsStub,
		sut
	};
};

describe('GetBo2Wildcards Controller', () => {
	describe('GetBo2Wildcards dependency', () => {
		test('Deve chamar GetBo2Wildcards com valores corretos', async () => {
			const { sut, getBo2WildcardsStub } = makeSut();
			const getSpy = jest.spyOn(getBo2WildcardsStub, 'get');
			await sut.execute(mockRequest());
			expect(getSpy).toHaveBeenCalledWith({
				name: mockRequest().query.name
			});
		});
		test('Deve retornar 500 se GetBo2Wildcards lançar uma exceção', async () => {
			const { sut, getBo2WildcardsStub } = makeSut();
			jest.spyOn(getBo2WildcardsStub, 'get').mockImplementationOnce(throwError);
			const httpResponse = await sut.execute(mockRequest());
			expect(httpResponse).toEqual(serverError(new Error()));
		});
	});
	test('Retorne status 200 se o dado provido for válido', async () => {
		const { sut } = makeSut();
		const httpResponse = await sut.execute(mockRequest());
		expect(httpResponse).toEqual(ok([mockBo2WildcardModel()]));
	});
});
