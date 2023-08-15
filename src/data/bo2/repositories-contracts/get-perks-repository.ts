import { Bo2PerkModel } from '../../../domain/models/bo2/perk';
import { GetBo2PerksParams } from '../../../domain/usecases-contracts/bo2/get-perks';


export interface GetBo2PerksRepository{
    get: (getBo2PerksParams: GetBo2PerksParams) => Promise<Bo2PerkModel[] | null>
}