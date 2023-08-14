import { Bo2ScorestreakModel } from '../../models/bo2/scorestreak';

export interface GetBo2ScorestreaksContract {
  get: () => Promise<Bo2ScorestreakModel[]>
}
