import { Bo2MapModel } from '../../../../domain/models/bo2/map';
import { GetBo2MapsContract, GetBo2MapsParams } from '../../../../domain/usecases-contracts/bo2/get-maps';
import { GetBo2MapsRepository } from '../../repositories-contracts/get-maps-repository';

export class GetBo2Maps implements GetBo2MapsContract {
	constructor(private readonly getBo2MapsRepository: GetBo2MapsRepository){
	}

	async get (getBo2MapsParams: GetBo2MapsParams): Promise<Bo2MapModel[] | null>{
		const maps = await this.getBo2MapsRepository.get(getBo2MapsParams);
		return maps;
	}
}