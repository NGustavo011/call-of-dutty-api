import { Bo2ScorestreakModel } from '../../models/bo2/scorestreak';

export interface GetBo2ScorestreaksParams {
  name?: string
}

export interface GetBo2ScorestreaksContract {
  get: (getBo2ScorestreaksParams: GetBo2ScorestreaksParams) => Promise<Bo2ScorestreakModel[] | null>
}
