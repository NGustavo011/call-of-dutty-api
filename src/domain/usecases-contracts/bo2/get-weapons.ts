import { Bo2WeaponModel } from '../../models/bo2/weapon';

export interface GetBo2WeaponsContract {
  get: () => Promise<Bo2WeaponModel[]>
}
