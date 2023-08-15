import { Bo2WeaponModel } from '../../../domain/models/bo2/weapon';
import { GetBo2WeaponsParams } from '../../../domain/usecases-contracts/bo2/get-weapons';
import { GetBo2WeaponsRepository } from '../repositories-contracts/get-weapons-repository';

export const mockGetBo2WeaponsParams = (): GetBo2WeaponsParams => {
	return (
		{
			name: 'any_name',
			weaponClass: 'any_weapon_class'
		}
	);
};

export const mockBo2WeaponModel = (): Bo2WeaponModel =>{
	return (
		{
			name: 'any_name',
			hudIcon: 'any_hud_icon_url',
			icon: 'any_icon_url',
			unlocked: 'lvl_x',
			weaponClass: 'any_weapon_class'
		}
	);
};

export const mockGetBo2WeaponsRepository = (): GetBo2WeaponsRepository => {
	class GetBo2WeaponsRepositoryStub implements GetBo2WeaponsRepository {
		async get(): Promise<Bo2WeaponModel[] | null>{
			return await Promise.resolve([mockBo2WeaponModel()]);
		}
	}
	return new GetBo2WeaponsRepositoryStub();
};