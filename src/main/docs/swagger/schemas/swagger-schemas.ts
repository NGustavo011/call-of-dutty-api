import { bo2MapSchema } from './bo2/bo2-map-schema'
import { bo2PerkSchema } from './bo2/bo2-perk-schema'
import { bo2WeaponSchema } from './bo2/bo2-weapon-schema'
import { bo2WildcardSchema } from './bo2/bo2-wildcard-schema'
import { errorSchema } from './shared/error-schema'


export const swaggerSchemas = {
  bo2Map: bo2MapSchema,
  bo2Perk: bo2PerkSchema,
  bo2Weapon: bo2WeaponSchema,
  bo2Wildcard: bo2WildcardSchema,
  error: errorSchema,
}
