import { Controller } from '../../../../presentation/contracts/controller';
import { GetBo2PerksController } from '../../../../presentation/controllers/bo2/get-perks/get-perks-controller';
import { makeGetBo2Perks } from '../../usecases/bo2/get-perks-factory';

export const makeGetBo2PerksController = (): Controller => {
	const controller = new GetBo2PerksController(makeGetBo2Perks());
	return controller;
};
