import { Bo2ScorestreakModel } from '../../../domain/models/bo2/scorestreak';
import { GetBo2ScorestreaksParams } from '../../../domain/usecases-contracts/bo2/get-scorestreaks';
import { GetBo2ScorestreaksRepository } from '../repositories-contracts/get-scorestreaks-repository';

export const mockGetBo2ScorestreaksParams = (): GetBo2ScorestreaksParams => {
	return (
		{
			name: 'any_name'
		}
	);
};

export const mockBo2ScorestreakModel = (): Bo2ScorestreakModel =>{
	return (
		{
			name: 'any_name',
			icon: 'any_icon_url',
			description: 'any_description',
			score: 'any_score',
			unlockedAt: 'lvl_x'
		}
	);
};

export const mockGetBo2ScorestreaksRepository = (): GetBo2ScorestreaksRepository => {
	class GetBo2ScorestreaksRepositoryStub implements GetBo2ScorestreaksRepository {
		async get(): Promise<Bo2ScorestreakModel[] | null>{
			return await Promise.resolve([mockBo2ScorestreakModel()]);
		}
	}
	return new GetBo2ScorestreaksRepositoryStub();
};