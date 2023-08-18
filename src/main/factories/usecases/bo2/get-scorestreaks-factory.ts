import { GetBo2Scorestreaks } from '../../../../data/bo2/usecases/get-scorestreaks/get-scorestreaks';
import { GetBo2ScorestreaksContract } from '../../../../domain/usecases-contracts/bo2/get-scorestreaks';
import { Bo2ScorestreakPrismaRepository } from '../../../../infra/db/bo2/scorestreak/scorestreak-prisma-repository';

export const makeGetBo2Scorestreaks = (): GetBo2ScorestreaksContract => {
	const getBo2ScorestreaksRepository = new Bo2ScorestreakPrismaRepository;
	return new GetBo2Scorestreaks(getBo2ScorestreaksRepository);
};
