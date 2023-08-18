import { GetBo2Maps } from '../../../../data/bo2/usecases/get-maps/get-maps';
import { GetBo2MapsContract } from '../../../../domain/usecases-contracts/bo2/get-maps';
import { Bo2MapPrismaRepository } from '../../../../infra/db/bo2/map/map-prisma-repository';

export const makeGetBo2Maps = (): GetBo2MapsContract => {
	const getBo2MapsRepository = new Bo2MapPrismaRepository;
	return new GetBo2Maps(getBo2MapsRepository);
};
