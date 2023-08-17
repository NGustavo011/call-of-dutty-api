import { GetBo2MapsRepository } from '../../../../data/bo2/repositories-contracts/get-maps-repository';
import { Bo2MapModel } from '../../../../domain/models/bo2/map';
import { GetBo2MapsParams } from '../../../../domain/usecases-contracts/bo2/get-maps';
import { prisma } from '../../../../main/config/prisma';

export class Bo2MapPrismaRepository implements GetBo2MapsRepository {
	async get(getBo2MapsParams: GetBo2MapsParams): Promise<Bo2MapModel[] | null>{
		const maps = await prisma.bo2Map.findMany({
			where: {
				AND: [
					{
						name: getBo2MapsParams.name
					},
					{
						bundle: getBo2MapsParams.bundle
					}
				]
			}
		});
		return maps;
	}
}