import { Bo2WeaponModel } from '../../../domain/models/bo2/weapon';
import { GetBo2WeaponsParams } from '../../../domain/usecases-contracts/bo2/get-weapons';


export interface GetBo2WeaponsRepository{
    get: (getBo2WeaponsParams: GetBo2WeaponsParams) => Promise<Bo2WeaponModel[] | null>
}