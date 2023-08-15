import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2PerksRepository } from '../../repositories-contracts/get-perks-repository';
import { mockBo2PerkModel, mockGetBo2PerksParams, mockGetBo2PerksRepository } from '../../test/mock-perk';
import { GetBo2Perks } from './get-perks';

interface SutTypes {
    getPerksRepositoryStub: GetBo2PerksRepository
    sut: GetBo2Perks
}

const makeSut = (): SutTypes => {
	const getPerksRepositoryStub = mockGetBo2PerksRepository();
	const sut = new GetBo2Perks(getPerksRepositoryStub);
	return {
		getPerksRepositoryStub,
		sut
	};
};

describe('GetBo2Perks usecase', () => {
	describe('GetBo2PerksRepository dependency', () => {
		test('Deve chamar GetBo2PerksRepository com os valores corretos', async () => {
			const { sut, getPerksRepositoryStub } = makeSut();
			const getSpy = jest.spyOn(getPerksRepositoryStub, 'get');
			await sut.get(mockGetBo2PerksParams());
			expect(getSpy).toHaveBeenCalledWith(mockGetBo2PerksParams());
		});
		test('Deve repassar a exceção se o GetBo2PerksRepository lançar um erro', async () => {
			const { sut, getPerksRepositoryStub } = makeSut();
			jest.spyOn(getPerksRepositoryStub, 'get').mockImplementationOnce(throwError);
			const promise = sut.get(mockGetBo2PerksParams());
			await expect(promise).rejects.toThrow();
		});
		test('Deve retornar null se GetBo2PerksRepository retornar null', async () => {
			const { sut, getPerksRepositoryStub } = makeSut();
			jest.spyOn(getPerksRepositoryStub, 'get').mockReturnValueOnce(Promise.resolve(null));
			const perks = await sut.get(mockGetBo2PerksParams());
			expect(perks).toBeNull();
		});
	});
	test('Deve retornar Bo2PerkModel[] com sucesso', async () => {
		const { sut } = makeSut();
		const perks = await sut.get(mockGetBo2PerksParams());
		expect(perks).toEqual([mockBo2PerkModel()]);
	});
});
