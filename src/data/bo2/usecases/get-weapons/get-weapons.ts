import { Bo2WeaponModel } from '../../../../domain/models/bo2/weapon';
import { GetBo2WeaponsContract, GetBo2WeaponsParams } from '../../../../domain/usecases-contracts/bo2/get-weapons';
import { GetBo2WeaponsRepository } from '../../repositories-contracts/get-weapons-repository';


export class GetBo2Weapons implements GetBo2WeaponsContract {
	constructor(private readonly getBo2WeaponsRepository: GetBo2WeaponsRepository){
	}

	async get (getBo2WeaponsParams: GetBo2WeaponsParams): Promise<Bo2WeaponModel[] | null>{
		const weapons = await this.getBo2WeaponsRepository.get(getBo2WeaponsParams);
		return weapons;
	}
}