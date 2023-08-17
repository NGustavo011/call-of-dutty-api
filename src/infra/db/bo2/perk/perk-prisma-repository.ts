import { GetBo2PerksRepository } from '../../../../data/bo2/repositories-contracts/get-perks-repository';
import { Bo2PerkModel } from '../../../../domain/models/bo2/perk';
import { GetBo2PerksParams } from '../../../../domain/usecases-contracts/bo2/get-perks';
import { prisma } from '../../../../main/config/prisma';

export class Bo2PerkPrismaRepository implements GetBo2PerksRepository {
	async get(getBo2PerksParams: GetBo2PerksParams): Promise<Bo2PerkModel[] | null>{
		const perks = await prisma.bo2Perk.findMany({
			where: {
				AND: [
					{
						name: getBo2PerksParams.name
					},
					{
						category: getBo2PerksParams.category
					}
				]
			}
		});
		return perks;
	}
}