import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2MapsRepository } from '../../repositories-contracts/get-maps-repository';
import { mockBo2MapModel, mockGetBo2MapsParams, mockGetBo2MapsRepository } from '../../test/mock-map';
import { GetBo2Maps } from './get-maps';

interface SutTypes {
    getMapsRepositoryStub: GetBo2MapsRepository
    sut: GetBo2Maps
}

const makeSut = (): SutTypes => {
	const getMapsRepositoryStub = mockGetBo2MapsRepository();
	const sut = new GetBo2Maps(getMapsRepositoryStub);
	return {
		getMapsRepositoryStub,
		sut
	};
};

describe('GetBo2Maps usecase', () => {
	describe('GetBo2MapsRepository dependency', () => {
		test('Deve chamar GetBo2MapsRepository com os valores corretos', async () => {
			const { sut, getMapsRepositoryStub } = makeSut();
			const getSpy = jest.spyOn(getMapsRepositoryStub, 'get');
			await sut.get(mockGetBo2MapsParams());
			expect(getSpy).toHaveBeenCalledWith(mockGetBo2MapsParams());
		});
		test('Deve repassar a exceção se o GetBo2MapsRepository lançar um erro', async () => {
			const { sut, getMapsRepositoryStub } = makeSut();
			jest.spyOn(getMapsRepositoryStub, 'get').mockImplementationOnce(throwError);
			const promise = sut.get(mockGetBo2MapsParams());
			await expect(promise).rejects.toThrow();
		});
		test('Deve retornar null se GetBo2MapsRepository retornar null', async () => {
			const { sut, getMapsRepositoryStub } = makeSut();
			jest.spyOn(getMapsRepositoryStub, 'get').mockReturnValueOnce(Promise.resolve(null));
			const maps = await sut.get(mockGetBo2MapsParams());
			expect(maps).toBeNull();
		});
	});
	test('Deve retornar Bo2MapModel[] com sucesso', async () => {
		const { sut } = makeSut();
		const maps = await sut.get(mockGetBo2MapsParams());
		expect(maps).toEqual([mockBo2MapModel()]);
	});
});
