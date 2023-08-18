import { Controller } from '../../../../presentation/contracts/controller';
import { GetBo2AttachmentsController } from '../../../../presentation/controllers/bo2/get-attachments/get-attachments-controller';
import { makeGetBo2Attachments } from '../../usecases/bo2/get-attachments-factory';

export const makeGetBo2AttachmentsController = (): Controller => {
	const controller = new GetBo2AttachmentsController(makeGetBo2Attachments());
	return controller;
};
