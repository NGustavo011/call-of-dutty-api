import { bo2AttachmentSchema } from './bo2/bo2-attachment-schema';
import { bo2GrenadeSchema } from './bo2/bo2-grenade-schema';
import { bo2MapSchema } from './bo2/bo2-map-schema';
import { bo2PerkSchema } from './bo2/bo2-perk-schema';
import { bo2ScorestreakSchema } from './bo2/bo2-scorestreak-schema';
import { bo2WeaponSchema } from './bo2/bo2-weapon-schema';
import { bo2WildcardSchema } from './bo2/bo2-wildcard-schema';
import { errorSchema } from './shared/error-schema';


export const swaggerSchemas = {
	bo2Attachment: bo2AttachmentSchema,
	bo2Grenade: bo2GrenadeSchema,
	bo2Map: bo2MapSchema,
	bo2Perk: bo2PerkSchema,
	bo2Scorestreak: bo2ScorestreakSchema,
	bo2Weapon: bo2WeaponSchema,
	bo2Wildcard: bo2WildcardSchema,
	error: errorSchema,
};
