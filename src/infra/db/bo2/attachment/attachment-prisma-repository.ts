import { GetBo2AttachmentsRepository } from '../../../../data/bo2/repositories-contracts/get-attachments-repository';
import { Bo2AttachmentModel } from '../../../../domain/models/bo2/attachment';
import { GetBo2AttachmentsParams } from '../../../../domain/usecases-contracts/bo2/get-attachments';
import { prisma } from '../../../../main/config/prisma';

export class Bo2AttachmentPrismaRepository implements GetBo2AttachmentsRepository {
	async get(getBo2AttachmentsParams: GetBo2AttachmentsParams): Promise<Bo2AttachmentModel[] | null>{
		let attachments: Bo2AttachmentModel[];
		if(getBo2AttachmentsParams.gunType){
			attachments = await prisma.bo2Attachment.findMany({
				where: {
					AND: [
						{
							name: getBo2AttachmentsParams.name
						},
						{
							gunType: {
								has: getBo2AttachmentsParams.gunType
							}
						}
					]
				}
			});
		} else {
			attachments = await prisma.bo2Attachment.findMany({
				where: {
					name: getBo2AttachmentsParams.name
				}
			});
		}
		return attachments;
	}
}