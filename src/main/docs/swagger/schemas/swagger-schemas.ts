import { bo2MapSchema } from './bo2/bo2-map-schema'
import { bo2WeaponSchema } from './bo2/bo2-weapon-schema'
import { errorSchema } from './shared/error-schema'


export const swaggerSchemas = {
  bo2Weapon: bo2WeaponSchema,
  bo2Map: bo2MapSchema,
  error: errorSchema,
}
