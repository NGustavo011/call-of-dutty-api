import { Bo2GrenadeModel } from '../../../domain/models/bo2/grenade';
import { GetBo2GrenadesParams } from '../../../domain/usecases-contracts/bo2/get-grenades';
import { GetBo2GrenadesRepository } from '../repositories-contracts/get-grenades-repository';

export const mockGetBo2GrenadesParams = (): GetBo2GrenadesParams => {
	return (
		{
			name: 'any_name',
			type: 'any_type'
		}
	);
};

export const mockBo2GrenadeModel = (): Bo2GrenadeModel =>{
	return (
		{
			name: 'any_name',
			type: 'any_type'
		}
	);
};

export const mockGetBo2GrenadesRepository = (): GetBo2GrenadesRepository => {
	class GetBo2GrenadesRepositoryStub implements GetBo2GrenadesRepository {
		async get(): Promise<Bo2GrenadeModel[] | null>{
			return await Promise.resolve([mockBo2GrenadeModel()]);
		}
	}
	return new GetBo2GrenadesRepositoryStub();
};