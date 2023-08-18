import { GetBo2Perks } from '../../../../data/bo2/usecases/get-perks/get-perks';
import { GetBo2PerksContract } from '../../../../domain/usecases-contracts/bo2/get-perks';
import { Bo2PerkPrismaRepository } from '../../../../infra/db/bo2/perk/perk-prisma-repository';

export const makeGetBo2Perks = (): GetBo2PerksContract => {
	const getBo2PerksRepository = new Bo2PerkPrismaRepository;
	return new GetBo2Perks(getBo2PerksRepository);
};
