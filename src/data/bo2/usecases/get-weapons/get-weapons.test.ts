import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2WeaponsRepository } from '../../repositories-contracts/get-weapons-repository';
import { mockBo2WeaponModel, mockGetBo2WeaponsParams, mockGetBo2WeaponsRepository } from '../../test/mock-weapon';
import { GetBo2Weapons } from './get-weapons';


interface SutTypes {
    getWeaponsRepositoryStub: GetBo2WeaponsRepository
    sut: GetBo2Weapons
}

const makeSut = (): SutTypes => {
	const getWeaponsRepositoryStub = mockGetBo2WeaponsRepository();
	const sut = new GetBo2Weapons(getWeaponsRepositoryStub);
	return {
		getWeaponsRepositoryStub,
		sut
	};
};

describe('GetBo2Weapons usecase', () => {
	describe('GetBo2WeaponsRepository dependency', () => {
		test('Deve chamar GetBo2WeaponsRepository com os valores corretos', async () => {
			const { sut, getWeaponsRepositoryStub } = makeSut();
			const getSpy = jest.spyOn(getWeaponsRepositoryStub, 'get');
			await sut.get(mockGetBo2WeaponsParams());
			expect(getSpy).toHaveBeenCalledWith(mockGetBo2WeaponsParams());
		});
		test('Deve repassar a exceção se o GetBo2WeaponsRepository lançar um erro', async () => {
			const { sut, getWeaponsRepositoryStub } = makeSut();
			jest.spyOn(getWeaponsRepositoryStub, 'get').mockImplementationOnce(throwError);
			const promise = sut.get(mockGetBo2WeaponsParams());
			await expect(promise).rejects.toThrow();
		});
		test('Deve retornar null se GetBo2WeaponsRepository retornar null', async () => {
			const { sut, getWeaponsRepositoryStub } = makeSut();
			jest.spyOn(getWeaponsRepositoryStub, 'get').mockReturnValueOnce(Promise.resolve(null));
			const weapons = await sut.get(mockGetBo2WeaponsParams());
			expect(weapons).toBeNull();
		});
	});
	test('Deve retornar Bo2WeaponModel[] com sucesso', async () => {
		const { sut } = makeSut();
		const weapons = await sut.get(mockGetBo2WeaponsParams());
		expect(weapons).toEqual([mockBo2WeaponModel()]);
	});
});
