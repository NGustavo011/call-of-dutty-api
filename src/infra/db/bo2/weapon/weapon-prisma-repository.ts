import { GetBo2WeaponsRepository } from '../../../../data/bo2/repositories-contracts/get-weapons-repository';
import { Bo2WeaponModel } from '../../../../domain/models/bo2/weapon';
import { GetBo2WeaponsParams } from '../../../../domain/usecases-contracts/bo2/get-weapons';
import { prisma } from '../../../../main/config/prisma';

export class Bo2WeaponPrismaRepository implements GetBo2WeaponsRepository {
	async get(getBo2WeaponsParams: GetBo2WeaponsParams): Promise<Bo2WeaponModel[] | null>{
		const weapons = await prisma.bo2Weapon.findMany({
			where: {
				AND: [
					{
						name: getBo2WeaponsParams.name
					},
					{
						weaponClass: getBo2WeaponsParams.weaponClass
					}
				]
			}
		});
		return weapons;
	}
}