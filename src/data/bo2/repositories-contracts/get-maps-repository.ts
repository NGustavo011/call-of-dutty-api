import { Bo2MapModel } from '../../../domain/models/bo2/map';
import { GetBo2MapsParams } from '../../../domain/usecases-contracts/bo2/get-maps';

export interface GetBo2MapsRepository{
    get: (getBo2MapsParams: GetBo2MapsParams) => Promise<Bo2MapModel[] | null>
}