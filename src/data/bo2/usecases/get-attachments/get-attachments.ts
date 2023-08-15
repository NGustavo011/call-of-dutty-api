import { Bo2AttachmentModel } from '../../../../domain/models/bo2/attachment';
import { GetBo2AttachmentsContract, GetBo2AttachmentsParams } from '../../../../domain/usecases-contracts/bo2/get-attachments';
import { GetBo2AttachmentsRepository } from '../../repositories-contracts/get-attachments-repository';

export class GetBo2Attachments implements GetBo2AttachmentsContract {
	constructor(private readonly getBo2AttachmentsRepository: GetBo2AttachmentsRepository){
	}

	async get (getBo2AttachmentsParams: GetBo2AttachmentsParams): Promise<Bo2AttachmentModel[] | null>{
		const attachments = await this.getBo2AttachmentsRepository.get(getBo2AttachmentsParams);
		return attachments;
	}
}