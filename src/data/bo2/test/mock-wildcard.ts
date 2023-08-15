import { Bo2WildcardModel } from '../../../domain/models/bo2/wildcard';
import { GetBo2WildcardsParams } from '../../../domain/usecases-contracts/bo2/get-wildcards';
import { GetBo2WildcardsRepository } from '../repositories-contracts/get-wildcards-repository';

export const mockGetBo2WildcardsParams = (): GetBo2WildcardsParams => {
	return (
		{
			name: 'any_name'
		}
	);
};

export const mockBo2WildcardModel = (): Bo2WildcardModel =>{
	return (
		{
			name: 'any_name',
			description: 'any_description',
			icon: 'any_icon_url',
			unlockedAt: 'lvl_x'
		}
	);
};

export const mockGetBo2WildcardsRepository = (): GetBo2WildcardsRepository => {
	class GetBo2WildcardsRepositoryStub implements GetBo2WildcardsRepository {
		async get(): Promise<Bo2WildcardModel[] | null>{
			return await Promise.resolve([mockBo2WildcardModel()]);
		}
	}
	return new GetBo2WildcardsRepositoryStub();
};