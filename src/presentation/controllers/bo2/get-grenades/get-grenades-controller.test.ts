import { throwError } from '../../../../domain/test/test-helpers';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { HttpRequest } from '../../../contracts/http';
import { GetBo2GrenadesContract } from '../../../../domain/usecases-contracts/bo2/get-grenades';
import { mockGetBo2Grenades } from '../../../test/mock-bo2';
import { mockBo2GrenadeModel } from '../../../../data/bo2/test/mock-grenade';
import { GetBo2GrenadesController } from './get-grenades-controller';


const mockRequest = (): HttpRequest => {
	return {
		query: {
			name: '',
			type: ''
		}
	};
};

interface SutTypes {
  getBo2GrenadesStub: GetBo2GrenadesContract
  sut: GetBo2GrenadesController
}

const makeSut = (): SutTypes => {
	const getBo2GrenadesStub = mockGetBo2Grenades();
	const sut = new GetBo2GrenadesController(getBo2GrenadesStub);
	return {
		getBo2GrenadesStub,
		sut
	};
};

describe('GetBo2Grenades Controller', () => {
	describe('GetBo2Grenades dependency', () => {
		test('Deve chamar GetBo2Grenades com valores corretos', async () => {
			const { sut, getBo2GrenadesStub } = makeSut();
			const getSpy = jest.spyOn(getBo2GrenadesStub, 'get');
			await sut.execute(mockRequest());
			expect(getSpy).toHaveBeenCalledWith({
				name: mockRequest().query.name,
				type: mockRequest().query.type
			});
		});
		test('Deve retornar 500 se GetBo2Grenades lançar uma exceção', async () => {
			const { sut, getBo2GrenadesStub } = makeSut();
			jest.spyOn(getBo2GrenadesStub, 'get').mockImplementationOnce(throwError);
			const httpResponse = await sut.execute(mockRequest());
			expect(httpResponse).toEqual(serverError(new Error()));
		});
	});
	test('Retorne status 200 se o dado provido for válido', async () => {
		const { sut } = makeSut();
		const httpResponse = await sut.execute(mockRequest());
		expect(httpResponse).toEqual(ok([mockBo2GrenadeModel()]));
	});
});
