import { Bo2GrenadeModel } from '../../../domain/models/bo2/grenade';
import { GetBo2GrenadesParams } from '../../../domain/usecases-contracts/bo2/get-grenades';

export interface GetBo2GrenadesRepository{
    get: (getBo2GrenadesParams: GetBo2GrenadesParams) => Promise<Bo2GrenadeModel[] | null>
}