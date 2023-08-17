
import { GetBo2ScorestreaksRepository } from '../../../../data/bo2/repositories-contracts/get-scorestreaks-repository';
import { Bo2ScorestreakModel } from '../../../../domain/models/bo2/scorestreak';
import { GetBo2ScorestreaksParams } from '../../../../domain/usecases-contracts/bo2/get-scorestreaks';
import { prisma } from '../../../../main/config/prisma';

export class Bo2ScorestreakPrismaRepository implements GetBo2ScorestreaksRepository {
	async get(getBo2ScorestreaksParams: GetBo2ScorestreaksParams): Promise<Bo2ScorestreakModel[] | null>{
		const scorestreaks = await prisma.bo2Scorestreak.findMany({
			where: {
				name: getBo2ScorestreaksParams.name
			}
		});
		return scorestreaks;
	}
}