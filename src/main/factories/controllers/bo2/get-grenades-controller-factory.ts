import { Controller } from '../../../../presentation/contracts/controller';
import { GetBo2GrenadesController } from '../../../../presentation/controllers/bo2/get-grenades/get-grenades-controller';
import { makeGetBo2Grenades } from '../../usecases/bo2/get-grenades-factory';

export const makeGetBo2GrenadesController = (): Controller => {
	const controller = new GetBo2GrenadesController(makeGetBo2Grenades());
	return controller;
};
