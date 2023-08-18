import { GetBo2Weapons } from '../../../../data/bo2/usecases/get-weapons/get-weapons';
import { GetBo2WeaponsContract } from '../../../../domain/usecases-contracts/bo2/get-weapons';
import { Bo2WeaponPrismaRepository } from '../../../../infra/db/bo2/weapon/weapon-prisma-repository';

export const makeGetBo2Weapons = (): GetBo2WeaponsContract => {
	const getBo2WeaponsRepository = new Bo2WeaponPrismaRepository;
	return new GetBo2Weapons(getBo2WeaponsRepository);
};
