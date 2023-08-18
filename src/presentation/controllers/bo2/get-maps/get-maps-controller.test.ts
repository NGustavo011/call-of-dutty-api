import { throwError } from '../../../../domain/test/test-helpers';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { HttpRequest } from '../../../contracts/http';
import { GetBo2MapsContract } from '../../../../domain/usecases-contracts/bo2/get-maps';
import { GetBo2MapsController } from './get-maps-controller';
import { mockGetBo2Maps } from '../../../test/mock-bo2';
import { mockBo2MapModel } from '../../../../data/bo2/test/mock-map';



const mockRequest = (): HttpRequest => {
	return {
		query: {
			name: '',
			bundle: ''
		}
	};
};

interface SutTypes {
  getBo2MapsStub: GetBo2MapsContract
  sut: GetBo2MapsController
}

const makeSut = (): SutTypes => {
	const getBo2MapsStub = mockGetBo2Maps();
	const sut = new GetBo2MapsController(getBo2MapsStub);
	return {
		getBo2MapsStub,
		sut
	};
};

describe('GetBo2Maps Controller', () => {
	describe('GetBo2Maps dependency', () => {
		test('Deve chamar GetBo2Maps com valores corretos', async () => {
			const { sut, getBo2MapsStub } = makeSut();
			const getSpy = jest.spyOn(getBo2MapsStub, 'get');
			await sut.execute(mockRequest());
			expect(getSpy).toHaveBeenCalledWith({
				name: mockRequest().query.name,
				bundle: mockRequest().query.bundle
			});
		});
		test('Deve retornar 500 se GetBo2Maps lançar uma exceção', async () => {
			const { sut, getBo2MapsStub } = makeSut();
			jest.spyOn(getBo2MapsStub, 'get').mockImplementationOnce(throwError);
			const httpResponse = await sut.execute(mockRequest());
			expect(httpResponse).toEqual(serverError(new Error()));
		});
	});
	test('Retorne status 200 se o dado provido for válido', async () => {
		const { sut } = makeSut();
		const httpResponse = await sut.execute(mockRequest());
		expect(httpResponse).toEqual(ok([mockBo2MapModel()]));
	});
});
