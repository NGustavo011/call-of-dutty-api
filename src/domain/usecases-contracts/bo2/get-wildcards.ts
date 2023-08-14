import { Bo2WildcardModel } from '../../models/bo2/wildcard';

export interface GetBo2WildcardsContract {
  get: () => Promise<Bo2WildcardModel[]>
}
