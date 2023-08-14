import { Bo2PerkModel } from '../../models/bo2/perk';

export interface GetBo2PerksContract {
  get: () => Promise<Bo2PerkModel[]>
}
