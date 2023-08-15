import { Bo2GrenadeModel } from '../../../../domain/models/bo2/grenade';
import { GetBo2GrenadesContract, GetBo2GrenadesParams } from '../../../../domain/usecases-contracts/bo2/get-grenades';
import { GetBo2GrenadesRepository } from '../../repositories-contracts/get-grenades-repository';

export class GetBo2Grenades implements GetBo2GrenadesContract {
	constructor(private readonly getBo2GrenadesRepository: GetBo2GrenadesRepository){
	}

	async get (getBo2GrenadesParams: GetBo2GrenadesParams): Promise<Bo2GrenadeModel[] | null>{
		const Grenades = await this.getBo2GrenadesRepository.get(getBo2GrenadesParams);
		return Grenades;
	}
}