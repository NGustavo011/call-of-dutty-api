import { Bo2WildcardModel } from '../../../domain/models/bo2/wildcard';
import { GetBo2WildcardsParams } from '../../../domain/usecases-contracts/bo2/get-wildcards';


export interface GetBo2WildcardsRepository{
    get: (getBo2WildcardsParams: GetBo2WildcardsParams) => Promise<Bo2WildcardModel[] | null>
}