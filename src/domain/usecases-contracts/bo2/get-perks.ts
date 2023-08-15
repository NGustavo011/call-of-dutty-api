import { Bo2PerkModel } from '../../models/bo2/perk';

export interface GetBo2PerksParams {
  name?: string
  category?: string
}

export interface GetBo2PerksContract {
  get: (getBo2PerksParams: GetBo2PerksParams) => Promise<Bo2PerkModel[] | null>
}
