import { Bo2ScorestreakModel } from '../../../domain/models/bo2/scorestreak';
import { GetBo2ScorestreaksParams } from '../../../domain/usecases-contracts/bo2/get-scorestreaks';

export interface GetBo2ScorestreaksRepository{
    get: (getBo2ScorestreaksParams: GetBo2ScorestreaksParams) => Promise<Bo2ScorestreakModel[] | null>
}