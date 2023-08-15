import { Bo2WildcardModel } from '../../../../domain/models/bo2/wildcard';
import { GetBo2WildcardsContract, GetBo2WildcardsParams } from '../../../../domain/usecases-contracts/bo2/get-wildcards';
import { GetBo2WildcardsRepository } from '../../repositories-contracts/get-wildcards-repository';


export class GetBo2Wildcards implements GetBo2WildcardsContract {
	constructor(private readonly getBo2WildcardsRepository: GetBo2WildcardsRepository){
	}

	async get (getBo2WildcardsParams: GetBo2WildcardsParams): Promise<Bo2WildcardModel[] | null>{
		const wildcards = await this.getBo2WildcardsRepository.get(getBo2WildcardsParams);
		return wildcards;
	}
}