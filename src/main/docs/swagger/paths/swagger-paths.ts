import { bo2AttachmentPath } from './bo2/attachments/bo2-attachment-path'
import { bo2MapPath } from './bo2/maps/bo2-map-path'
import { bo2PerkPath } from './bo2/perks/bo2-perk-path'
import { bo2ScorestreakPath } from './bo2/scorestreaks/bo2-scorestreak-path'
import { bo2WeaponPath } from './bo2/weapons/bo2-weapon-path'
import { bo2WildcardPath } from './bo2/wildcards/bo2-wildcard-path'

export const swaggerPaths = {
  '/bo2/attachment': bo2AttachmentPath,
  '/bo2/map': bo2MapPath,
  '/bo2/perk': bo2PerkPath,
  '/bo2/scorestreak': bo2ScorestreakPath,
  '/bo2/weapon': bo2WeaponPath,
  '/bo2/wildcard': bo2WildcardPath,
}
