import { Bo2WildcardModel } from '../../models/bo2/wildcard';

export interface GetBo2WildcardsParams {
  name?: string
}

export interface GetBo2WildcardsContract {
  get: (getBo2WildcardsParams: GetBo2WildcardsParams) => Promise<Bo2WildcardModel[] | null>
}
