import { GetBo2Grenades } from '../../../../data/bo2/usecases/get-grenades/get-grenades';
import { GetBo2GrenadesContract } from '../../../../domain/usecases-contracts/bo2/get-grenades';
import { Bo2GrenadePrismaRepository } from '../../../../infra/db/bo2/grenade/grenade-prisma-repository';

export const makeGetBo2Grenades = (): GetBo2GrenadesContract => {
	const getBo2GrenadesRepository = new Bo2GrenadePrismaRepository;
	return new GetBo2Grenades(getBo2GrenadesRepository);
};
