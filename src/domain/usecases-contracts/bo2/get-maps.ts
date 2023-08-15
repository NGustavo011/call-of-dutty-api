import { Bo2MapModel } from '../../models/bo2/map';

export interface GetBo2MapsParams {
  name?: string
  bundle?: string
}

export interface GetBo2MapsContract {
  get: (getBo2MapsParams: GetBo2MapsParams) => Promise<Bo2MapModel[] | null>
}
