import { Bo2PerkModel } from '../../../domain/models/bo2/perk';
import { GetBo2PerksParams } from '../../../domain/usecases-contracts/bo2/get-perks';
import { GetBo2PerksRepository } from '../repositories-contracts/get-perks-repository';

export const mockGetBo2PerksParams = (): GetBo2PerksParams => {
	return (
		{
			name: 'any_name',
			category: 'any_category'
		}
	);
};

export const mockBo2PerkModel = (): Bo2PerkModel =>{
	return (
		{
			name: 'any_name',
			category: 'any_category',
			description: 'any_description',
			icon: 'any_icon_url',
			unlockedAt: 'lvl_x'
		}
	);
};

export const mockGetBo2PerksRepository = (): GetBo2PerksRepository => {
	class GetBo2PerksRepositoryStub implements GetBo2PerksRepository {
		async get(): Promise<Bo2PerkModel[] | null>{
			return await Promise.resolve([mockBo2PerkModel()]);
		}
	}
	return new GetBo2PerksRepositoryStub();
};