import { Controller } from '../../../../presentation/contracts/controller';
import { GetBo2ScorestreaksController } from '../../../../presentation/controllers/bo2/get-scorestreaks/get-scorestreaks-controller';
import { makeGetBo2Scorestreaks } from '../../usecases/bo2/get-scorestreaks-factory';

export const makeGetBo2ScorestreaksController = (): Controller => {
	const controller = new GetBo2ScorestreaksController(makeGetBo2Scorestreaks());
	return controller;
};
