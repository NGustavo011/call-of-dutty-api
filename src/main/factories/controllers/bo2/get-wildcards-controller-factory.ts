import { Controller } from '../../../../presentation/contracts/controller';
import { GetBo2WildcardsController } from '../../../../presentation/controllers/bo2/get-wildcards/get-wildcards-controller';
import { makeGetBo2Wildcards } from '../../usecases/bo2/get-wildcards-factory';

export const makeGetBo2WildcardsController = (): Controller => {
	const controller = new GetBo2WildcardsController(makeGetBo2Wildcards());
	return controller;
};
