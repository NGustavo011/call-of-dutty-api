import { Controller } from '../../../../presentation/contracts/controller';
import { GetBo2MapsController } from '../../../../presentation/controllers/bo2/get-maps/get-maps-controller';
import { makeGetBo2Maps } from '../../usecases/bo2/get-maps-factory';

export const makeGetBo2MapsController = (): Controller => {
	const controller = new GetBo2MapsController(makeGetBo2Maps());
	return controller;
};
