import { throwError } from '../../../../domain/test/test-helpers';
import { GetBo2ScorestreaksRepository } from '../../repositories-contracts/get-scorestreaks-repository';
import { mockBo2ScorestreakModel, mockGetBo2ScorestreaksParams, mockGetBo2ScorestreaksRepository } from '../../test/mock-scorestreak';
import { GetBo2Scorestreaks } from './get-scorestreaks';

interface SutTypes {
    getScorestreaksRepositoryStub: GetBo2ScorestreaksRepository
    sut: GetBo2Scorestreaks
}

const makeSut = (): SutTypes => {
	const getScorestreaksRepositoryStub = mockGetBo2ScorestreaksRepository();
	const sut = new GetBo2Scorestreaks(getScorestreaksRepositoryStub);
	return {
		getScorestreaksRepositoryStub,
		sut
	};
};

describe('GetBo2Scorestreaks usecase', () => {
	describe('GetBo2ScorestreaksRepository dependency', () => {
		test('Deve chamar GetBo2ScorestreaksRepository com os valores corretos', async () => {
			const { sut, getScorestreaksRepositoryStub } = makeSut();
			const getSpy = jest.spyOn(getScorestreaksRepositoryStub, 'get');
			await sut.get(mockGetBo2ScorestreaksParams());
			expect(getSpy).toHaveBeenCalledWith(mockGetBo2ScorestreaksParams());
		});
		test('Deve repassar a exceção se o GetBo2ScorestreaksRepository lançar um erro', async () => {
			const { sut, getScorestreaksRepositoryStub } = makeSut();
			jest.spyOn(getScorestreaksRepositoryStub, 'get').mockImplementationOnce(throwError);
			const promise = sut.get(mockGetBo2ScorestreaksParams());
			await expect(promise).rejects.toThrow();
		});
		test('Deve retornar null se GetBo2ScorestreaksRepository retornar null', async () => {
			const { sut, getScorestreaksRepositoryStub } = makeSut();
			jest.spyOn(getScorestreaksRepositoryStub, 'get').mockReturnValueOnce(Promise.resolve(null));
			const scorestreaks = await sut.get(mockGetBo2ScorestreaksParams());
			expect(scorestreaks).toBeNull();
		});
	});
	test('Deve retornar Bo2ScorestreakModel[] com sucesso', async () => {
		const { sut } = makeSut();
		const scorestreaks = await sut.get(mockGetBo2ScorestreaksParams());
		expect(scorestreaks).toEqual([mockBo2ScorestreakModel()]);
	});
});
