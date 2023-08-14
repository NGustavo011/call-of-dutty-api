import { Bo2MapModel } from '../../models/bo2/map';

export interface GetBo2MapsContract {
  get: () => Promise<Bo2MapModel[]>
}
