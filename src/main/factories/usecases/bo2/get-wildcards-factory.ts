import { GetBo2Wildcards } from '../../../../data/bo2/usecases/get-wildcards/get-wildcards';
import { GetBo2WildcardsContract } from '../../../../domain/usecases-contracts/bo2/get-wildcards';
import { Bo2WildcardPrismaRepository } from '../../../../infra/db/bo2/wildcard/wildcard-prisma-repository';

export const makeGetBo2Wildcards = (): GetBo2WildcardsContract => {
	const getBo2WildcardsRepository = new Bo2WildcardPrismaRepository;
	return new GetBo2Wildcards(getBo2WildcardsRepository);
};
