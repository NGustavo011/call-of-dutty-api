import { Bo2PerkModel } from '../../../../domain/models/bo2/perk';
import { GetBo2PerksContract, GetBo2PerksParams } from '../../../../domain/usecases-contracts/bo2/get-perks';
import { GetBo2PerksRepository } from '../../repositories-contracts/get-perks-repository';


export class GetBo2Perks implements GetBo2PerksContract {
	constructor(private readonly getBo2PerksRepository: GetBo2PerksRepository){
	}

	async get (getBo2PerksParams: GetBo2PerksParams): Promise<Bo2PerkModel[] | null>{
		const perks = await this.getBo2PerksRepository.get(getBo2PerksParams);
		return perks;
	}
}