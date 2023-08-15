import { Bo2GrenadeModel } from '../../models/bo2/grenade';

export interface GetBo2GrenadesParams {
  name?: string
  type?: string
}

export interface GetBo2GrenadesContract {
  get: (getBo2GrenadesParams: GetBo2GrenadesParams) => Promise<Bo2GrenadeModel[] | null>
}
