import { throwError } from '../../../../domain/test/test-helpers';
import { ok, serverError } from '../../../helpers/http/http-helper';
import { HttpRequest } from '../../../contracts/http';
import { GetBo2WeaponsContract } from '../../../../domain/usecases-contracts/bo2/get-weapons';
import { GetBo2WeaponsController } from './get-weapons-controller';
import { mockGetBo2Weapons } from '../../../test/mock-bo2';
import { mockBo2WeaponModel } from '../../../../data/bo2/test/mock-weapon';

const mockRequest = (): HttpRequest => {
	return {
		query: {
			name: '',
			type: ''
		}
	};
};

interface SutTypes {
  getBo2WeaponsStub: GetBo2WeaponsContract
  sut: GetBo2WeaponsController
}

const makeSut = (): SutTypes => {
	const getBo2WeaponsStub = mockGetBo2Weapons();
	const sut = new GetBo2WeaponsController(getBo2WeaponsStub);
	return {
		getBo2WeaponsStub,
		sut
	};
};

describe('GetBo2Weapons Controller', () => {
	describe('GetBo2Weapons dependency', () => {
		test('Deve chamar GetBo2Weapons com valores corretos', async () => {
			const { sut, getBo2WeaponsStub } = makeSut();
			const getSpy = jest.spyOn(getBo2WeaponsStub, 'get');
			await sut.execute(mockRequest());
			expect(getSpy).toHaveBeenCalledWith({
				name: mockRequest().query.name
			});
		});
		test('Deve retornar 500 se GetBo2Weapons lançar uma exceção', async () => {
			const { sut, getBo2WeaponsStub } = makeSut();
			jest.spyOn(getBo2WeaponsStub, 'get').mockImplementationOnce(throwError);
			const httpResponse = await sut.execute(mockRequest());
			expect(httpResponse).toEqual(serverError(new Error()));
		});
	});
	test('Retorne status 200 se o dado provido for válido', async () => {
		const { sut } = makeSut();
		const httpResponse = await sut.execute(mockRequest());
		expect(httpResponse).toEqual(ok([mockBo2WeaponModel()]));
	});
});
