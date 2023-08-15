import { Bo2WeaponModel } from '../../models/bo2/weapon';

export interface GetBo2WeaponsParams {
  name?: string
  weaponClass?: string
}

export interface GetBo2WeaponsContract {
  get: (getBo2WeaponsParams: GetBo2WeaponsParams) => Promise<Bo2WeaponModel[] | null>
}
