/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { adaptRoute } from '../../adapters/express-route-adapter';
import { makeGetBo2AttachmentsController } from '../../factories/controllers/bo2/get-attachments-controller-factory';
import { makeGetBo2GrenadesController } from '../../factories/controllers/bo2/get-grenades-controller-factory';
import { makeGetBo2MapsController } from '../../factories/controllers/bo2/get-maps-controller-factory';
import { makeGetBo2PerksController } from '../../factories/controllers/bo2/get-perks-controller-factory';
import { makeGetBo2ScorestreaksController } from '../../factories/controllers/bo2/get-scorestreaks-controller-factory';
import { makeGetBo2WeaponsController } from '../../factories/controllers/bo2/get-weapons-controller-factory';
import { makeGetBo2WildcardsController } from '../../factories/controllers/bo2/get-wildcards-controller-factory';

export const bo2Routes = Router();

bo2Routes.get('/bo2/attachment', adaptRoute(makeGetBo2AttachmentsController()));
bo2Routes.get('/bo2/grenade', adaptRoute(makeGetBo2GrenadesController()));
bo2Routes.get('/bo2/map', adaptRoute(makeGetBo2MapsController()));
bo2Routes.get('/bo2/perk', adaptRoute(makeGetBo2PerksController()));
bo2Routes.get('/bo2/scorestreak', adaptRoute(makeGetBo2ScorestreaksController()));
bo2Routes.get('/bo2/weapon', adaptRoute(makeGetBo2WeaponsController()));
bo2Routes.get('/bo2/wildcard', adaptRoute(makeGetBo2WildcardsController()));