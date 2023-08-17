

import { GetBo2WildcardsRepository } from '../../../../data/bo2/repositories-contracts/get-wildcards-repository';
import { Bo2WildcardModel } from '../../../../domain/models/bo2/wildcard';
import { GetBo2WildcardsParams } from '../../../../domain/usecases-contracts/bo2/get-wildcards';
import { prisma } from '../../../../main/config/prisma';

export class Bo2WildcardPrismaRepository implements GetBo2WildcardsRepository {
	async get(getBo2WildcardsParams: GetBo2WildcardsParams): Promise<Bo2WildcardModel[] | null>{
		const wildcards = await prisma.bo2Wildcard.findMany({
			where: {
				name: getBo2WildcardsParams.name
			}
		});
		return wildcards;
	}
}