import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2GrenadesRepository } from '../../repositories-contracts/get-grenades-repository';
import { mockBo2GrenadeModel, mockGetBo2GrenadesParams, mockGetBo2GrenadesRepository } from '../../test/mock-grenade';
import { GetBo2Grenades } from './get-grenades';


interface SutTypes {
    getGrenadesRepositoryStub: GetBo2GrenadesRepository
    sut: GetBo2Grenades
}

const makeSut = (): SutTypes => {
	const getGrenadesRepositoryStub = mockGetBo2GrenadesRepository();
	const sut = new GetBo2Grenades(getGrenadesRepositoryStub);
	return {
		getGrenadesRepositoryStub,
		sut
	};
};

describe('GetBo2Grenades usecase', () => {
	describe('GetBo2GrenadesRepository dependency', () => {
		test('Deve chamar GetBo2GrenadesRepository com os valores corretos', async () => {
			const { sut, getGrenadesRepositoryStub } = makeSut();
			const getSpy = jest.spyOn(getGrenadesRepositoryStub, 'get');
			await sut.get(mockGetBo2GrenadesParams());
			expect(getSpy).toHaveBeenCalledWith(mockGetBo2GrenadesParams());
		});
		test('Deve repassar a exceção se o GetBo2GrenadesRepository lançar um erro', async () => {
			const { sut, getGrenadesRepositoryStub } = makeSut();
			jest.spyOn(getGrenadesRepositoryStub, 'get').mockImplementationOnce(throwError);
			const promise = sut.get(mockGetBo2GrenadesParams());
			await expect(promise).rejects.toThrow();
		});
		test('Deve retornar null se GetBo2GrenadesRepository retornar null', async () => {
			const { sut, getGrenadesRepositoryStub } = makeSut();
			jest.spyOn(getGrenadesRepositoryStub, 'get').mockReturnValueOnce(Promise.resolve(null));
			const grenades = await sut.get(mockGetBo2GrenadesParams());
			expect(grenades).toBeNull();
		});
	});
	test('Deve retornar Bo2GrenadeModel[] com sucesso', async () => {
		const { sut } = makeSut();
		const grenades = await sut.get(mockGetBo2GrenadesParams());
		expect(grenades).toEqual([mockBo2GrenadeModel()]);
	});
});
