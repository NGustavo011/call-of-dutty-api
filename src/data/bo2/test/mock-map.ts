import { Bo2MapModel } from '../../../domain/models/bo2/map';
import { GetBo2MapsParams } from '../../../domain/usecases-contracts/bo2/get-maps';
import { GetBo2MapsRepository } from '../repositories-contracts/get-maps-repository';

export const mockGetBo2MapsParams = (): GetBo2MapsParams => {
	return (
		{
			name: 'any_name',
			bundle: 'default_bundle'
		}
	);
};

export const mockBo2MapModel = (): Bo2MapModel =>{
	return (
		{
			name: 'any_name',
			bundle: 'default_bundle',
			date: 'any_date',
			hudIcon: 'any_hud_icon_url',
			icon: 'any_icon_url',
			location: 'any_location',
			modes: 'any_modes',
			terrain: 'any_terrain',
			typeOfCombat: 'any_type_of_combat'
		}
	);
};

export const mockGetBo2MapsRepository = (): GetBo2MapsRepository => {
	class GetBo2MapsRepositoryStub implements GetBo2MapsRepository {
		async get(): Promise<Bo2MapModel[] | null>{
			return await Promise.resolve([mockBo2MapModel()]);
		}
	}
	return new GetBo2MapsRepositoryStub();
};