import { bo2MapPath } from './bo2/maps/bo2-map-path'
import { bo2PerkPath } from './bo2/perks/bo2-perk-path'
import { bo2WeaponPath } from './bo2/weapons/bo2-weapon-path'

export const swaggerPaths = {
  '/bo2/map': bo2MapPath,
  '/bo2/perk': bo2PerkPath,
  '/bo2/weapon': bo2WeaponPath,
}
