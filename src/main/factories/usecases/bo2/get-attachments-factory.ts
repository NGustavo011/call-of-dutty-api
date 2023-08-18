import { GetBo2Attachments } from '../../../../data/bo2/usecases/get-attachments/get-attachments';
import { GetBo2AttachmentsContract } from '../../../../domain/usecases-contracts/bo2/get-attachments';
import { Bo2AttachmentPrismaRepository } from '../../../../infra/db/bo2/attachment/attachment-prisma-repository';

export const makeGetBo2Attachments = (): GetBo2AttachmentsContract => {
	const getBo2AttachmentsRepository = new Bo2AttachmentPrismaRepository;
	return new GetBo2Attachments(getBo2AttachmentsRepository);
};
