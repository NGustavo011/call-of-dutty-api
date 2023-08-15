import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2WildcardsRepository } from '../../repositories-contracts/get-wildcards-repository';
import { mockBo2WildcardModel, mockGetBo2WildcardsParams, mockGetBo2WildcardsRepository } from '../../test/mock-wildcard';
import { GetBo2Wildcards } from './get-wildcards';


interface SutTypes {
    getWildcardsRepositoryStub: GetBo2WildcardsRepository
    sut: GetBo2Wildcards
}

const makeSut = (): SutTypes => {
	const getWildcardsRepositoryStub = mockGetBo2WildcardsRepository();
	const sut = new GetBo2Wildcards(getWildcardsRepositoryStub);
	return {
		getWildcardsRepositoryStub,
		sut
	};
};

describe('GetBo2Wildcards usecase', () => {
	describe('GetBo2WildcardsRepository dependency', () => {
		test('Deve chamar GetBo2WildcardsRepository com os valores corretos', async () => {
			const { sut, getWildcardsRepositoryStub } = makeSut();
			const getSpy = jest.spyOn(getWildcardsRepositoryStub, 'get');
			await sut.get(mockGetBo2WildcardsParams());
			expect(getSpy).toHaveBeenCalledWith(mockGetBo2WildcardsParams());
		});
		test('Deve repassar a exceção se o GetBo2WildcardsRepository lançar um erro', async () => {
			const { sut, getWildcardsRepositoryStub } = makeSut();
			jest.spyOn(getWildcardsRepositoryStub, 'get').mockImplementationOnce(throwError);
			const promise = sut.get(mockGetBo2WildcardsParams());
			await expect(promise).rejects.toThrow();
		});
		test('Deve retornar null se GetBo2WildcardsRepository retornar null', async () => {
			const { sut, getWildcardsRepositoryStub } = makeSut();
			jest.spyOn(getWildcardsRepositoryStub, 'get').mockReturnValueOnce(Promise.resolve(null));
			const wildcards = await sut.get(mockGetBo2WildcardsParams());
			expect(wildcards).toBeNull();
		});
	});
	test('Deve retornar Bo2WildcardModel[] com sucesso', async () => {
		const { sut } = makeSut();
		const wildcards = await sut.get(mockGetBo2WildcardsParams());
		expect(wildcards).toEqual([mockBo2WildcardModel()]);
	});
});
