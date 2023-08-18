import { throwError } from '../../../../domain/test/test-helpers';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { HttpRequest } from '../../../contracts/http';
import { GetBo2PerksContract } from '../../../../domain/usecases-contracts/bo2/get-perks';
import { GetBo2PerksController } from './get-perks-controller';
import { mockGetBo2Perks } from '../../../test/mock-bo2';
import { mockBo2PerkModel } from '../../../../data/bo2/test/mock-perk';

const mockRequest = (): HttpRequest => {
	return {
		query: {
			name: '',
			type: ''
		}
	};
};

interface SutTypes {
  getBo2PerksStub: GetBo2PerksContract
  sut: GetBo2PerksController
}

const makeSut = (): SutTypes => {
	const getBo2PerksStub = mockGetBo2Perks();
	const sut = new GetBo2PerksController(getBo2PerksStub);
	return {
		getBo2PerksStub,
		sut
	};
};

describe('GetBo2Perks Controller', () => {
	describe('GetBo2Perks dependency', () => {
		test('Deve chamar GetBo2Perks com valores corretos', async () => {
			const { sut, getBo2PerksStub } = makeSut();
			const getSpy = jest.spyOn(getBo2PerksStub, 'get');
			await sut.execute(mockRequest());
			expect(getSpy).toHaveBeenCalledWith({
				name: mockRequest().query.name,
				category: mockRequest().query.category
			});
		});
		test('Deve retornar 500 se GetBo2Perks lançar uma exceção', async () => {
			const { sut, getBo2PerksStub } = makeSut();
			jest.spyOn(getBo2PerksStub, 'get').mockImplementationOnce(throwError);
			const httpResponse = await sut.execute(mockRequest());
			expect(httpResponse).toEqual(serverError(new Error()));
		});
	});
	test('Retorne status 200 se o dado provido for válido', async () => {
		const { sut } = makeSut();
		const httpResponse = await sut.execute(mockRequest());
		expect(httpResponse).toEqual(ok([mockBo2PerkModel()]));
	});
});
