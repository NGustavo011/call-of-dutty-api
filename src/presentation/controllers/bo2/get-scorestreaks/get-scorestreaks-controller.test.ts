import { throwError } from '../../../../domain/test/test-helpers';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { HttpRequest } from '../../../contracts/http';
import { GetBo2ScorestreaksContract } from '../../../../domain/usecases-contracts/bo2/get-scorestreaks';
import { GetBo2ScorestreaksController } from './get-scorestreaks-controller';
import { mockGetBo2Scorestreaks } from '../../../test/mock-bo2';
import { mockBo2ScorestreakModel } from '../../../../data/bo2/test/mock-scorestreak';

const mockRequest = (): HttpRequest => {
	return {
		query: {
			name: ''
		}
	};
};

interface SutTypes {
  getBo2ScorestreaksStub: GetBo2ScorestreaksContract
  sut: GetBo2ScorestreaksController
}

const makeSut = (): SutTypes => {
	const getBo2ScorestreaksStub = mockGetBo2Scorestreaks();
	const sut = new GetBo2ScorestreaksController(getBo2ScorestreaksStub);
	return {
		getBo2ScorestreaksStub,
		sut
	};
};

describe('GetBo2Scorestreaks Controller', () => {
	describe('GetBo2Scorestreaks dependency', () => {
		test('Deve chamar GetBo2Scorestreaks com valores corretos', async () => {
			const { sut, getBo2ScorestreaksStub } = makeSut();
			const getSpy = jest.spyOn(getBo2ScorestreaksStub, 'get');
			await sut.execute(mockRequest());
			expect(getSpy).toHaveBeenCalledWith({
				name: mockRequest().query.name
			});
		});
		test('Deve retornar 500 se GetBo2Scorestreaks lançar uma exceção', async () => {
			const { sut, getBo2ScorestreaksStub } = makeSut();
			jest.spyOn(getBo2ScorestreaksStub, 'get').mockImplementationOnce(throwError);
			const httpResponse = await sut.execute(mockRequest());
			expect(httpResponse).toEqual(serverError(new Error()));
		});
	});
	test('Retorne status 200 se o dado provido for válido', async () => {
		const { sut } = makeSut();
		const httpResponse = await sut.execute(mockRequest());
		expect(httpResponse).toEqual(ok([mockBo2ScorestreakModel()]));
	});
});
