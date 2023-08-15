import { Bo2ScorestreakModel } from '../../../../domain/models/bo2/scorestreak';
import { GetBo2ScorestreaksContract, GetBo2ScorestreaksParams } from '../../../../domain/usecases-contracts/bo2/get-scorestreaks';
import { GetBo2ScorestreaksRepository } from '../../repositories-contracts/get-scorestreaks-repository';


export class GetBo2Scorestreaks implements GetBo2ScorestreaksContract {
	constructor(private readonly getBo2ScorestreaksRepository: GetBo2ScorestreaksRepository){
	}

	async get (getBo2ScorestreaksParams: GetBo2ScorestreaksParams): Promise<Bo2ScorestreakModel[] | null>{
		const Scorestreaks = await this.getBo2ScorestreaksRepository.get(getBo2ScorestreaksParams);
		return Scorestreaks;
	}
}