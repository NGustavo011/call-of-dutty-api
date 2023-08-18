import { Controller } from '../../../../presentation/contracts/controller';
import { GetBo2WeaponsController } from '../../../../presentation/controllers/bo2/get-weapons/get-weapons-controller';
import { makeGetBo2Weapons } from '../../usecases/bo2/get-weapons-factory';

export const makeGetBo2WeaponsController = (): Controller => {
	const controller = new GetBo2WeaponsController(makeGetBo2Weapons());
	return controller;
};
