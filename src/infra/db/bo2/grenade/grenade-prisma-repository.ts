
import { GetBo2GrenadesRepository } from '../../../../data/bo2/repositories-contracts/get-grenades-repository';
import { Bo2GrenadeModel } from '../../../../domain/models/bo2/grenade';
import { GetBo2GrenadesParams } from '../../../../domain/usecases-contracts/bo2/get-grenades';
import { prisma } from '../../../../main/config/prisma';

export class Bo2GrenadePrismaRepository implements GetBo2GrenadesRepository {
	async get(getBo2GrenadesParams: GetBo2GrenadesParams): Promise<Bo2GrenadeModel[] | null>{
		const grenades = await prisma.bo2Grenade.findMany({
			where: {
				AND: [
					{
						name: getBo2GrenadesParams.name
					},
					{
						type: getBo2GrenadesParams.type
					}
				]
			}
		});
		return grenades;
	}
}