import { mockBo2AttachmentModel } from '../../data/bo2/test/mock-attachment';
import { Bo2AttachmentModel } from '../../domain/models/bo2/attachment';
import { GetBo2AttachmentsContract } from '../../domain/usecases-contracts/bo2/get-attachments';

export const mockGetBo2Attachments = (): GetBo2AttachmentsContract => {
	class GetBo2AttachmentsStub implements GetBo2AttachmentsContract {
		async get (): Promise<Bo2AttachmentModel[] | null>{
			return await Promise.resolve([mockBo2AttachmentModel()]);
		}
	}
	return new GetBo2AttachmentsStub();
};